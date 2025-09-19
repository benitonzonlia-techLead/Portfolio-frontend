import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  objectives = [
    {
      fr: 'Maintenir une flexibilité multi-missions',
      en: 'Maintain multi-mission flexibility'
    },
    {
      fr: 'Développer un CRM personnel et un réseau freelance',
      en: 'Build a personal CRM and freelance network'
    },
    {
      fr: 'Créer des synergies entre tech et business',
      en: 'Create synergies between tech and business'
    },
    {
      fr: 'Maximiser les revenus sans compromettre la qualité',
      en: 'Maximize income without compromising quality'
    },
    {
      fr: 'Construire une vitrine durable pour attirer les bons clients',
      en: 'Build a lasting showcase to attract the right clients'
    }
  ];

  values = [
    'Autonomie et transparence contractuelle',
    'Impact technique mesurable',
    'Rigueur, mentoring, et transmission',
    'Adaptabilité et résilience face aux enjeux'
  ];
}
