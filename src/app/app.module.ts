import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { AllHeroesComponent } from './heroe/components/all-heroes/all-heroes.component';
import { UpadteHeroeComponent } from './heroe/components/upadte-heroe/upadte-heroe.component';
import { DeleteHeroeComponent } from './heroe/components/delete-heroe/delete-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    AllHeroesComponent,
    UpadteHeroeComponent,
    DeleteHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
