import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GamesService } from 'src/app/core/services/games.service';
import { IGame } from '../../ui-components/form/models/game.model';

@Component({
  selector: 'app-games-update-page',
  templateUrl: './games-update-page.component.html',
  styleUrls: ['./games-update-page.component.scss']
})
export class GamesUpdatePageComponent implements OnInit {
  gameInput: any;
  game: IGame;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
       this.id = params['id'];
      this.getGameById(this.id);
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

  updateGame(plan: any) {
    console.log('update game', plan);

    this.gamesService.update(this.id, plan).subscribe((res: any) => {
      console.info('save game',res);
      this.router.navigate(['/']);
    });
  }

}
