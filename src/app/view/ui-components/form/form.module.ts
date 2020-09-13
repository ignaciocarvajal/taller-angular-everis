import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [FormComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [FormComponent]
})
export class FormModule { }
