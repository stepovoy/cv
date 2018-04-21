import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    projects: {
        "title": String,
        "link": String,
        "description": String
    }[] = [
        {
            "title": 'VeganCity',
            "link": 'http://vegancity.family',
            "description": 'Vegan and Vegetarian Restaurants website. Node.js And Angular 5 project.',
        },
        {
            "title": 'Hypertube',
            "link": 'https://github.com/stepovoy/hypertube',
            "description": 'Torrent parsing web project. The idea was to parse torrent and display it to user as it loads to the server. Using OAuth (FaceBook and 42 School Intra Login), REST API, body-parser. Built on Node.js, Angular 4 and Python. Team project',
        },
        {
            "title": 'Matcha',
            "link": 'https://github.com/stepovoy/matcha',
            "description": 'Dating website project (like Tinder or Badoo). Using socket.io, OAuth etc. Built on Node.js and Bootstrap.',
        },
        {
            "title": 'Camagru',
            "link": 'https://github.com/stepovoy/camagru',
            "description": 'Photo-sharing Instagram-like web project. Built on PHP, MySQL and JavaScript, no frameworks allowed.',
        },
        {
            "title": 'SacmaChemical',
            "link": 'https://sacmachemical.com',
            "description": 'One of my early works. Wasn\'t using Node.js and Angular yet.',
        },
    ];
  constructor() { }

  ngOnInit() {
  }

}
