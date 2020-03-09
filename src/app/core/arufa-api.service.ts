import { BehaviorSubject, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import {
    UserInfo,
    VocabItemDictionary,
    Review,
    InputMode,
    VocabItem
} from "./models";

/**
 * This is mocking acutual API calls
 */
@Injectable()
export class ArfuaApiService {
    // This represents data held on a server
    // JUST FOR DEBUGGING!
    private vocabItems: VocabItemDictionary = {
        a: {
            id: "a",
            en_word: "Knight",
            jp_words: ["騎士", "きし"],
            pronunciation: "ナイト ",
            definition: "ヨーロッパ中世の、封建君主に仕えた騎馬の武士。",
            examples: [
                "The King greeted the Knight",
                "The Knights of the round table"
            ]
        },
        b: {
            id: "b",
            en_word: "Test",
            jp_words: ["テスト", "試験", "しけん"],
            pronunciation: "テスト",
            definition: "これはテストワードです",
            examples: [
                "The test was really hard",
                "I am making a test word for this program"
            ]
        },
        c: {
            id: "c",
            en_word: "Absolutely",
            jp_words: ["絶対に", "ぜったいに", "全く", "まったく"],
            pronunciation: "アブソルートリー",
            definition:
                "「絶対に」という意味の形容詞「absolute」を副詞にした単語です",
            examples: [
                "There is absolutely no way you are going there",
                "She was absolutely sure about it"
            ]
        }
        // https://business-career.jp/articles/QHcTxwdLhZYoeTgpBozi for the definition
    };

    constructor() {}

    // Mock log in
    public logIn(): Observable<UserInfo> {
        return of({
            username: "TestUser",
            level: 5,
            pendingLessons: 0,
            pendingReviews: 6,
            id: "we213jk4j2h1hke3w"
        });
    }

    // mock grabbing reviews
    public getReviews(): Observable<Review[]> {
        // In reality you would attach some token you got from log in to authenticate this with a server
        return of([
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
            },
            {
                vocabItemId: "c",
                mode: InputMode.meaning
            },
            {
                vocabItemId: "c",
                mode: InputMode.pronunciation
            }
        ]);
    }

    // mock calling server for word info
    public getVocabItem(id: string): Observable<VocabItem> {
        return of(this.vocabItems[id] || null);
    }
}
