import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectActivities() {
    this.route.navigate(['/activities']);
  }

}
