import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

    experiences: {
      "job-title": String,
      "company": String,
      "time": String,
      "details": String
    }[] = [
        {
            "job-title": 'Full Stack JavaScript (ES5+, Node.js, Angular 5)',
            "company": 'Smartline Group LLC',
            "time": 'October 2017 - Present',
            "details": 'Websites and asynchronous services development along with Telegram, Viber, Facebook-messangers chat-bots support and enhancement using Node.js and Angular 5 (2+ including).'
        },
        {
            "job-title": 'Student',
            "company": 'UNIT Factory',
            "time": 'November 2016 - Present',
            "details": 'Some of the projects including: online video streamer, which includes parsing torrentwebsite, along with magnet-links and streaming a video while still being downloaded (Complex project), dating website (like Badoo or Tinder) and photo-sharing website (similar to Instagram)'
        },
        {
            "job-title": 'Web Developer',
            "company": 'Freelance',
            "time": 'February 2016 - Present',
            "details": 'Most interesting big project was to create one-click hosting-service that includes checkout integration, maximized automatization, automated CMS integration and management along with must-have plugins installation, control panel development and linux-server management.'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
