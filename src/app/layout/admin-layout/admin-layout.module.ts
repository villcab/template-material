import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderModule } from '../header';
import { SidebarModule } from '../sidebar';

const MATERIAL_COMPONENTS = [
  MatSidenavModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    SidebarModule,
    MATERIAL_COMPONENTS,
  ],
  declarations: [AdminLayoutComponent]
})
export class AdminLayoutModule { }
