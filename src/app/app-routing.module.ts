
import { AboutComponent } from './about/about.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { InsightComponent } from './insight/insight.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvDownloadComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: InsightComponent },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
