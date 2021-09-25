import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  redirectActivities() {
    this.route.navigate(['/activities']);
  }

  redirectProfile() {
    this.route.navigate(['/profile']);
  }
}
