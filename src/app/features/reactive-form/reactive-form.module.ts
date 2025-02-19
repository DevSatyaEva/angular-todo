import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormRoutingModule, ReactiveFormsModule],
})
export class ReactiveFormModule {}
