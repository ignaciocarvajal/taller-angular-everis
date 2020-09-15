import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesPageModule } from './view/pages/games-page/games-page.module';
import { MainPageModule } from './view/pages/main-page/main-page.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GamesDetailPageModule } from './view/pages/games-detail-page/games-detail-page.module';
import { GamesUpdatePageModule } from './view/pages/games-update-page/games-update-page.module';
import { HeaderModule } from './view/ui-components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './view/ui-components/footer/footer.module';

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
    HeaderModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
