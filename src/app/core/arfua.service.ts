import { BehaviorSubject, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import {
    UserInfo,
    VocabItemDictionary,
    Review,
    InputMode,
    VocabItem
} from "./models";

@Injectable()
export class ArfuaService {
    public loggedInUserInfo$ = new BehaviorSubject<UserInfo>({
        username: null,
        level: null,
        pendingLessons: null,
        pendingReviews: null,
        id: null
    });

    // JUST FOR DEBUGGING!
    private vocabItems: VocabItemDictionary = {
        a: {
            id: "a",
            en_word: "Unbelievable",
            jp_words: ["信じられない", "しんじられない"],
            pronunciations: ["アンベリーバブル"],
            definition: "信じられないこと",
            examples: [
                "The prices at that store were unbelievable",
                "Don't say such unbelievable things"
            ]
        },
        b: {
            id: "b",
            en_word: "Test",
            jp_words: ["テスト", "試験", "しけん"],
            pronunciations: ["テスト"],
            definition: "これはテストワードです",
            examples: [
                "The test was really hard",
                "I am making a test word for this program"
            ]
        }
    };

    // JUST FOR DEBUGGING!
    private reviews$ = new BehaviorSubject<Review[]>([
        {
            vocabItemId: "a",
            mode: InputMode.meaning
        },
        {
            vocabItemId: "a",
            mode: InputMode.pronunciation
        },
        {
            vocabItemId: "b",
            mode: InputMode.meaning
        },
        {
            vocabItemId: "b",
            mode: InputMode.pronunciation
        }
    ]);

    constructor() {}

    public init(): void {
        this.loggedInUserInfo$.next({
            username: "TestUser",
            level: 5,
            pendingLessons: 0,
            pendingReviews: this.reviews$.value.length,
            id: "we213jk4j2h1hke3w"
        });
    }

    public destroy() {
        // is this needed yet?
    }

    public getVocabItemById(id: string): VocabItem {
        return this.vocabItems[id];
    }

    public getReviews(): Observable<Review[]> {
        return this.reviews$.asObservable();
    }
}
