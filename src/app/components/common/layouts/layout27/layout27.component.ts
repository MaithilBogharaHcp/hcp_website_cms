import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout27',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout27.component.html',
  styleUrl: './layout27.component.css',
})
export class Layout27Component {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) routename!: any;
  imageUrl = environment.image_url_server;

  constructor(public router: Router) {}

  navigate(id: string) {
    // ar_representatives
    // architecture-representatives
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    if (id === 'model_making') {
      this.router.navigateByUrl(`/model-making`);
    } else if (id === 'ar_representatives') {
       this.router.navigateByUrl(`architecture-representatives`);
    } else if (id === 'software_support') {
       this.router.navigateByUrl(`/software-support`);
    } else if (id === 'project_management') {
       this.router.navigateByUrl(`/project-management`);
    } else {
       this.router.navigateByUrl(`/${id}`);
    }
  }
)}
}
