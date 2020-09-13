import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesPageModule } from './view/pages/games-page/games-page.module';
import { GamesPageComponent } from './view/pages/games-page/games-page.component';
import { MainPageComponent } from './view/pages/main-page/main-page.component';
import { MainPageModule } from './view/pages/main-page/main-page.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PreViewComponent } from './view/ui-components/pre-view/pre-view.component';
import { ModalMessageComponent } from './view/ui-components/modal-message/modal-message.component';
import { GamesDetailPageModule } from './view/pages/games-detail-page/games-detail-page.module';
import { GamesDetailPageComponent } from './view/pages/games-detail-page/games-detail-page.component';
import { GamesUpdatePageModule } from './view/pages/games-update-page/games-update-page.module';
import { GamesUpdatePageComponent } from './view/pages/games-update-page/games-update-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainPageModule,
    GamesPageModule,
    GamesDetailPageModule,
    GamesUpdatePageModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
