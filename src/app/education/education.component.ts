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
            'time': 'September 2015 - Present',
        },
        {
            'degree': 'BSc in Software Engineering',
            'place': 'UNIT Factory Kyiv',
            'time': 'November 2016 - Present',
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
