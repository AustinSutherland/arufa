import { ArfuaTranslationService } from "./core/translation.service";
import { ArufaService } from "./core/arfua.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
    public title = "arufa-module";

    constructor(
        public arufaService: ArufaService,
        public translationService: ArfuaTranslationService
    ) {}

    public ngOnInit() {
        this.arufaService.init();
        this.translationService.init();
    }

    public ngOnDestroy() {
        this.arufaService.destroy();
        this.translationService.destroy();
    }
}
