import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Link } from "../../Classes/link/link";
import { SideNavToggleService } from "../../Services/side-nav-toggle/side-nav-toggle.service";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  pages: Link[] = [
    { desc: "Home", address: "/home", icon: "home" },
    { desc: "Services", address: "/services", icon: "palette" },
    { desc: "Contact", address: "/contact", icon: "perm_contact_calendar" },
    { desc: "Gallery", address: "/gallery", icon: "photo" },
    { desc: "About Us", address: "/aboutus", icon: "people" }
  ];

  /** Here in the constructor we are subscribing to the toggle service, now we can make use
   *  of all of the functions and properties within our service.
   */
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private toggleService: SideNavToggleService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 640px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  /** This method occurs whenever we 'click' on the botton in toolbar.component.html.
   *  Take a look at the .html portion of this component.
   */
  toggle() {
    this.toggleService.toggle();
  }

  tToggle() {
    console.log("ttogle");
  }
}
