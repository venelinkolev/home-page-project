import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public renderer: Renderer2) { }

  openSubMenu(e: HTMLElement) {
    const loginHeaderElement = e.parentElement?.parentElement;
    console.log(loginHeaderElement);
    const navHeaderElement = loginHeaderElement?.children[1];
    console.log(navHeaderElement);
    if (e?.children[0].className == 'caret-down') {
      // console.log('Down');
      this.renderer.removeClass(e.children[0], 'caret-down');
      this.renderer.removeClass(e.children[1], 'caret-up');
      this.renderer.addClass(e.children[0], 'caret-up');
      this.renderer.addClass(e.children[1], 'caret-down');
      this.renderer.setStyle(navHeaderElement, 'display', 'block');
    } else if (e?.children[0].className == 'caret-up') {
      // console.log('Up');
      this.renderer.removeClass(e.children[1], 'caret-down');
      this.renderer.removeClass(e.children[0], 'caret-up');
      this.renderer.addClass(e.children[1], 'caret-up');
      this.renderer.addClass(e.children[0], 'caret-down');
      this.renderer.setStyle(navHeaderElement, 'display', 'none');
    }
  }
}
