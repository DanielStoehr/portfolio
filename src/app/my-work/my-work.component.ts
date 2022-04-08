import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  projects = [
    {
      title: 'El Pollo Loco',
      description: 'Jump and Run Game',
      url: 'http://daniel-stoehr.developerakademie.net/el_polo_loco/',
      category: 'javascript',
      image: 'el_pollo_loco.png',
    },
    {
      title: 'Quiz',
      description: 'Quiz App',
      url: 'http://daniel-stoehr.developerakademie.net/quizapp/',
      category: 'javascript',
      image: 'quiz.png',
    },
    {
      title: 'Pokedex',
      description: 'Pokedex',
      url: 'http://daniel-stoehr.developerakademie.net/pokedex/',
      category: 'javascript',
      image: 'pokedex.png',
    },
    {
      title: 'Sakura Ramen',
      description: 'HTML/CSS Projekt',
      url: 'http://daniel-stoehr.developerakademie.net/sakura_ramen/',
      category: 'html_css',
      image: 'sakura_ramen.jpg',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Tic Tac Toe Spiel',
      url: 'http://daniel-stoehr.developerakademie.net/tictactoe/',
      category: 'javascript',
      image: 'tictactoe.jpg',
    },
  ];
  filteredProjects = this.projects;

  changeSection(e: any, section: string) {
    const sections: NodeListOf<HTMLElement> = document.getElementsByName('section');
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    e.target.classList.add('active');
    if (section === '') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((project) => project.category === section);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
