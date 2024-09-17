import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-row-item',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {

  @Input() item: Item = new Item();
  
}
