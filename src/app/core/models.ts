export interface UserInfo {
    username: string;
    level: number;
    pendingReviews: number;
    pendingLessons: number;
    id: string;
}

export interface VocabItem {
    id: string;
    en_word: string;
    jp_words: string[];
    pronunciations: string[];
    definition: string;
    examples: string[];
}

export enum InputMode {
    meaning = "meaning",
    pronunciation = "pronunciation"
}

export interface VocabItemDictionary {
    [id: string]: VocabItem;
}

export interface Review {
    mode: InputMode;
    vocabItemId: string;
}
