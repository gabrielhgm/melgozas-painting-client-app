import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { Link } from "../../Classes/link/link";
import { SideNavToggleService } from "../../Services/side-nav-toggle/side-nav-toggle.service";
@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"]
})
export class NavMenuComponent implements OnInit {
  mobileQuery: MediaQueryList;
  always: boolean = true;
  pages: Link[] = [
    { desc: "Home", address: "/home", icon: "home" },
    { desc: "Services", address: "/services", icon: "palette" },
    { desc: "Contact", address: "/contact", icon: "perm_contact_calendar" },
    { desc: "Gallery", address: "/gallery", icon: "photo" },
    { desc: "About Us", address: "/aboutus", icon: "people" }
  ];

  @ViewChild("snav") sidenav: MatSidenav;

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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.toggleService.state.subscribe(ret => {
      if (ret) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
      this.changeDetectorRef.detectChanges();
    });
  }
}
