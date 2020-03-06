export interface ArufaTranslationStrings {
    review_button: string;
    lesson_button: string;
    language_toggle_label: string;
    home_title_message: string;
    home_content_message: string;
    lesson_meaning_input_prompt: string;
    lesson_pronunciation_input_prompt: string;
    remaining_label: string;
    definition_label: string;
}

// tslint:disable: max-line-length
export const en_translations: ArufaTranslationStrings = {
    review_button: "{0} Reviews",
    lesson_button: "{0} Lessons",
    language_toggle_label: "日本語",
    home_title_message: "Welcome to Arufa",
    home_content_message:
        "This is a basic early-stage SRS application for learning english vocabulary. Click the lesson or review buttons above to get started!",
    lesson_meaning_input_prompt: "Japanese Translation",
    lesson_pronunciation_input_prompt: "Katakana Pronunciation",
    remaining_label: "{0} Remaning",
    definition_label: "Japanese Definition"
};

export const jp_translations: ArufaTranslationStrings = {
    review_button: "{0}件のレビュー",
    lesson_button: "{0}件のレッスン",
    language_toggle_label: "English",
    home_title_message: "アルファへようこそ",
    home_content_message:
        "これは、英語の語彙を勉強するための基本的なSRSアプリケーションです。上の[レッスン]または[レビュー]ボタンをクリックして開始してください。",
    lesson_meaning_input_prompt: "英単語の意味",
    lesson_pronunciation_input_prompt: "カタカナの発音",
    remaining_label: "もう{0}件",
    definition_label: "定義"
};
