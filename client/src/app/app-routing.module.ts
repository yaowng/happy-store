import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { MainLayoutComponent } from './_layouts/main.layout/main.layout.component';
import { AccountLayoutComponent } from './_layouts/account.layout/account.layout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HeroListComponent } from './heroes/hero-list.component';

const routes: Routes = [
  { 
    path: '', component: MainLayoutComponent, 
    children: [ 
      { path: '', component: HomeComponent }, 
      { path: 'heroes', component: HeroListComponent }
    ] 
  },
  { 
    path: '', component: AccountLayoutComponent,
    children: [ { path: 'login', component: LoginComponent } ] 
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: NotfoundComponent }
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
