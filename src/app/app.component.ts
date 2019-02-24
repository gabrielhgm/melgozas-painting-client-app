import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { SideNavToggleService } from "./Services/side-nav-toggle/side-nav-toggle.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Melgoza";
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  togg: boolean;
  constructor(private changeRef: ChangeDetectorRef) {}

  toggleTest(val: boolean) {
    this.togg = val;
    this.changeRef.detectChanges();
  }
}
