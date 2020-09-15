import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesUpdatePageRoutingModule } from './games-update-page-routing.module';
import { FormModule } from '../../ui-components/form/form.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GamesUpdatePageComponent } from './games-update-page.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [GamesUpdatePageComponent],
  imports: [
    CommonModule,
    FormModule,
    MatButtonModule,
    FlexLayoutModule,
    GamesUpdatePageRoutingModule
  ],
  exports: [GamesUpdatePageComponent]
})
export class GamesUpdatePageModule { }
