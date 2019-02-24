import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SideNavToggleService {
  /** Using BehaviorSubject instead of a regular Subject just to show you the current value of
   *  the '_state' property. In order to use a BehaviorSubject you need to initiate the value of
   *  the BehaviorSubject. In our case we simply said that the initial value is 'false'.
   *  Honestly this whole service is kind of overkill for such a simple
   *  feature but its a simple way to show you how services work.
   */
  private _state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  /** When your component subscribes to this, your component will be notified when the value is changed
   *  Think of this as a notification service that will alert all subscribers when the 'next' value is pushed.
   */
  get state(): BehaviorSubject<boolean> {
    return this._state;
  }

  /** This function will simply change the value of the '_state' boolean.
   *  i.e If it is set to 'false' then the new value will be the opposite of 'false' .: true.
   *  to change the current value of '_state' we use the '.next()' method, and pass the new value.
   */
  toggle(): void {
    console.log("the current value of _toggle is : " + this._state.value);
    this._state.next(!this._state.value);
    console.log("the new value of _toggle is : " + this._state.value);
  }

  /** This fuction will return the 'last value', current value, of the _state property.  */
  get currentValue(): boolean {
    return this._state.value;
  }
}
