import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { title: 'Javascript', img: 'assets/img/java script.png' },
    { title: 'Angular', img: 'assets/img/angular.png' },
    { title: 'HTML/CSS', img: 'assets/img/Group 205.png' },
    { title: 'Git', img: 'assets/img/Git-Icon-1788C 2.png' },
    { title: 'Rest API', img: 'assets/img/icons8-rest-api-80 2.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
