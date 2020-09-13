import { IGame } from './../../ui-components/form/models/game.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {

  showGame: IGame;
  gameInput: IGame;

  constructor() {
    this.gameInput = {
      title: 'final Fantasy',
      price: 34453,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71XoTXkseJL._AC_SY879_.jpg',
      description: 'juego Fantasia',
      category: 'RPG',
    };
  }

  ngOnInit(): void {

  }

  saveGame(game: IGame) {
    console.log('save game -->', game);
    this.showGame = game;
  }
}
