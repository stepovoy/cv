import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: {
    'title': String,
    'percentage': String
  }[] = [
      {
          "title": 'Node.js',
          "percentage": '98'
      },
      {
          "title": 'EcmaScript 5+ (ES5, ES6, ES7, ES8)',
          "percentage": '98'
      },
      {
          "title": 'TypeScript',
          "percentage": '98'
      },
      {
          "title": 'ExpressJS',
          "percentage": '98'
      },
      {
          "title": 'Git',
          "percentage": '95'
      },
      {
          "title": 'Linux',
          "percentage": '96'
      },
      {
          "title": 'LESS/SASS',
          "percentage": '92'
      },
      {
          "title": 'MongoDB',
          "percentage": '92'
      },
      {
          "title": 'MySQL',
          "percentage": '96'
      },
      {
          "title": 'PostgreSQL',
          "percentage": '85'
      },
      {
          "title": 'MongoDB',
          "percentage": '95'
      },
      {
          "title": 'Socket.io/SockJs',
          "percentage": '92'
      },
      {
          "title": 'PHP',
          "percentage": '70'
      },
      {
          "title": 'HTML',
          "percentage": '92'
      },
      {
          "title": 'CSS',
          "percentage": '92'
      },
  ]

  constructor() { }

  ngOnInit() {
  }

}
