import {Component} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import {JwtInterceptor} from "@auth0/angular-jwt";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonRouterOutlet, IonApp],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}]
})
export class AppComponent {

}
