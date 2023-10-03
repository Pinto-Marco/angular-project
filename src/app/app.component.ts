
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'progettoWeb';

  @ViewChild('chiSiamoAnchor') chiSiamoAnchor: ElementRef | undefined;

  ngAfterViewInit() {
    // Verifica se l'ancora è disponibile e, se sì, esegui lo scorrimento
    if (this.chiSiamoAnchor) {
      this.chiSiamoAnchor.nativeElement.scrollIntoView();
    }
  }
}
