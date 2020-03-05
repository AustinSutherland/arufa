import { VocabItem } from "./../../core/models";
import { ArfuaTranslationService } from "../../core/translation.service";
import { LessonsService } from "./lessons.service";
import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy
} from "@angular/core";
import { toKana, isKana } from "wanakana";

@Component({
    selector: "app-home",
    templateUrl: "./lessons.component.html",
    styleUrls: ["./lessons.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsComponent implements OnInit, OnDestroy {
    //debug
    public activeVocabItem: VocabItem = {
        id: "a",
        en_word: "Unbelievable",
        jp_words: ["信じられない", "しんじられない"],
        pronunciation: "アンベリーバブル",
        definition: "信じられないこと",
        examples: [
            "The prices at that store were unbelievable",
            "Don't say such unbelievable things"
        ]
    };

    public userInputValue: string = "";

    constructor(
        public lessonsService: LessonsService,
        public translationService: ArfuaTranslationService
    ) {}

    public ngOnInit() {
        this.lessonsService.init();
    }

    public ngOnDestroy() {
        this.lessonsService.destroy();
    }

    public onInputChanged() {
        // Parse to kana right now if last input was a vowel
        if (
            /[aeiouAEIOU]/.test(
                this.userInputValue.slice(this.userInputValue.length - 1)
            )
        ) {
            this.userInputValue = toKana(this.userInputValue);
        }
        // Parse a double N to ん
        else if (
            this.userInputValue.slice(this.userInputValue.length - 2) === "nn"
        ) {
            this.userInputValue = toKana(
                this.userInputValue.slice(0, this.userInputValue.length - 1)
            );
        }
    }

    public onSubmit() {
        // Do one last parse
        this.userInputValue = toKana(this.userInputValue);

        if (
            this.activeVocabItem.jp_words.indexOf(
                this.userInputValue.replace(" ", "")
            ) === -1
        ) {
            console.log("fail");
        } else {
            console.log("pass");
        }
    }
}
