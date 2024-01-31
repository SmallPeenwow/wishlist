import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from './../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wishText!: string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];

    return { 'strikeout text-muted': this.fullfilled };
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
