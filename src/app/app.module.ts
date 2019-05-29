import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './layout/emplist/emplist.component';
import { EmpaddComponent } from './layout/empadd/empadd.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
