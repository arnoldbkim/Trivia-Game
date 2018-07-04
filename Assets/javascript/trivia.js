var panel = $('#quiz-area');


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});


var questions = [{
  question: "1 . In Doctor Who, who is the tenth Doctor?",
  answers: ["David Tennant", "Matt Smith", "Peter Capaldi", "Chris Eccleston"],
  correctAnswer: "David Tennant"
}, {
  question: "2 . In Rick and Morty, who is Morty's sister?",
  answers: ["Autumn", "Winter", "Summer", "Spring"],
  correctAnswer: "Summer"
}, {
  question: "3 . In BBC Sherlock, who is in love with Sherlock Holmes?",
  answers: ["Jim Moriarty", "Mrs. Hudson", "Molly Hooper", "John Watson"],
  correctAnswer: "Molly Hooper"
}, {
  question: "4 . In Game of Thrones, what does Jon Snow know?",
  answers: ["Everything", "Nothing", "The Truth", "The Lord of the Light"],
  correctAnswer: "Nothing"
}, {
  question: "5 . In Community, Troy's best friend was?",
  answers: ["Jeff Winger", "Abed Nadir", "Pierce Hawthorne", "Annie Edison"],
  correctAnswer: "Abed Nadir"
}, {
  question:  "6 . Who is the main character in One Piece?",
  answers: ["Goku", "Naruto", "Ichigo", "Luffy"],
  correctAnswer: "Luffy"
}, {
  question: "7 . In Suits, which college did Mike Ross graduate from?",
  answers: ["Harvard", "Yale", "Columbia", "None"],
  correctAnswer: "None"
}, {
  question: "8 . In Mr. Robot, what is the name of Mr. Robot's hacker society?",
  answers: ["Elluminate", "E Corp", "fsociety", "Anonymous"],
  correctAnswer: "fsociety"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};