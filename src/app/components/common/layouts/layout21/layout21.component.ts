import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout21',
  standalone: true,
  imports: [MatIconModule,CommonModule,RouterModule],
  templateUrl: './layout21.component.html',
  styleUrl: './layout21.component.css',
})
export class Layout21Component {
  constructor(public router:Router){}
  imageUrl = environment.image_url_server;
  @Input() image!: string | null;
  @Input() description!: string | null;
  @Input() title!: string | null;
  @Input() link!: string | null;

  showOverlay = false;

  toggleOverlay(event:any): void {
    // event.stopPropagation()
    this.showOverlay = !this.showOverlay;
  }
  onClicknavigate(event:Event):void{
    event.preventDefault()
    // this.router.navigate([`${this.imageUrl}/+${this.link}`]);
  }
}
