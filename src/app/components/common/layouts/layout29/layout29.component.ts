import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-layout29',
  standalone: true,
  imports: [],
  templateUrl: './layout29.component.html',
  styleUrl: './layout29.component.css'
})
export class Layout29Component {
  constructor() {
  }


  @Input() project_name!: string;
  @Input() description!: string;
  @Input() link!: string;
  imageUrl = environment.image_url_server;
}
