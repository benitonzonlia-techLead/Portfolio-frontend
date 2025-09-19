import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
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
