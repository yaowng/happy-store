import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainLayoutComponent } from './_layouts/main.layout/main.layout.component';
import { AccountLayoutComponent } from './_layouts/account.layout/account.layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AccountLayoutComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
