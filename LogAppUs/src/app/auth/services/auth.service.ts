import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/us-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/res-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl: string = environment.baseUrl;
  private _user!: user;
  get user():any{
    return {...this._user};
  }
  constructor(private http: HttpClient) { }
  register(usname: string, id: string , pass:string){
    const URL = `${this.BaseUrl}/api/auth/new`
    const body = {usname,id,pass};
    return this.http.post<AuthResponse>(URL,body).pipe(
      tap(res => {
        console.log(res)
        if(res.ok){
          localStorage.setItem('token',res.token!);
          this._user = {
            id:res.id!,
            usname:res.usname!
          }
        }
      }),
      map(res=>res.ok),
      catchError(err=> of(err.error.menssage))

    );
  }
  login(id:string,pass:string){
    const URL = `${this.BaseUrl}/api/auth`;
    const body = {id,pass};
    return this.http.post<AuthResponse>(URL,body).pipe(
      tap(res => {
        //console.log(res)
        if(res.ok){
          localStorage.setItem('token',res.token!);
          this._user = {
            id:res.id!,
            usname:res.usname!
          }
        }
      }),
      map(res=>res.ok),
      catchError(err=> of(err.error.menssage))

    );
  }
  validateToken():Observable<boolean>{
    const url = `${this.BaseUrl}/api/auth/renew`;
    const headers = new HttpHeaders().set(
      'apikey',localStorage.getItem('token')|| ''
    );
      return this.http.get<AuthResponse>(url,{headers}).
      pipe(
        map(
          res =>{
            localStorage.setItem('token',res.token!);
            this._user={
              id: res.id!,
              usname: res.usname!

            }
            return res.ok;
          }
        ),
        catchError(error=>of(false))
      )

  
  }
  logOut(){
    localStorage.clear();
    console.log("prueba")
  }
}
