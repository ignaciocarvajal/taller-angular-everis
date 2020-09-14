import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-games-detail-page',
  templateUrl: './games-detail-page.component.html',
  styleUrls: ['./games-detail-page.component.scss']
})
export class GamesDetailPageComponent implements OnInit {
  gameInput: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('paramas detail->', params);
    });
  }

  saveGame(game: any) {

  }

}
