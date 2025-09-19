import { Component } from '@angular/core';
import { fadeInCenter } from '../animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [fadeInCenter]
})
export class EducationComponent {
  education = [
    {
      degreeFr: 'Maitrise en informatique, spécialisation développement mobile',
      degreeEn: 'Master’s in Computer Science, Mobile Development',
      institutionFr: 'Université du Québec à Chicoutimi (Canada)',
      institutionEn: 'Université du Québec à Chicoutimi (Canada)',
      year: 2017,
      honorsFr: 'Mention : Bien',
      honorsEn: 'Honors: Good'
    },
    {
      degreeFr: 'Diplôme d’ingénieur en informatique, spécialisation génie logiciel',
      degreeEn: 'Engineering degree in Computer Science, Software Engineering',
      institutionFr: 'École 3iL Ingénieurs (Limoges)',
      institutionEn: '3iL Engineering School (Limoges)',
      year: 2017,
      honorsFr: 'Mention : Bien',
      honorsEn: 'Honors: Good'
    }
  ];
}
