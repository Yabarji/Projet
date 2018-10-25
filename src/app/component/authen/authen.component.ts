import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  state: boolean;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.state = this.authService.state;
  }

  public login(): void {

    this.authService.login();
    this.state = this.authService.state;


    if (this.route.snapshot.queryParamMap.has('back')) {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('back'));
    }
  }

  public logout(): void {
    this.authService.logout();
    this.state = this.authService.state;


  }

}
