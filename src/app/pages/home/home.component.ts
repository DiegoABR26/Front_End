import { Component} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  title = 'mi-web-app';

  constructor(private router: Router) {}

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

}
