import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from './../../shared/services/EventService';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];

    return { 'strikeout text-muted': this.wish.isComplete };
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
