import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-layout23',
  standalone: true,
  imports: [CarouselModule,TagModule,ButtonModule,CommonModule],
  templateUrl: './layout23.component.html',
  styleUrl: './layout23.component.css'
})
export class Layout23Component {
  @Input() data! : any[]
  imageUrl = environment.image_url_server
}
