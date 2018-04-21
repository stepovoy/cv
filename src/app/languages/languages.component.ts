import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: {
      "name": String,
      "level": String,
  }[] = [
      {
          "name": 'English',
          "level": 'Advanced - C1',
      },
      {
          "name": 'Russian',
          "level": 'Native - C1',
      },
      {
          "name": 'Ukrainian',
          "level": 'Native - C1',
      },
  ]

  constructor() { }

  ngOnInit() {
  }

}
