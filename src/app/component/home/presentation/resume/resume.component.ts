import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  viewProfile = 0;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  redirectActivities() {
    //this.route.navigate(['/activities']);
    this.viewProfile = (this.viewProfile += 1) %3;
    console.log( this.viewProfile)
  }

  redirectProfile() {
    this.route.navigate(['/profile']);
  }
}
