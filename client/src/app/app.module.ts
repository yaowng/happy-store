import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainLayoutComponent } from './_layouts/main.layout/main.layout.component';
import { AccountLayoutComponent } from './_layouts/account.layout/account.layout.component';
// import { HeroListComponent } from './heroes/hero-list.component';
// import { HeroDetailComponent } from './heroes/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    MainLayoutComponent,
    AccountLayoutComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    // HeroListComponent,
    // HeroDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
