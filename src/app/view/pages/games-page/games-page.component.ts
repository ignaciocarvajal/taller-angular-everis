import { IGame } from './../../ui-components/form/models/game.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GamesService } from 'src/app/core/services/games.service';
import { info } from 'console';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {

  showGame: IGame;
  gameInput: IGame;

  constructor(
    private readonly router: Router,
    private readonly gamesService: GamesService
  ) {}

  ngOnInit(): void {

  }

  saveGame(game: IGame) {
   this.gamesService.create(game).subscribe((res: any) => {
    console.info('save game',res);
    this.router.navigate(['/']);
   })
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
