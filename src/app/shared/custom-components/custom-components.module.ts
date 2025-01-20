import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentsRoutingModule } from './custom-components-routing.module';
import { CustomComponentsComponent } from './custom-components.component';


@NgModule({
  declarations: [
    CustomComponentsComponent
  ],
  imports: [
    CommonModule,
    CustomComponentsRoutingModule
  ]
})
export class CustomComponentsModule { }
