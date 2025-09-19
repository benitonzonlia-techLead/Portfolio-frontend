import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutObjectivesComponent } from './about/about-objectives.component';
import { AboutValuesComponent } from './about/about-values.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

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
  CertificationsComponent,
  ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
