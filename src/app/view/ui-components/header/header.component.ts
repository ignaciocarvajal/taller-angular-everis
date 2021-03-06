import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() addGame: EventEmitter<any> = new EventEmitter<any>();
  @Output() goHomePage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addGame.emit();
  }

  goHome(){
    this.goHomePage.emit();
  }

}
