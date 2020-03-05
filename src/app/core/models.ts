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
    pronunciation: string;
    definition: string;
    examples: string[];
}
