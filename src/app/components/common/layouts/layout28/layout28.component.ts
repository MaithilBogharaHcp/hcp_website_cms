import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout28',
  standalone: true,
  imports: [],
  templateUrl: './layout28.component.html',
  styleUrl: './layout28.component.css'
})
export class Layout28Component {
  @Input() title!: string;
  @Input() description!: string;
  @Input() id!: any;
  @Output() onClick = new EventEmitter()

  handleData(id:any) {
    this.onClick.emit(id)
  }
}
