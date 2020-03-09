import { ArufaService } from "./../../core/arfua.service";
import { VocabItem, Review, InputMode } from "../../core/models";
import { ArfuaTranslationService } from "../../core/translation.service";
import { ReviewService } from "./review.service";
import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy
} from "@angular/core";
import { first } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
    selector: "app-review",
    templateUrl: "./review.component.html",
    styleUrls: ["./review.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit, OnDestroy {
    public activeVocabItem$: Observable<VocabItem>;
    public activeMode: InputMode;
    public reviews: Review[];
    public hasAnswered: boolean = false;
    public userInputValue: string = "";

    constructor(
        public reviewService: ReviewService,
        public arufaService: ArufaService,
        public translationService: ArfuaTranslationService
    ) {}

    public ngOnInit() {
        console.log("a");
        this.reviewService.init();
        this.arufaService.reviews$
            .pipe(first())
            .subscribe((reviews: Review[]) => {
                this.reviews = [...reviews.sort(() => Math.random() - 0.5)];
                this.onNextItemRequested();
            });
    }

    public onNextItemRequested() {
        if (this.reviews.length > 0) {
            const activeReview = this.reviews[0];
            this.activeVocabItem$ = this.arufaService.getVocabItemById(
                activeReview.vocabItemId
            );
            this.activeMode = activeReview.mode;
            this.hasAnswered = false;
        }
    }

    public onResponse(success: boolean) {
        if (success) {
            this.reviews.splice(0, 1);
            this.arufaService.updateReview();
        } else {
            // shuffle
            this.reviews = this.reviews.sort(() => Math.random() - 0.5);
        }
        this.hasAnswered = true;
    }

    public ngOnDestroy() {
        this.reviewService.destroy();
    }
}
