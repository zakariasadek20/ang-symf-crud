import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:ClientsComponent},
  {path:'clients',component:ClientsComponent},
  {path:"clients/add",component:AddClientComponent},
  {path:"clients/edit/:id",component:EditClientComponent},
  {path:'**',component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
