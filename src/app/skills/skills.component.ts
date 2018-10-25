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
          "title": 'EcmaScript 6+',
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
          "title": 'RabbitMQ',
          "percentage": '98'
      },
      {
          "title": 'Git',
          "percentage": '96'
      },
      {
          "title": 'Linux/Unix',
          "percentage": '96'
      },
      {
          "title": 'Sequelize',
          "percentage": '96'
      },
      {
          "title": 'MongoDB',
          "percentage": '94'
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
          "title": 'Socket.io/SockJs',
          "percentage": '96'
      },
      {
          "title": 'WebTorrent',
          "percentage": '86'
      },
      {
          "title": 'Headless Chrome (Puppeteer)',
          "percentage": '94'
      },
      {
          "title": 'HTML',
          "percentage": '92'
      },
      {
          "title": 'CSS',
          "percentage": '92'
      },
      {
          "title": 'LESS/SASS',
          "percentage": '92'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
