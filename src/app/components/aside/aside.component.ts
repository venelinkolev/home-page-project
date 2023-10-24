import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {

  constructor(private renderer: Renderer2) {

  }

  openMenu(e: HTMLElement) {
    const subMenu = e.parentElement?.parentElement?.querySelector('.subMenu');
    const lineElement = e.closest('.line')?.children[1];
    if (lineElement?.children[0].className == 'caret-down') {
      // console.log('Down');
      this.renderer.removeClass(lineElement.children[0], 'caret-down');
      this.renderer.removeClass(lineElement.children[1], 'caret-up');
      this.renderer.addClass(lineElement.children[0], 'caret-up');
      this.renderer.addClass(lineElement.children[1], 'caret-down');
      this.renderer.setStyle(subMenu, 'display', 'block');
    } else if (lineElement?.children[0].className == 'caret-up') {
      // console.log('Up');
      this.renderer.removeClass(lineElement.children[1], 'caret-down');
      this.renderer.removeClass(lineElement.children[0], 'caret-up');
      this.renderer.addClass(lineElement.children[1], 'caret-up');
      this.renderer.addClass(lineElement.children[0], 'caret-down');
      this.renderer.setStyle(subMenu, 'display', 'none');
    }
  }
}
