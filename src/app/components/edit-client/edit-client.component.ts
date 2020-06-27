import { ClientsService } from './../../services/clients.service';
import { Client } from './../../models/Client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client:Client={
    id:'',email:'',name:'',password:'',tele:'',username:'',ville:''
  }
  id:number;
  constructor(private clientServices: ClientsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id= +this.route.snapshot.paramMap.get('id');;
     this.clientServices.getOne(this.id)
     .subscribe(clt=>
          {
            this.client=
                {
                    name:clt['name'],
                    email:clt['email'],
                    password:clt['password'],
                    tele:clt['tele'],
                    username:clt['username'],
                    ville:clt['ville'],
                    id:clt['id']
                  };
                  console.log(clt);
                  
          })

    console.log(this.client);
    
  }
  onClick(){
    // console.log(this.client);
    this.clientServices.update(this.id,this.client)
      .subscribe(
              clt=>console.log(clt)
            );
    this.router.navigate([''])
  }
}
