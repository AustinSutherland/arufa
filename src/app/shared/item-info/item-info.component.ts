import { ArfuaTranslationService } from "./../../core/translation.service";
import { VocabItem } from "../../core/models";
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-item-info",
    templateUrl: "./item-info.component.html",
    styleUrls: ["./item-info.component.scss"]
})
export class ItemInfoComponent implements OnInit {
    @Input() public vocabItem: VocabItem;

    constructor(public translationService: ArfuaTranslationService) {}

    ngOnInit() {}
}
