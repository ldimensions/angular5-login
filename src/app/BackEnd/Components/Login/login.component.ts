import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from "../../Model/user";
import { LoginService } from "../../Services/login.service";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    
    submitted = false;
    login: any = {};
    error: Boolean = false;
    
    constructor(
        private loginService: LoginService,
        private router: Router,
        ) { }

    ngOnInit() { 
        this.loginService.logout();
    }

    onSubmit(isValid: boolean) { 
        this.submitted = true; 
        if(!isValid){
            this.submitted = false; 
            return true;
        }
        this.loginService.login(this.login).subscribe(
            userDetails => {
                //console.log(userDetails['token']);
                this.error = false;
                localStorage.setItem('currentUser', JSON.stringify(
                    { 
                        name: userDetails['name'], 
                        token: userDetails['token'] 
                    }));
                this.router.navigate(['/dashboard']);
            }
            , err => {
                console.log("error-"+err);
                this.submitted = false; 
                this.error = true;
            }
        );
    }
}