import {
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'; 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
  animations: [
    trigger('showHideNavLogo', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {

  @HostBinding('class.default-style') defaultStyle = true; // Apply default style initially

  constructor (private router : Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.defaultStyle = true;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo({top: 0})
  }
  
}
