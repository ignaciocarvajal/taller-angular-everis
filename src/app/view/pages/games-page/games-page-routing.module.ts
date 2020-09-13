import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesPageComponent } from './games-page.component';

const routes: Routes = [{
  path: '',
  component: GamesPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRoutingModule { }
