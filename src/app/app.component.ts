import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  darkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    const theme = localStorage.getItem('theme');
    this.darkMode = theme === 'dark';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.darkMode) {
      this.renderer.addClass(this.document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }
  }
}
