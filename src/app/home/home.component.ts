import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  count: number = 0;
  name: string = '';

  onClick() {
    this.count += 1;
  }

  setClasses() {
    let myClasses = {
      active: this.count > 0,
      superActive: this.count > 5,
    };

    return myClasses;
  }
}
