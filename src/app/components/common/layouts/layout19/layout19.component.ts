import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout19',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule],
  templateUrl: './layout19.component.html',
  styleUrl: './layout19.component.css',
})
export class Layout19Component implements OnInit {
  dynamicHtmlContent!: string;
  constructor() {}
  @Output() titleChange = new EventEmitter();
  @Output() descriptionChange = new EventEmitter();
  @Input({ required: true }) isEdit: any;

  ngOnInit(): void {
    this.dynamicHtmlContent = `<span><a class="text-[#33C1FF] cursor-pointer" target="_blank" href="${
      this.link && this.imageUrl + this.link
    }" > Click here to download</a></span>`;
  }
  @Input() project_name!: string;
  @Input() description!: string;
  @Input() link!: string;
  imageUrl = environment.image_url_server;

  CustomTitleText(event: any) {
    this.titleChange.emit(event.target.value);
  }
  CustomDescriptionText(event: any) {
    this.descriptionChange.emit(event.target.value);
  }
}
