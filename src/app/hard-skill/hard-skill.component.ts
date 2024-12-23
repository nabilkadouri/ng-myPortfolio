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
  

  ngOnInit() {
    this.repeatedImages = this.repeatImages(3); 
  }

  repeatImages(times: number) {
    return Array(times)
      .fill(this.images)
      .flat();
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.repeatedImages.length - 6; 
    }
  }
  
  moveRight() {
    if (this.currentIndex < this.repeatedImages.length - 6) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }
  
}
