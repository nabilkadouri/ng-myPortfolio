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

 playVideo(event: Event) {
  const video = event.target as HTMLVideoElement;
  video.play();
}

pauseVideo(event: Event) {
  const video = event.target as HTMLVideoElement;
  video.pause();
  video.currentTime = 0; // Réinitialisation au début
}
}
