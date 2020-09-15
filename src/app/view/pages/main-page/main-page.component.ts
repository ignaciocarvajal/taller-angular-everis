import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IGameModel } from 'src/app/core/models/gameData.model';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  games: Observable<IGameModel[]>;

  constructor(
    private gamesService: GamesService,
    private readonly router: Router,

    ) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.games = this.gamesService.getAll();
  }

  goDetail(id: string){
    this.router.navigate(['/games/detail/', id]);
  }

  goModify(id: string){
    this.router.navigate(['/games/update/', id]);
  }

  goDelete(id: string) {
    this.gamesService.delete(id).subscribe((res: any) => {
      this.getAllGames();
    });
  }

}
