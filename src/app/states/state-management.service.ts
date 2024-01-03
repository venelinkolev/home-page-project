import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  private _mobileMenuBtn$ = new BehaviorSubject<boolean>(false);

  menuBtnStatus$: Observable<boolean> = this._mobileMenuBtn$.asObservable();

  constructor() { }

  menuBtnState(state: boolean): void {
    this._mobileMenuBtn$.next(state);
  }
}
