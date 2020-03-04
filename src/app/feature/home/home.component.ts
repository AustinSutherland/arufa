import { HomeService } from "./home.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private homeService: HomeService) {}

    public ngOnInit() {
        this.homeService.init();
    }

    public ngOnDestroy() {
        this.homeService.destroy();
    }
}
