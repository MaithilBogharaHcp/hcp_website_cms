import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GeneralServicesService } from '../../../../services/general-services.service';
import { DropdownModule } from 'primeng/dropdown';

interface FileWithIndex {
  file: File;
  index: number;
}

@Component({
  selector: 'app-layout9',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    DropdownModule,
  ],
  templateUrl: './layout9.component.html',
  styleUrl: './layout9.component.css',
})
export class Layout9Component implements OnInit {
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private service: GeneralServicesService
  ) {}

  @Input() imageName1!: string | null;
  @Input() imageName2!: string | null;
  @Input() imageName3!: string | null;
  @Input() imageName4!: string | null;
  @Input() project_name1!: any;
  @Input() project_name2!: any;
  @Input() project_name3!: any;
  @Input() project_name4!: any;
  @Input() nameOption!: any;

  @Output() onClick = new EventEmitter();

  gapInpx = (22 * window.innerWidth) / 1920 + 'px';
  imageUrl = environment.image_url_server;
  @Input() isEdit!: boolean;
  @Input({ required: true }) id: any;

  @Output() imageUpload = new EventEmitter<any>();
  @Output() imageDelete = new EventEmitter<any>();

  @Output() getFile = new EventEmitter<FileWithIndex>();
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
          } else if (index === 1 && width === 610 && height === 428) {
            resolve(true);
          } else if (index === 2 && width === 610 && height === 428) {
            resolve(true);
          } else if (index === 3 && width === 1243 && height === 428) {
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
