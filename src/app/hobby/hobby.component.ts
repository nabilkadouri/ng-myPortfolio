import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CARDS_HOBBY } from '../data/card-data';

@Component({
  selector: 'app-hobby',
  imports: [CommonModule],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css'
})
export class HobbyComponent {
  hobby = CARDS_HOBBY;
}
