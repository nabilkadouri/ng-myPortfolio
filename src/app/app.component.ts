import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { HardSkillComponent } from './hard-skill/hard-skill.component';
import { SoftSkillComponent } from './soft-skill/soft-skill.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ProjectComponent,ExperienceComponent,HardSkillComponent,SoftSkillComponent,HobbyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
