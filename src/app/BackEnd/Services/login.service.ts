import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from "../Model/user";

@Injectable()
export class LoginService {

    public token: string;
    private loginUrl = 'http://127.0.0.1:8000/api/login'; 

    constructor(private http: Http) { 
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;        
    }

    login(formValues):Observable<User[]>{
        return this.http.post(this.loginUrl, formValues) // ...using post request
            .map((res:Response) => res.json())
    }

    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');        
      }
 
    
}