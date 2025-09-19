import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { AboutObjectivesComponent } from './about/about-objectives.component';
import { AboutValuesComponent } from './about/about-values.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutObjectivesComponent,
    AboutValuesComponent,
    CvDownloadComponent,
  ProjectsComponent,
  SkillsComponent,
  EducationComponent,
  CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
