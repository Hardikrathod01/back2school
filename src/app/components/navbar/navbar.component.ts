import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    var buttonDiv = document.getElementById("registerButtons");
    if (buttonDiv.style.display === "none") {
      buttonDiv.style.display = "block";
    } else {
      buttonDiv.style.display = "none";
    }
  }
  ngOnInit(): void {
  }

}
