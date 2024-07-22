import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls:['./asistencia.component.css']
})


export class AsistenciaComponent implements OnInit {
    navigate(url: string): void {
      this.router.navigateByUrl(url);
    }
    constructor(private router: Router ) { }
    ngOnInit() {
    }

}

