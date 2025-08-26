import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout22',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout22.component.html',
  styleUrl: './layout22.component.css',
})
export class Layout22Component {
  imageUrl = environment.image_url_server;
  @Input() image!: string | null;
  @Input() description!: string | null;
  @Input() title!: string | null;
  @Input() hover!: boolean;
  @Input() redirectId: any;
  @Output() onClick = new EventEmitter()

  handleBrochures(id: any) {
    this.onClick.emit(id)
  }
}
