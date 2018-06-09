import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutModule } from './layout/admin-layout';
import { MATERIAL_ROUTES } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminLayoutModule,
    RouterModule.forRoot(MATERIAL_ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
