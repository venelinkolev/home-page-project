import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { StateManagementService } from 'src/app/states/state-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _currentState!: boolean;



  constructor(public stateManagement: StateManagementService) {
    stateManagement.menuBtnStatus$.subscribe(state => this._currentState = state);
  }

  menuBtnHandler(): void {
    if (!this._currentState) {
      this.stateManagement.menuBtnState(true);
    } else {
      this.stateManagement.menuBtnState(false);
    }
  }
}
