import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule}  from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardListComponent } from "./card-list.component";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [CardListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [CardListComponent]
})
export class CardListModule { }
