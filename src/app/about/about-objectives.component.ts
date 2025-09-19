import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-objectives',
  template: `
    <section class="objectives slide-up" aria-label="Objectifs et objectifs professionnels">
      <h3>Objectifs / Goals</h3>
      <ul>
        <li *ngFor="let obj of objectives">
          <span>{{ obj.fr }}</span>
          <span class="divider">/</span>
          <span>{{ obj.en }}</span>
        </li>
      </ul>
    </section>
  `
})
export class AboutObjectivesComponent {
  @Input() objectives: { fr: string; en: string }[] = [];
}
