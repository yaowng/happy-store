import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { MainLayoutComponent } from './_layouts/main.layout/main.layout.component';
import { AccountLayoutComponent } from './_layouts/account.layout/account.layout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { 
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard], 
    children: [ { path: '', component: HomeComponent } ] 
  },
  { 
    path: '', component: AccountLayoutComponent,
    children: [ { path: 'login', component: LoginComponent } ] 
  },
  //{ path: '', pathMatch: 'full', redirectTo: '/home' }
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
