import { Router } from "@angular/router";
import { ArfuaTranslationService } from "./../../core/translation.service";
import { ArufaService } from "./../../core/arfua.service";
import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from "@angular/core";
import { UserInfo } from "src/app/core/models";
import { NzMessageService } from "ng-zorro-antd";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
    constructor(
        public arufaService: ArufaService,
        public translationService: ArfuaTranslationService,
        public router: Router,
        private message: NzMessageService
    ) {}

    ngOnInit() {}

    public toggleLang() {
        this.translationService.toggleEnJP();
    }

    public onReviewClicked() {
        this.router.navigate(["/review"]);
    }

    public onHomeClicked() {
        this.router.navigate(["/home"]);
    }

    public onLessonsClicked() {
        this.message.info("Under Construction");
    }
}
