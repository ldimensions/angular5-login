import { Injectable } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';
import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private route: Router,
        private authService: AuthService,        
    ) {}

    canActivate() {
        if(localStorage.getItem('currentUser') == 'null'){
            this.route.navigate(['/login']);
        }else{
            this.authService.isAuth().subscribe(
                isAuthStatus => {
                    if(!isAuthStatus.status){
                        this.route.navigate(['/login']);
                    }
                }
                , err => {
                    console.log("Error - "+err);
                    this.route.navigate(['/login']);
                }
            );
            return true;
          }       
        }            

}