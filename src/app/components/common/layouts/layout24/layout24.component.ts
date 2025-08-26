import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-layout24',
  standalone: true,
  imports: [],
  templateUrl: './layout24.component.html',
  styleUrl: './layout24.component.css'
})
export class Layout24Component {
  @Input() imageName!: string | null
  imageUrl = environment.image_url_server
}
