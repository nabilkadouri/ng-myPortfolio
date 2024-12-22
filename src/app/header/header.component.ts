import { Component, HostListener, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [HeroComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // Variable pour gérer l'état du menu
  isMenuOpen: boolean = false;
  screenWidth: number = 0;

  // Méthode pour ouvrir/fermer le menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Méthode pour fermer le menu après un clic sur un lien
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Récupère la largeur de l'écran au redimensionnement
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
  }

  // Initialise la largeur de l'écran au chargement
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
