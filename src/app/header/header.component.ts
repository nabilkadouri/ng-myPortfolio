import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-header',
  imports: [HeroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Variable pour gérer l'état du menu
  isMenuOpen: boolean = false;

  // Méthode pour ouvrir/fermer le menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Méthode pour fermer le menu après un clic sur un lien
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
