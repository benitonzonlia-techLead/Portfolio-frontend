import { Component } from '@angular/core';
import { zoomIn } from '../animations';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  animations: [zoomIn]
})
export class CertificationsComponent {
  certifications = [
    {
      titleFr: 'Certification SAFe® 4 Agilist',
      titleEn: 'SAFe® 4 Agilist Certification',
      issuerFr: 'Scaled Agile',
      issuerEn: 'Scaled Agile',
      location: 'Toulouse',
      year: 2019,
      icon: '🏅'
    }
    // Ajoutez ici d'autres certifications si besoin
  ];
}
