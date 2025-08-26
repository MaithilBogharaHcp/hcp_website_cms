import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout25',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './layout25.component.html',
  styleUrl: './layout25.component.css',
})
export class Layout25Component {
  @Input() image!: string | null;
  @Input({ required: true }) isEdit: any;
  @Input() people_name!: string;
  @Input() designation_name!: string;
  @Input() labledata!: string;
  @Output() onClick = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  imageUrl = environment.image_url_server;
  faTrash = faTrash;

  handleData(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.onClick.emit(event);
  }

  handleDelete(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.clickDelete.emit(event);
  }
}
