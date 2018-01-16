import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    public token: string;
    private isAuthUrl = 'http://127.0.0.1:8000/api/isAuthenticate'; 

    constructor(private http: Http) { }

    isAuth():Observable<any>{
        this.token          = JSON.parse(localStorage.getItem('currentUser')).token;
        let headers         = new Headers({ 'Content-Type': 'application/json' }); 
        let options         = new RequestOptions({ headers: headers }); 
        headers.append('Authorization', 'Bearer ' +this.token);  
        return this.http.get(this.isAuthUrl,{headers:headers})
            .map( (response:Response) => {
                let status: String;
                status = response.json();
                return status;
            })
        }
    
}