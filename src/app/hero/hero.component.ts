import { Component } from '@angular/core';
import { CAROUSEL_HERO } from '../data/carrousel-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  currentIndex = 0; // Index actuel du carrousel
  carouselItems = CAROUSEL_HERO; // Données des slides
  touchStartX = 0; // Position de départ du swipe
  touchEndX = 0; // Position de fin du swipe

  ngOnInit(): void {
    this.startAutoSlide(); // Démarre le défilement automatique
  }

  prevSlide(): void {
    // Slide précédent
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  nextSlide(): void {
    // Slide suivant
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 7000); // Change de slide toutes les 7 secondes
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX; // Capture le point de départ
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX; // Capture le point de fin
  }

  onTouchEnd(): void {
    if (this.touchStartX - this.touchEndX > 50) {
      // Swipe gauche
      this.nextSlide();
    } else if (this.touchEndX - this.touchStartX > 50) {
      // Swipe droite
      this.prevSlide();
    }
  }
}
