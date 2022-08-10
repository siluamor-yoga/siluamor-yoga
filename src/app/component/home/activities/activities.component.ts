import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private route: Router) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

  redirectProfile() {
    this.route.navigate(['/presentation']);
  }
}
