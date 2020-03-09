import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import {
    UserInfo,
    VocabItemDictionary,
    Review,
    InputMode,
    VocabItem
} from "./models";
import { ArfuaApiService } from "./arufa-api.service";
import { distinctUntilChanged, switchMap, tap, first } from "rxjs/operators";

@Injectable()
export class ArufaService {
    public loggedInUserInfo$ = new BehaviorSubject<UserInfo>({
        username: null,
        level: null,
        pendingLessons: null,
        pendingReviews: null,
        id: null
    });

    public reviews$ = new BehaviorSubject<Review[]>([]);
    public lessons$ = new BehaviorSubject<Review[]>([]);

    private subscriptions: Subscription[] = [];

    // local cache of vocab items
    private vocabItemDictionary = {};

    constructor(private apiService: ArfuaApiService) {}

    public init(): void {
        this.apiService
            .logIn()
            .pipe(first())
            .subscribe((userInfo: UserInfo) => {
                this.loggedInUserInfo$.next(userInfo);
            });

        // reload reviews when login data changes, todo: add login :)
        this.subscriptions.push(
            this.loggedInUserInfo$
                .pipe(
                    distinctUntilChanged(),
                    tap(_ => (this.vocabItemDictionary = {})),
                    switchMap(_ => {
                        return this.apiService.getReviews();
                    })
                )
                .subscribe((reviews: Review[]) => this.reviews$.next(reviews))
        );
    }

    public destroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe);
    }

    public getVocabItemById(id: string): Observable<VocabItem> {
        // try cache
        const lookup = this.vocabItemDictionary[id];
        if (!!lookup) {
            return of(lookup);
        } else {
            return this.apiService.getVocabItem(id).pipe(
                tap(
                    // cache result for next time
                    (item: VocabItem) =>
                        (this.vocabItemDictionary[item.id] = item)
                )
            );
        }
    }

    // this needs to take a unique ID and lower and raise the word level
    public updateReview(): void {
        console.log(this.reviews$.value);
        this.reviews$.next(this.reviews$.value.slice(1));
    }
}
