import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {}

  scrollToAnchor() {
    // Naviga al componente "app.component" con l'ancora nell'URL
    this.router.navigate(['/'], { fragment: 'dove-trovarci' });
  }

}
