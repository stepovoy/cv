import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: any = [
      'Psychology',
      'Gym',
      'Long walks',
      'Photography',
      'Volleyball'
  ]

  constructor() { }

  ngOnInit() {
  }

}
