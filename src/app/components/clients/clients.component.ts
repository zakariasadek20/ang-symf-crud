import { Router } from '@angular/router';
import { Client } from './../../models/Client';
import { ClientsService } from './../../services/clients.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor(private clientService:ClientsService,
    private router:Router,private http:Http){
      this.ngOnInit()
  }
  ngOnInit() {
    this.clients=null;
    this.getAll();
  }
  getAll(){
    this.clientService.getAll().subscribe(
      clt=>{
        this.clients=clt['hydra:member'];
      }
    )
  }
  delete(id){
    console.log(id);
    
    this.clientService.delete(id).subscribe(clt=>{
      this.router.navigateByUrl('');
    });
    
  }


  selectedFile:File=null;
  onFileSelected($event){
    console.log( $event);
    this.selectedFile=<File>$event.target.files[0];
  }

  onUpload(){
    const fd=new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name);
    fd.app
    this.http.post('http://127.0.0.1:8000/api/images',fd)
    .subscribe(res=>{
      console.log(res);
      
    })
  }
}
