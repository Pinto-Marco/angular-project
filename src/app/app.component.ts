
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

  constructor(private el: ElementRef) { }

  scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      this.smoothScrollBehavior(section, 3000); 
      this.closeMenu();
    }
  }

  private smoothScrollBehavior(element: HTMLElement, duration: number) {
    const start = element.scrollTop;
    const startTime = performance.now();

    function step(time: number) {
      const currentTime = time - startTime;
      const scrollDistance = element.scrollHeight;
      const easeInOut = 0.5 - Math.cos(currentTime / duration * Math.PI) / 2;

      element.scrollTop = start + scrollDistance * easeInOut;

      if (currentTime < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  closeMenu() {
    const menuCheckbox = document.getElementById('menu-btn') as HTMLInputElement;

    if (menuCheckbox) {
      menuCheckbox.checked = false; // Chiudi la tendina del menu
    }
  }


}
