import { ArfuaService } from "./../../core/arfua.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserInfo } from "src/app/core/models";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
    @Input() public userInfo: UserInfo;

    constructor(public arfuaService: ArfuaService) {}

    ngOnInit() {}
}
