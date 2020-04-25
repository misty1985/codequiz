(function () {
    var questions = [{
        question: "About what year was Hogwarts founded?",
        choices: [993, 1100, 1215, 901],
        correctAnswer: 993
    }, {
        question: "What position defends the goal post in quidditch?",
        choices: ["Seeker", "Beater", "Chaser", "Keeper"],
        correctAnswer: Keeper
    }, {
        question: "Which school other than Durmstrang and Hogwarts participated in the Triwizard Cup?",
        choices: ["Ilvermorny", "Beauxbatons", "Hufflepuff", "SLytherin"],
        correctAnswer: "Beauxbatons"
    }, {
        question: "What is Alastor Moody's nickname?",
        choices: ["Moody", "Padfoot", "Mad Eye", "Moody Pants"],
        correctAnswer: "Mad Eye"
    }, {
        question: "Who hosted the Potterwatch pirate radio show in book 7?",
        choices: ["Neville Longbottom", "Lee Jordan", "Draco Malfoy", "Ron Weasly"],
        correctAnswer: "lee Jordan"

    }, {
        question: "What is the name of Harry Potters maternal aunt?",
        choices: ["Marge Dursley", "Petunia Dursley", "Bellatrix Lestrange", "Molly Weasly"],
        correctAnswer: "Petunia Dursley"
    }, {
        question: "What is a non-magical person who has atleast one magical called?",
        choices: ["Muggle", "Mudblood", "Squib", "Git"],
        correctAnswer: "Squib"

    }, {
        question: "What are the followers of Lord Voldemort called?",
        choices: ["The D.A", "The Order of The Phoenix", "Death Eaters", "Snatchers"],
        correctAnswer: "Death Eaters"
    }, {
        question: "What part of the Uk is Hogwarts located?",
        choices: ["Ireland", "Wales", "Scotland", "Yorkshire"],
        correctAnswer: "Scotland"
    }, {
        question: "Where did Ron, Hermione, and Harry meet for the first time?",
        choices: ["Diagon Alley", "Kings Cross Station", "Platform 9 and 3/4", "On the Hogwarts Express"],
        correctAnswer: "On the Hodwarts Express"
    }, {
        question: "What is the name of Harry Potters's mother-in-law?",
        choices: ["Narcissa Malfoy", "Molly Weasly", "Ginny Weasly", "Minerva McGonagall"],
        correctAnswer: "Molly Weasly"
    }];

    var questionCounter = 0;
    var selections = [];
    var quiz = $('#quiz');

    displayNext();
    $('#next').on('click', function (e) {
        e.preventDefault();
        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }


    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

            }
            function displayScore() {
                var score = $('<p>', { id: 'question' });

                var numCorrect = 0;
                for (var i = 0; i < selections.length; i++) {
                    if (selections[i] === questions[i].correctAnswer) {
                        numCorrect++;
                    }
                }

                score.append('You got ' + numCorrect + ' questions out of ' +
                    questions.length + ' right!!!');
                return score;
            }
        })
    }
})
