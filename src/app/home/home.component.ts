import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public route: String;
  constructor() { }

  ngOnInit() {
  }

  goToProfile() {
    console.log(this.route);
  }

  goToAdmin() {
    console.log(this.route);
  }

}
