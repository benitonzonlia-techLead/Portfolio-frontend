import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      client: "La Poste (via Sopra Steria)",
      period: "12/2017 – 03/2018",
      role: "Développeur Android",
      mission: "Support technique sur l’application eNova Mobilité",
      stack: ["Android", "Java", "Gradle", "GitLab", "HTML", "CSS", "JavaScript"],
      impact: "Correction d’anomalies, évolutions fonctionnelles, rédaction de spécifications"
    },
    {
      client: "Orange Wholesale France (via Sopra Steria)",
      period: "03/2018 – 10/2019",
      role: "Développeur Fullstack",
      mission: "Développement de l’application VADOR pour le déploiement de la fibre",
      stack: ["Java", "Spring Boot", "Angular", "MySQL", "GitLab", "Junit", "Hibernate", "JPA", "TypeScript"],
      impact: "Conception from scratch, encadrement technique, amélioration continue, qualité via SonarQube"
    },
    {
      client: "Orange Business Services (via Extia)",
      period: "10/2019 – 03/2020",
      role: "Développeur Fullstack",
      mission: "Refonte d’IHM pour les données analytiques",
      stack: ["Angular 8", ".NET Core", "GitLab", "HTML", "CSS", "JavaScript", "MSSQL", "Azure DevOps"],
      impact: "Conception technique, mentoring, intégration continue, optimisation du chargement de données"
    },
    {
      client: "Monaco Telecom (via Innova Solutions)",
      period: "03/2020 – 04/2022",
      role: "Développeur Fullstack / Scrum Master",
      mission: "Développement d’APIs REST et microservices pour TecREP",
      stack: ["Java", "Spring Boot", "React", "Activiti", "Maven", "JPA", "MySQL", "SoapUI", "Sonar", "Jenkins"],
      impact: "Architecture modulaire, gestion agile, version suisse SALT, qualité et CI/CD renforcés"
    },
    {
      client: "VMANE & Fils (via Innova Solutions)",
      period: "04/2022 – 01/2023",
      role: "Développeur Backend",
      mission: "Création du microservice PLMAPI pour Unilever",
      stack: ["Java", "Spring Boot", "Hibernate", "JPA", "Keycloak", "SonarQube", "GitLab", "MSSQL", "Junit", "Mockito"],
      impact: "Sécurisation du back-office, CI/CD, montée en compétence de l’équipe, qualité renforcée"
    },
    {
      client: "Air France (via Haagem / Sopra Steria)",
      period: "02/2023 – 08/2025",
      role: "Développeur Fullstack",
      mission: "Refonte d’application Trafic et développement PRM4.0",
      stack: ["Java 17/21", "Spring Boot 2/3", "Angular 15–18", "Azure AKS", "PostgreSQL", "Oracle", "Tailwind", "Spring Batch", "GitHub", "Hibernate", "JPA", "Junit"],
      impact: "Migration cloud, développement from scratch, consommation d’APIs ATPCO, tests et scalabilité"
    }
  ];
}
