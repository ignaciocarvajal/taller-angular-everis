import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesPageRoutingModule } from './games-page-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '../../ui-components/form/form.module';
import { GamesPageComponent } from './games-page.component';


@NgModule({
  declarations: [GamesPageComponent],
  imports: [
    CommonModule,
    FormModule,
    FlexLayoutModule,
    GamesPageRoutingModule
  ],
  exports: [GamesPageComponent]
})
export class GamesPageModule { }
