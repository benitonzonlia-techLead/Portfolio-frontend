import { Component } from '@angular/core';
import { fadeInCascade } from '../animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInCascade]
})
export class SkillsComponent {
  technicalSkills = [
    {
      labelFr: 'Langages',
      labelEn: 'Languages',
      items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
      labelFr: 'Frameworks/API',
      labelEn: 'Frameworks/API',
      items: ['Angular', 'Spring Boot', 'Hibernate', 'JPA', 'React', '.NET Core', 'Activiti', 'Node.js', 'Symfony']
    },
    {
      labelFr: 'Bases de données',
      labelEn: 'Databases',
      items: ['Oracle', 'PostgreSQL', 'MySQL', 'MSSQL', 'MongoDB']
    },
    {
      labelFr: 'DevOps/Cloud',
      labelEn: 'DevOps/Cloud',
      items: ['Docker', 'Jenkins', 'GitLab', 'GitHub', 'Azure AKS', 'Kubernetes']
    },
    {
      labelFr: 'Outils',
      labelEn: 'Tools',
      items: ['Maven', 'Gradle', 'SonarQube', 'Keycloak', 'SoapUI', 'Tailwind', 'Jira', 'Visual Studio']
    }
  ];

  softSkills = [
    {
      labelFr: 'Gestion de projet agile',
      labelEn: 'Agile project management',
      items: ['Scrum', 'Kanban', 'SAFe']
    },
    {
      labelFr: 'Coordination d’équipe, mentoring, formation',
      labelEn: 'Team coordination, mentoring, training',
      items: []
    },
    {
      labelFr: 'Architecture logicielle, modélisation métier',
      labelEn: 'Software architecture, business modeling',
      items: []
    },
    {
      labelFr: 'Analyse fonctionnelle, rédaction de spécifications',
      labelEn: 'Functional analysis, specification writing',
      items: []
    },
    {
      labelFr: 'Négociation contractuelle, portage salarial, business development',
      labelEn: 'Contract negotiation, umbrella company, business development',
      items: []
    }
  ];
}
