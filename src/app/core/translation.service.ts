import { Injectable, ApplicationRef } from "@angular/core";
import {
    en_translations,
    ArufaTranslationStrings,
    jp_translations
} from "./translations/translations";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ArfuaTranslationService {
    public translations$ = new BehaviorSubject<ArufaTranslationStrings>(
        en_translations
    );

    private englishMode = false;

    constructor(private cdRef: ApplicationRef) {}

    public init(): void {
        this.translations$.next(jp_translations);
    }

    public toggleEnJP() {
        if (this.englishMode) {
            this.englishMode = false;
            this.translations$.next(jp_translations);
        } else {
            this.englishMode = true;
            this.translations$.next(en_translations);
        }
        this.cdRef.tick();
    }

    public destroy() {
        // is this needed yet?
    }
}
