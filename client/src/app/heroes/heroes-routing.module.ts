import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../_layouts/main.layout/main.layout.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroesRoutes: Routes = [
  // { 
  //   path: '', component: MainLayoutComponent,
  //   children: [
      { path: 'heroes', redirectTo: 'myheroes' },
      { path: 'hero/:id', redirectTo: 'myhero/:id' },
      { path: 'myheroes', component: HeroListComponent },
      { path: 'myhero/:id', component: HeroDetailComponent }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule {}