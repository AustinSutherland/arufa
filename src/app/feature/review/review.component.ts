import { ArfuaService } from "./../../core/arfua.service";
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

@Component({
    selector: "app-review",
    templateUrl: "./review.component.html",
    styleUrls: ["./review.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit, OnDestroy {
    public activeVocabItem: VocabItem;
    public activeMode: InputMode;
    public reviews: Review[];

    public userInputValue: string = "";

    constructor(
        public reviewService: ReviewService,
        public arfuaService: ArfuaService,
        public translationService: ArfuaTranslationService
    ) {}

    public ngOnInit() {
        this.reviewService.init();
        this.arfuaService
            .getReviews()
            .pipe(first())
            .subscribe((reviews: Review[]) => {
                this.reviews = reviews.sort(() => Math.random() - 0.5);
                this.onNextItemRequested();
            });
    }

    public onNextItemRequested() {
        if (this.reviews.length > 0) {
            const activeReview = this.reviews[0];
            this.activeVocabItem = this.arfuaService.getVocabItemById(
                activeReview.vocabItemId
            );
            this.activeMode = activeReview.mode;
        }
    }

    public onResponse(success: boolean) {
        if (success) {
            this.reviews.splice(0, 1);
            // TODO: Update service with this info
        } else {
            // shuffle
            this.reviews = this.reviews.sort(() => Math.random() - 0.5);
        }
    }

    public ngOnDestroy() {
        this.reviewService.destroy();
    }
}
