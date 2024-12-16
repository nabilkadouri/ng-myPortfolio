import { Component } from '@angular/core';
import { CAROUSEL_HERO } from '../data/carrousel-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  currentIndex: number = 0;
  carouselItems = CAROUSEL_HERO;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.carouselItems.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }
}
