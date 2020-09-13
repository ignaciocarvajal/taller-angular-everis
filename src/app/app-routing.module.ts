import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: 'games',
    loadChildren: () =>
      import('./view/pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'games/create',
    loadChildren: () =>
      import('./view/pages/games-page/games-page.module').then(
        (m) => m.GamesPageModule
      ),
  },

  {
    path: 'games/detail/:id',
    loadChildren: () =>
      import('./view/pages/games-detail-page/games-detail-page.module').then(
        (m) => m.GamesDetailPageModule
      ),
  },
  {
    path: 'games/update/:id',
    loadChildren: () =>
      import('./view/pages/games-update-page/games-update-page.module').then(
        (m) => m.GamesUpdatePageModule
      ),
  },
  { path: '**', redirectTo: 'games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
