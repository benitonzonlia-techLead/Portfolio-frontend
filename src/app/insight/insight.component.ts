import { Component } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent {
  insights = [
    {
      title: 'Optimiser la collaboration dev/ops en freelance',
      date: '2025-09-01',
      summary: 'Découvrez comment instaurer une culture DevOps efficace même en mission freelance, pour accélérer la livraison et fiabiliser vos projets.',
      link: '#'
    },
    {
      title: 'Automatiser son onboarding client',
      date: '2025-08-15',
      summary: 'Structurer l’arrivée d’un nouveau client, de la prise de brief à la mise en place des accès, pour gagner du temps et inspirer confiance.',
      link: '#'
    },
    {
      title: 'Freelance : choisir ses outils pour scaler',
      date: '2025-07-30',
      summary: 'Panorama des outils indispensables pour industrialiser son activité de freelance tech, du CRM à la CI/CD.',
      link: '#'
    }
  ];
}
