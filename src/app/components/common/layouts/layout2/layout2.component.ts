import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { environment } from '../../../../../environments/environment.development';
import { Router, RouterModule } from '@angular/router';

export type CropperDialogResult = {
  blob: Blob;
  imageUrl: string;
};

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.css',
})
export class Layout2Component {
  @Input({ required: true }) id: any;
  @Input({ required: true }) isEdit: any;
  @Output() getFile = new EventEmitter<File>();
  @Output() titleChange = new EventEmitter();
  @Output() descriptionChange = new EventEmitter();
  @Input() imageName1!: string | null
  @Input() title!: string | null
  @Input() description!: string | null
  @Input() alt_text!: string | null
  @Input() url!: string | null
  @Output() onClick = new EventEmitter()
  imageUrl = environment.image_url_server 
constructor(private router:Router){}
  // navigate(url: any) {
  //   this.onClick.emit(url)
  // }

  isBase64(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:image/') : false;
  }

  setImage(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          if (img.width === 1240 && img.height === 517) {
            this.getFile.emit(file);
          } else {
            alert('Please upload an image with dimensions 1243x517.');
          }
        };

        img.src = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  CustomTitleText(event: any) {
    this.titleChange.emit(event.target.value);
  }
  CustomDescriptionText(event: any) {
    this.descriptionChange.emit(event.target.value);
  }


  navigate(url:any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(url);
    });
  }
}
