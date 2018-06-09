import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LOGIN_ROUTE } from './login.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
