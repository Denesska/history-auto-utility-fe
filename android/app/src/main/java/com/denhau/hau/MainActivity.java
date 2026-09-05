package com.denhau.hau;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import org.json.JSONObject;

/**
 * Adds an Android "share to this app" entry point on top of Capacitor's bridge. When the user
 * shares a Google Maps place (ACTION_SEND, text/plain), we hand the raw text to the web layer by
 * calling a global {@code window.__handleSharedText(text)} it registers (see NavShareService).
 *
 * No Capacitor plugin is involved on purpose: the standard receive-intent plugins do not yet track
 * Capacitor 8, and org.json + evaluateJavascript are already on the platform. Because a cold start
 * fires the intent before the web app has loaded, delivery retries until the handler exists.
 */
public class MainActivity extends BridgeActivity {

    private static final long RETRY_DELAY_MS = 500;
    private static final int MAX_ATTEMPTS = 40; // ~20s, long enough for a cold start to finish loading

    private final Handler handler = new Handler(Looper.getMainLooper());

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        handleSendIntent(getIntent());
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        handleSendIntent(intent);
    }

    private void handleSendIntent(Intent intent) {
        if (intent == null) {
            return;
        }
        if (!Intent.ACTION_SEND.equals(intent.getAction())) {
            return;
        }
        String type = intent.getType();
        if (type == null || !type.startsWith("text/")) {
            return;
        }
        String text = intent.getStringExtra(Intent.EXTRA_TEXT);
        if (text == null || text.trim().isEmpty()) {
            return;
        }
        deliverWhenReady(text, 0);
    }

    private void deliverWhenReady(final String text, final int attempt) {
        WebView webView = getBridge() != null ? getBridge().getWebView() : null;
        if (webView == null) {
            if (attempt < MAX_ATTEMPTS) {
                handler.postDelayed(() -> deliverWhenReady(text, attempt + 1), RETRY_DELAY_MS);
            }
            return;
        }

        // JSONObject.quote produces a safely escaped, double-quoted JS string literal.
        final String payload = JSONObject.quote(text);
        final String js =
            "(function(){"
                + "if (window.__handleSharedText) { window.__handleSharedText(" + payload + "); return true; }"
                + "return false;"
                + "})()";

        final WebView target = webView;
        target.post(() -> target.evaluateJavascript(js, value -> {
            // evaluateJavascript returns the JS result as a string: "true" once the web handler ran.
            if (!"true".equals(value) && attempt < MAX_ATTEMPTS) {
                handler.postDelayed(() -> deliverWhenReady(text, attempt + 1), RETRY_DELAY_MS);
            }
        }));
    }
}
