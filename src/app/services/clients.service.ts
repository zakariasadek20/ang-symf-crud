import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends DataService {

  constructor(http:Http) {
    super('http://127.0.0.1:8000/api/clients',http);
   }
}
