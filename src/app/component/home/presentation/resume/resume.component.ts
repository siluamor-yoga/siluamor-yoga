import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  scrollInAppDetail() {
    document.getElementById("resume-component-app-detail")?.scrollIntoView();
  }

  scroll() {
    document.getElementById("resume-component-presentation")?.scrollIntoView();
  }

  redirectProfile() {
    this.route.navigate(['/profile']);
  }
}
