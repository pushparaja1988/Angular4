import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginFormComponent,
    children:[]
  },
  {
    path:'login',
    component:LoginFormComponent,
    children:[]
  },
  {
    path:'form1',
    component:Form1Component,
    children:[]
  },
  {
    path:'form2',
    component:Form2Component,
    children:[]
  },
  {
    path:'dashboard',
    canActivate : [AuthGuard],
    component:DashboardComponent,
    children:[]
  },
  // {
  //   path:'home/:users',
  //   component: HomeComponent
  // },
//Adding children inside the router path
  {
    path:'home',
   // pathMatch:'full',
    children:[
      {
        path:':name', 
        component: HomeComponent
      },
      {
        path:':name/:id',
        component: HomeComponent
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
