import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat = 40.522964;
  lng = -74.411674;

  constructor() { }

  ngOnInit(): void {
  }

}
