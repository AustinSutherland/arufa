import { VocabItem, InputMode } from "./../../core/models";
import { ArfuaTranslationService } from "../../core/translation.service";
import {
    Component,
    Input,
    EventEmitter,
    Output,
    ChangeDetectionStrategy,
    OnChanges,
    SimpleChanges,
    ChangeDetectorRef,
    HostListener
} from "@angular/core";
import { toKana, isKana, toKatakana, toHiragana } from "wanakana";

enum InputResult {
    success = "success",
    warning = "warning",
    error = "error"
}

@Component({
    selector: "app-user-input",
    templateUrl: "./user-input.component.html",
    styleUrls: ["./user-input.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInputComponent implements OnChanges {
    @Input() public vocabItem: VocabItem;
    @Input() public mode: InputMode;

    @Output() public responseSubmitted = new EventEmitter<boolean>();
    @Output() public nextItemRequested = new EventEmitter<any>();

    public userInputValue: string = "";
    public inputMode = InputMode;
    public activeInputResult: InputResult = null;
    public inputResult = InputResult;

    @HostListener("document:keyup.enter", ["$event"])
    onKeyUp(event: KeyboardEvent) {
        this.onSubmit();
    }

    constructor(
        public translationService: ArfuaTranslationService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.VocabItem || changes.mode) {
            this.userInputValue = "";
            this.activeInputResult = null;
            this.cdRef.markForCheck();
        }
    }

    public onInputChanged(): void {
        this.activeInputResult = null;

        // In pronunciation mode, use only katakana, else let the use chose (upper case is katakana)
        const kanaFunction: Function =
            this.mode === InputMode.pronunciation ? toKatakana : toKana;

        // Parse to kana right now if last input was a vowel
        if (
            /[aeiouAEIOU]/.test(
                this.userInputValue.slice(this.userInputValue.length - 1)
            )
        ) {
            this.userInputValue = kanaFunction(this.userInputValue);
        }
        // Parse a double N to ん
        else if (
            this.userInputValue.slice(this.userInputValue.length - 2) === "nn"
        ) {
            this.userInputValue = kanaFunction(
                this.userInputValue.slice(0, this.userInputValue.length - 1)
            );
        }
    }

    public onSubmit(): void {
        // Check if we have given an answer already, if so, tell the
        // consuming application that we are ready for the next item
        if (
            !!this.activeInputResult &&
            this.activeInputResult !== InputResult.warning
        ) {
            this.nextItemRequested.emit();
            this.userInputValue = "";
            this.activeInputResult = null;
            this.cdRef.markForCheck();
            return;
        }

        // Do one last parse otherwise
        this.userInputValue = toKana(this.userInputValue);

        if (!isKana(this.userInputValue)) {
            this.activeInputResult = InputResult.warning;
        } else {
            this.responseSubmitted.emit(
                this.verifyAnswer(
                    this.userInputValue,
                    this.mode,
                    this.vocabItem
                )
            );
        }
    }

    private verifyAnswer(
        answer: string,
        mode: InputMode,
        item: VocabItem
    ): boolean {
        const correctValues =
            mode === InputMode.meaning ? item.jp_words : item.pronunciation;

        if (correctValues.indexOf(answer.replace(" ", "")) === -1) {
            this.activeInputResult = InputResult.error;
            return false;
        } else {
            this.activeInputResult = InputResult.success;
            return true;
        }
    }
}
