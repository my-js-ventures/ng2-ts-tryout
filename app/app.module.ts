import {ApiModule} from './api.module';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {DashboardComponent} from './components/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroSearchComponent} from './components/hero-search.component';
import {HeroesComponent} from './components/heroes.component';
import {HeroService} from './services/hero.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import './rxjs-extensions';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    ApiModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HeroService
  ]
})
export class AppModule {
}
