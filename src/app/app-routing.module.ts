import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './+Pages/signin/signin.component';
import { RegisterComponent } from './+Pages/signin/Register/register/register.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/signin',pathMatch:'full'},
  {path:'**',redirectTo:'/signin'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
