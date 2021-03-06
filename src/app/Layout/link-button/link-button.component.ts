import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { Link } from "../../Classes/link/link";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from "@angular/router";

@Component({
  selector: "app-link-button",
  templateUrl: "./link-button.component.html",
  styleUrls: ["./link-button.component.scss"]
})
export class LinkButtonComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 640px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @Input() redict: Link;
  ngOnInit() {}

  redirect() {
    console.log("redirect triggered");
  }
}
