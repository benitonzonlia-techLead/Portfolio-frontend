import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-values',
  template: `
    <section class="values fade-in" aria-label="Valeurs professionnelles">
      <h3>Valeurs</h3>
      <ul>
        <li *ngFor="let value of values">{{ value }}</li>
      </ul>
    </section>
  `
})
export class AboutValuesComponent {
  @Input() values: string[] = [];
}
