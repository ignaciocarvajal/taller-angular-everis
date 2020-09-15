import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesDetailPageRoutingModule } from './games-detail-page-routing.module';
import { FormModule } from '../../ui-components/form/form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GamesDetailPageComponent } from './games-detail-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GamesDetailPageComponent],
  imports: [
    CommonModule,
    FormModule,
    MatButtonModule,
    FlexLayoutModule,
    GamesDetailPageRoutingModule
  ],
  exports: [GamesDetailPageComponent],
  entryComponents: [GamesDetailPageComponent]
})
export class GamesDetailPageModule { }
