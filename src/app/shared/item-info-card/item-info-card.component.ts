import { VocabItem } from "./../../core/models";
import { ArfuaTranslationService } from "../../core/translation.service";
import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    ChangeDetectionStrategy
} from "@angular/core";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from "@angular/animations";

@Component({
    selector: "app-item-info-card",
    templateUrl: "./item-info-card.component.html",
    styleUrls: ["./item-info-card.component.scss"],
    animations: [
        trigger("insertRemoveTrigger", [
            transition(":enter", [
                style({ height: "0" }),
                animate("100ms ease-in-out", style({ height: "400px" }))
            ]),
            transition(":leave", [
                style({ height: "400px" }),
                animate("100ms ease-in-out", style({ height: "0" }))
            ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemInfoCardComponent implements OnChanges {
    @Input() public vocabItem: VocabItem;

    @Input() public isAvailable: boolean = true;

    constructor(public translationService: ArfuaTranslationService) {}

    public isOpened: boolean = false;

    public ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (!!changes) {
            this.isOpened = false;
        }
    }

    public toggleInfo() {
        this.isOpened = !this.isOpened;
    }
}
