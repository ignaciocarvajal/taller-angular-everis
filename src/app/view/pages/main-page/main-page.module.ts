import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

import { CardListModule } from "../../ui-components/card-list/card-list.module";


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CardListModule,
  ],
  exports: [MainPageComponent]

})


export class MainPageModule { }
