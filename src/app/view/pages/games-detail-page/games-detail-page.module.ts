import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesDetailPageRoutingModule } from './games-detail-page-routing.module';
import { FormModule } from '../../ui-components/form/form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GamesDetailPageComponent } from './games-detail-page.component';


@NgModule({
  declarations: [GamesDetailPageComponent],
  imports: [
    CommonModule,
    FormModule,
    FlexLayoutModule,
    GamesDetailPageRoutingModule
  ],
  exports: [GamesDetailPageComponent]
})
export class GamesDetailPageModule { }
