import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { environment } from '../../../../../environments/environment.development';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout33',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
  ],
  templateUrl: './layout33.component.html',
  styleUrl: './layout33.component.css',
})
export class Layout33Component implements AfterViewInit {
  constructor(private router: Router) {}
  @Input({ required: true }) id: any;
  @Input({ required: true }) isEdit: any;
  @Input() imageName1!: any;
  @Input() title!: string | null;
  @Input() description!: string | null;
  @Input() news_description2!: string | null;
  @Input() link!: string | null;
  @Input() alt_text!: string | null;
  @Input() url!: string | null;
  @Output() onClick = new EventEmitter();
  @Output() titleChange = new EventEmitter();
  @Output() descriptionChange = new EventEmitter();
  @Output() descriptionChange2 = new EventEmitter();
  @Output() linkChange = new EventEmitter();

  @ViewChild('videoPlayer1', { static: false }) videoPlayer1:
  | ElementRef
  | undefined;

  imageUrl = environment.image_url_server;
  // navigate(url: any) {
  //   this.onClick.emit(url)
  // }
  
  ngAfterViewInit(): void {
    if (this.videoPlayer1) {
      this.videoPlayer1.nativeElement.load();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imageName1']) {
      if (this.videoPlayer1) {
        this.videoPlayer1.nativeElement.load();
      }
    }
  }

  isBase64(data: string): boolean {
    return (
      typeof data === 'string' &&
      (data.startsWith('data:image/') || data.startsWith('data:video/mp4')) || data.startsWith('./')
    );
  }

  setImage(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      const maxSize = 10 * 1024 * 1024; // 10 MB max size
  
      if (fileType !== 'image' && fileType !== 'video') {
        alert('Please select an image or video file.');
        return;
      }
  
      if (file.size > maxSize) {
        alert('The file size is too large. Please select a file smaller than 10MB.');
        return;
      }
  
      const reader = new FileReader();
      if (fileType === 'image') {
        reader.onload = () => {
          const imgUrl = reader.result as string;
          this.imageName1 = imgUrl;
          this.onClick.emit(file);
        };
        reader.readAsDataURL(file); 
      } else if (fileType === 'video') {
        reader.onload = () => {
          const videoUrl = reader.result as string;
          this.imageName1 = videoUrl; 
          this.onClick.emit(file); 
          const videoElement = this.videoPlayer1?.nativeElement;
          if (videoElement) {
            videoElement.load();
            videoElement.play();
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
  CustomTitleText(newTitle: string) {
    this.titleChange.emit(newTitle);
  }

  CustomDescriptionText(newDescription: string) {
    this.descriptionChange.emit(newDescription);
  }

  CustomDescriptionText2(newDescription2: string) {
    this.descriptionChange2.emit(newDescription2);
  }

  CustomLinkText(newLink: string) {
    this.linkChange.emit(newLink);
  }

  navigate(url: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(url);
    });
  }
}
