export interface ArufaTranslationStrings {
    review_button: string;
    lesson_button: string;
    language_toggle_label: string;
    home_title_message: string;
    home_content_message: string;
    lesson_meaning_input_prompt: string;
}

// tslint:disable: max-line-length
export const en_translations: ArufaTranslationStrings = {
    review_button: "{0} Reviews",
    lesson_button: "{0} Lessons",
    language_toggle_label: "日本語",
    home_title_message: "Welcome to Arufa",
    home_content_message:
        "This is a basic early-stage SRS application for learning english vocabluary. Click the lesson or review buttons above to get started!",
    lesson_meaning_input_prompt: "Japanese word"
};

export const jp_translations: ArufaTranslationStrings = {
    review_button: "{0}件のレビュー",
    lesson_button: "{0}件のレッスン",
    language_toggle_label: "English",
    home_title_message: "アルファへようこそ",
    home_content_message:
        "これは、英語の語彙を勉強するための基本的なSRSアプリケーションです。上の[レッスン]または[レビュー]ボタンをクリックして開始してください。",
    lesson_meaning_input_prompt: "英単語の意味"
};
