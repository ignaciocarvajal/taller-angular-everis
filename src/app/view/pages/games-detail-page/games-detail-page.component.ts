import { IGame } from './../../ui-components/form/models/game.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GamesService } from 'src/app/core/services/games.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-games-detail-page',
  templateUrl: './games-detail-page.component.html',
  styleUrls: ['./games-detail-page.component.scss']
})
export class GamesDetailPageComponent implements OnInit {
  gameInput: any;
  game: IGame;
  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly gamesService: GamesService
    ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const id : string = params['id'];
      this.getGameById(id);
    });

  }

  getGameById(id: string) {

    this.gamesService.getById(id).pipe(
      map( (res: IGame) => res)
    ).subscribe((response: IGame) => this.game = response);

  }

  goHome() {
    this.router.navigate(['/']);
  }

}
