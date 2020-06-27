import { Routes, Router } from '@angular/router';
import { ClientsService } from './../../services/clients.service';
import { Client } from './../../models/Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client={
    name:'',
    email:'',
    tele:'',
    ville:'',
    password:'',
    username:''
  };
  constructor(private clientServices:ClientsService,private route:Router) { }

  ngOnInit() {
  }

  log(f){
    this.client={
      email:f.value.email,
      name:f.value.name,
      password:f.value.password,
      tele:f.value.tele,
      username:f.value.username,
      ville:f.value.ville
    }
    console.log(this.client);
    this.clientServices.create(this.client).subscribe(
      clt=>{
        console.log(clt);
        this.route.navigate(['']);
      }
      
    )
  }
}
