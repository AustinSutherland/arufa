import {
    VocabItem,
    VocabItemDictionary,
    Review,
    InputMode
} from "./../../core/models";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class ReviewService {
    constructor() {}

    public init(): void {}

    public destroy() {
        // is this needed yet?
    }
}
