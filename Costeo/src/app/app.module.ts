import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosteoHeaderComponent } from './costeo/header/costeo-header/costeo-header.component';
import { TableCharlyComponent } from './Costeo/table-charly/table-charly.component';

@NgModule({
  declarations: [
    AppComponent,
    CosteoHeaderComponent,
    TableCharlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
