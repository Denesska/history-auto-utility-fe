# Coverage bar (`<app-coverage-bar>`)

## Functionality

When a car's document (e.g. RCA) is followed by another one of the same type that starts right
after it, the expiry deadline is shown as one combined bar: one segment per document, a small
gap where one hands over to the next, a "Combined · N documents" chip and a caption saying the
view is temporary and continues with the next document from a given date. It is only a
convenience view; each document keeps its own bar and days in its own row.

## Implementation

- Standalone, inputs: `segments` (`{startPct,endPct}`), `progressPercent`, `state`
  (`ok|warning|overdue`), `docCount`, `handoffDate` (ISO), `compact` (hides the caption).
- Per-segment fill is derived from the overall `progressPercent`; colors reuse the `--hau-*-fg`
  tokens of `.hau-progress`. Later segments are striped to signal "temporary".
- Data comes from `getCoverageChain` (`shared/utils/document-status.util.ts`) /
  `CarDeadlineItem.coverage`. Used in the car hub deadlines (`cars-details`) and the document
  detail page. i18n: `documents.detail.coverage.*`.
