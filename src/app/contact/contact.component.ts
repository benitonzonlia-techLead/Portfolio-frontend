import { Component } from '@angular/core';
import { fadeScale } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeScale]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;
  error = '';

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onSubmit() {
    this.error = '';
    if (!this.name || !this.email || !this.message) {
      this.error = 'Tous les champs sont requis.';
      return;
    }
    if (!this.validateEmail(this.email)) {
      this.error = 'Email invalide.';
      return;
    }
    this.submitted = true;
    // Ici, tu pourrais intégrer un service d'envoi réel
  }
}
