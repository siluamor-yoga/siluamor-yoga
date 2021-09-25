import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectActivities() {
    this.route.navigate(['/activities']);
  }
}
