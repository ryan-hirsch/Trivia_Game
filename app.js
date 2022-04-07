// console.log('Hello')

// Basis:
// - Load browser game
// - Read question
// - Select correct answer
// - Selected answer turns green if right or red if wrong
// - Click 'Next'
// - Repeat process until all questions answered
// - After last question answered, click 'See Score'
// - See number of correct answers out of total number of questions


// General Outline:
// - Load broswer game
//     - HTML/CSS/JS all linked up
//     - Broiler thing set up
// - Layout
//     - Color palette:
//         - #ff4238
//         - #ffdc00
//         - #42a2d6
//         - #9A0006
//         - #fff580
//         - #00009e
//     - Font combo:
//         - Gravitas (Header/Game Title)
//         - Poppin (Question text medium bold; answer text light)
//     - Game title at top of page centered
//     - Question Page
//         - Box under game title with first question written out
//         - Four divs under question box each corresponding to an individual answer -- all divs same background color
//         - Two divs of equal size on either side of bottom left and bottom right of screen for 'Next' button
//     - Final question page
//         - Same layout as Question Page but 'Next' button now says 'See Score'
//     - Results page
//         - Game title still at top but question/answer boxes are gone
//         - Large in middle of page is # of correct answers/# questions in game
//         - (Stretch Feature): Some sort of caption underneath the score for 1-3 questions right, 4-7 questions right, 8-9 questions right, perfect score
//         - Photo from the show
// - Actions
//     - Either make each div individually with each question/answer combo OR figure out how to make the div read from a list/file/whatever to automatically load this
//     - Simutaneously*
//         - When the player selects an answer, the answer turns green if correct or red if incorrect
//         - If wrong answer selected, the correct answer turns green
//         - 'Next' button is clickable
//     - 'Next' button loads new question
//     - Process repeats until last question
//     - Last question page has 'See Score' button instead of 'Next' button
//     - When 'See Score' button is selected, naviage to results page
//     - (Implement stretch feature if have time)
//     - Reloading page resets questions
