import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  journeys = [
    {
      image: 'walk-line.png',
      title: 'Fertigungs-Spezialist',
      description:
        'Angefangen habe ich als Fertigungs-Spezialist, der sich mit der automatisierten Datenerfassung von Prozessen befasst hat',
    },
    {
      image: 'heart-line.png',
      title: 'Bezug zur IT',
      description: 'Bei der Bewältigung von verschiedenen Themen habe ich eine große Leidenschaft zur IT entdeckt',
    },
    {
      image: 'search-line.png',
      title: 'Projekte mit Selbststudium',
      description: 'Einige Projekte habe ich mit Hilfe von Video-Tutorials umsetzen können.',
    },
    {
      image: 'flight-takeoff-line.png',
      title: 'Weiterbilung zum Fullstack-Entwickler',
      description:
        'Um die Fertigung mit dem richtigen Know-How zu unterstützen, habe ich mich entschieden eine Weiterbildung zum Fullstack-Entwickler durchzuführen',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
