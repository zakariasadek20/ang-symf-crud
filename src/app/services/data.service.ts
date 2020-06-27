import { Client } from './../models/Client';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private url:string,private http:Http) { }
   
  getAll():Observable<any>{
    
   return this.http.get(this.url).pipe(
     catchError(this.handelError),map(response=>response.json()));
  }

  getOne(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id).pipe(
     catchError(this.handelError), map(response=>response.json())
    );
    
  }
  update(id:number,clt:Client):Observable<any>{
    clt.id=id;
    return this.http.put(this.url+'/'+id,clt);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id)
  }

  create(client:Client):Observable<any>{
    return this.http.post(this.url,client).pipe(
      catchError(this.handelError),map(response=>response.json())
    );
  }

  private handelError(error:Response){
     return Observable.throw(new AppError);
  }

}
