import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    educations: {
        'degree': String,
        'place': String,
        'time': String,
    }[] = [
        {
            'degree': 'BSc in Computer Science',
            'place': 'NTUU KPI, FICT',
            'time': 'September 2015 - May 2019',
        },
        {
            'degree': 'BSc in Software Engineering',
            'place': 'UNIT Factory Kyiv',
            'time': 'November 2016 - July 2018',
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
