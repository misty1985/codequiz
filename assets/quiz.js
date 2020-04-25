function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }
            output.push(
                `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "About what year was Hogwarts founded?",
        answers: {
            a: "993",
            b: "1100",
            c: "1215",
            d: "901"
        },
        correctAnswer: "a"
    },
    {
        question: "What position defends the goal post in quidditch?",
        answers: {
            a: "Seeker",
            b: "Beater",
            c: "Chaser",
            d: "Keeper"
        },
        correctAnswer: "d"
    }, {
        question: "Which school other than Durmstrang and Hogwarts participated in the Triwizard Cup?",
        answers: {
            a: "Ilvermorny",
            b: "Beauxbatons",
            c: "Hufflepuff",
            d: "SLytherin"
        },
        correctAnswer: "b"
    }, {
        question: "What is Alastor Moody's nickname?",
        answers: {
            a: "Moody",
            b: "Padfoot",
            c: "Mad Eye",
            d: "Moody Pants"
        },
        correctAnswer: "c"
    }, {
        question: "Who hosted the Potterwatch pirate radio show in book 7?",
        answers: {
            a: "Neville Longbottom",
            b: "Lee Jordan",
            c: "Draco Malfoy",
            d: "Ron Weasly"
        },
        correctAnswer: "b"

    }, {
        question: "What is the name of Harry Potters maternal aunt?",
        answers: {
            a: "Marge Dursley",
            b: "Petunia Dursley",
            c: "Bellatrix Lestrange",
            d: "Molly Weasly"
        },
        correctAnswer: "b"
    }, {
        question: "What is a non-magical person who has atleast one magical called?",
        answers: {
            a: "Muggle",
            b: "Mudblood",
            c: "Squib",
            d: "Git"
        },
        correctAnswer: "c"

    }, {
        question: "What are the followers of Lord Voldemort called?",
        answers: {
            a: "The D.A",
            b: "The Order of The Phoenix",
            c: "Death Eaters",
            d: "Snatchers"
        },
        correctAnswer: "c"
    }, {
        question: "What part of the Uk is Hogwarts located?",
        answers: {
            a: "Ireland",
            b: "Wales",
            c: "Scotland",
            d: "Yorkshire"
        },
        correctAnswer: "c"
    }, {
        question: "Where did Ron, Hermione, and Harry meet for the first time?",
        answers: {
            a: "Diagon Alley",
            b: "Kings Cross Station",
            c: "Platform 9 and 3/4",
            d: "On the Hogwarts Express"
        },
        correctAnswer: "d"
    }, {
        question: "What is the name of Harry Potters's mother-in-law?",
        answers: {
            a: "Narcissa Malfoy",
            b: "Molly Weasly",
            c: "Ginny Weasly",
            d: "Minerva McGonagall"
        },
        correctAnswer: "b"
    }
];
buildQuiz();
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
nextButton.addEventListener("click", showNextSlide);

