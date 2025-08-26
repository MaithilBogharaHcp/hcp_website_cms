import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { GeneralServicesService } from '../../../../services/general-services.service';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonComponent } from '../../button/button.component';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-layout20',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    ButtonComponent,
  ],
  templateUrl: './layout20.component.html',
  styleUrl: './layout20.component.css',
})
export class Layout20Component implements OnInit {
  imageUrl = environment.image_url_server;
  @Input({ required: true }) isEdit: any;
  @Input({ required: true }) data!: any;
  @Input() route_name!: string;
  @Output() titleChange = new EventEmitter();
  @Output() descriptionChange = new EventEmitter();
  @Output() yearChange = new EventEmitter();
  @Output() clientChange = new EventEmitter();
  @Output() areaChange = new EventEmitter();
  @Output() builtupAreaChange = new EventEmitter();
  @Output() tagsChange = new EventEmitter<string[]>();
  @Output() getFile = new EventEmitter<File>();
  areaOptions!: any;
  proejctTags!: any[];

  constructor(
    private router: Router,
    private service: GeneralServicesService
  ) {}

  isBase64(imagePath: string | null): boolean {
    return imagePath ? imagePath.startsWith('data:image/') : false;
  }

  // handleTagClick(item: string) {
  //   this.router.navigate([`/${this.route_name}`], {queryParams: { route_type: item }});
  // }

  ngOnInit(): void {}

  CustomTitleText(event: any) {
    this.titleChange.emit(event.target.value);
  }

  CustomDescriptionText(event: any) {
    this.descriptionChange.emit(event.target.value);
  }

  CustomYearText(event: any) {
    this.yearChange.emit(event.target.value);
  }

  setImage(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          if (img.width === 412 && img.height === 412) {
            this.getFile.emit(file);
          } else {
            alert('Please upload an image with dimensions 412X412.');
          }
        };

        img.src = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  AddParaGap() {
    if (this.data.project_description) {
      const hasTwoBreaksAtEnd = /(<br\s*\/?>){2}$/i.test(
        this.data.project_description
      );

      if (!hasTwoBreaksAtEnd) {
        this.data.project_description += '<br /><br />';
      }
    } else {
      this.data.project_description = '<br /><br />';
    }
    this.descriptionChange.emit(this.data.project_description);
  }
}
