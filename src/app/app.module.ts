import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ModeratorComponent } from './moderator/moderator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ModeratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
