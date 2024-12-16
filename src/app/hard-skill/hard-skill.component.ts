import { Component, OnInit, OnDestroy } from '@angular/core';
 // Chemin vers vos données
import { CommonModule } from '@angular/common';
import { CAROUSEL_IMAGES } from '../data/carrousel-data';

@Component({
  selector: 'app-hard-skill',
  imports: [CommonModule],
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.css'],
})
export class HardSkillComponent implements OnInit {
  images = CAROUSEL_IMAGES;
  repeatedImages: { src: string; alt: string }[] = [];
  currentIndex = 0;
  direction = 1;
  intervalId: any;
  isTransitioning = false;

  ngOnInit() {
    this.repeatedImages = this.repeatImages(2); // Répéter les images 3 fois
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (this.isTransitioning) return; // Éviter d'enchaîner les animations
      this.isTransitioning = true;

      this.currentIndex += this.direction;

      // Inverser la direction si on atteint les bords
      if (this.currentIndex >= this.repeatedImages.length - 6 || this.currentIndex <= 0) {
        this.direction *= -1;
      }

      setTimeout(() => {
        this.isTransitioning = false; // Fin de la transition
      }, 700); // Correspond à la durée CSS de la transition
    },2500); // Temps entre chaque défilement
  }

  repeatImages(times: number) {
    return Array(times)
      .fill(this.images)
      .flat();
  }
}
