import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "@hau/features/auth/auth.service";
import {HAU_ROUTES} from "@hau/app.routes.const";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  standalone: true
})
export class TokenComponent  implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private authService: AuthService,
      private router: Router
  ) {}

  ngOnInit() {
    // Preia tokenul din query parameters
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      debugger
      if (token) {
        // Salvează tokenul
        void this.authService.saveToken(token);

        // Redirecționează utilizatorul către dashboard
        void this.router.navigate([HAU_ROUTES.main.fullPath]);
      } else {
        // Dacă nu există token, redirecționează către login
        void this.router.navigate([HAU_ROUTES.auth.fullPath]);
      }
    });
  }

}
