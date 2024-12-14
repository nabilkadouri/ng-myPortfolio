import { Component } from '@angular/core';
import { CARDS_SOFTSKILLS } from '../data/card-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soft-skill',
  imports: [CommonModule],
  templateUrl: './soft-skill.component.html',
  styleUrl: './soft-skill.component.css'
})
export class SoftSkillComponent {
  softSkills = CARDS_SOFTSKILLS;

}
