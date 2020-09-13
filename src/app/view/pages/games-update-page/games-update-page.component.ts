import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-games-update-page',
  templateUrl: './games-update-page.component.html',
  styleUrls: ['./games-update-page.component.scss']
})
export class GamesUpdatePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('paramas update -->', params);
    });
  }

}
