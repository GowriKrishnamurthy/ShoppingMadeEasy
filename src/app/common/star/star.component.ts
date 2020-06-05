import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 100 / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating  ${this.rating} was clicked`);
  }
}
