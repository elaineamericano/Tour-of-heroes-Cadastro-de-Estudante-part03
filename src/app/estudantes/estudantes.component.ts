import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { ESTUDANTES } from '../mock-estudantes';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})

export class EstudantesComponent implements OnInit {

  estudantes = ESTUDANTES;
  selectedEstudante?: Estudante;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Estudante): void {
    this.selectedEstudante = hero;
  }
}
