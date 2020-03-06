# Arufa

### What is it?

Arufa is a simple SRS application for learning English vocabulary from a Japanese language perspective. It is essentially based on WaniKani/Bunpro, but in reverse. English language for the UI is also provided for fun and ease of use.

It its current state, it is mostly a demo, as all information is mocked and so no real API calls are made.

This application is written in Angular 8 with RxJS.

### How to use

The current demo only supports doing reviews. Click the review button to get started. Every word has a pronunciation stage and a meaning stage.

In the pronunciation stage you type out text which is live converted to Katakana, aiming to get the right transliteration of the word.

In the meaning stage, you must enter the Japanese translation, in plain form if it is a verb.

Hit enter to submit your answer and the box will change color based on weather or not you are correct. Hit enter again to go to the next stage. Stages are randomly shuffled

### How to install

1. Install node js and the angular CLI.
2. Clone the repository .
3. Open a terminal in that directory and run `npm install`
4. Now run `npm run start`
5. Open your browser to `http://localhost:4200/` and you should be up and running.

### Recommended Development Environment

Since this repository includes the already set up configurations, I recommend using Visual studio code with Prettier and TSLint extensions enabled.

### Main TODOs at this time

1. Add Mock API service and set up more realistic querying of user data.
2. Finish item info card.
3. Add lessons.
4. Add real concept of levels and SRS stages
5. Add screens for completing lessons and reviews.
6. Possibly an ngRX store

### Acknowledgements

**wanakana** for the Japanese IME
**ng-zorro-antd** for the angular ant-design components
