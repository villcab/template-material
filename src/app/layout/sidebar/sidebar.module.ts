import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule } from '@angular/material';

import { SidebarComponent } from './sidebar.component';

const MATERIAL_COMPONENTS = [
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
