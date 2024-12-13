import { Component } from '@angular/core';
import { CARDS_PROJECTS } from '../data/card-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projets = CARDS_PROJECTS;
}
