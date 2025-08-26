import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeneralServicesService } from '../../../../services/general-services.service';
import { DropdownModule } from 'primeng/dropdown';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-layout11',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    DropdownModule,
  ],
  templateUrl: './layout11.component.html',
  styleUrl: './layout11.component.css',
})
export class Layout11Component implements OnInit {
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private service: GeneralServicesService
  ) {}
  @Input() imageName1!: string | null;
  @Input() imageName2!: string | null;
  @Input() project_name1!: any;
  @Input() project_name2!: any;
  @Input() nameOption!: any;
  @Output() onClick = new EventEmitter();
  imageUrl = environment.image_url_server;
  gapInpx = (23 * window.innerWidth) / 1920 + 'px';
  @Output() getFile = new EventEmitter<FileWithIndex>();

  @Input({ required: true }) id: any;
  @Input({ required: true }) isEdit: any;
  projectName: any;
  @Output() projectNameChange = new EventEmitter();

  ngOnInit(): void {
    this.service.ProjectName(this.nameOption).subscribe((data: any) => {
      this.projectName = data.data;
    });
  }

  isBase64(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:image/') : false;
  }

  validateImageDimensions(file: File, index: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          const { width, height } = img;

          if (index === 0 && width === 610 && height === 879) {
            resolve(true);
          } else if (
            (index === 1 || index === 2) &&
            width === 1243 &&
            height === 879
          ) {
            resolve(true);
          } else {
            reject('Invalid image dimensions.');
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  setImage(event: any, index: number): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.validateImageDimensions(file, index)
        .then(() => {
          this.getFile.emit({ file, index });
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  ProjectNameText(event: any, index: number): void {
    this.projectNameChange.emit({
      name: event.value || '',
      index,
    });
  }
}
