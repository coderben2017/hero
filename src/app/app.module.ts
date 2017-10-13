import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MockHeroesComponent } from './mock-heroes/mock-heroes.component';
import { Page404Component } from './page404/page404.component';
import { AppRoutingModule } from './app.routing.module';
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MockHeroesComponent,
    HeroesComponent,
    DashboardComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [HeroService], // 将服务类加入提供器
  bootstrap: [AppComponent]
})
export class AppModule { }
