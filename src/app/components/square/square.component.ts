import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  /**
   * the value of each square!!!
   */
  @Input() value: 'X' | 'O';
}
