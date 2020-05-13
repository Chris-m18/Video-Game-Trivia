let index = 0
let trivia;
async function fetchData() {
  const url = "https://opentdb.com/api.php?amount=10&category=15&type=multiple"

  try {
    const response = await axios.get(url)
    trivia = response.data.results
    game()
  } catch (error) {
    console.log(`${error}`)
  }
}

let start = document.querySelector('.start')
let questionDiv = document.querySelector('.Question')
let answerDiv = document.querySelector('.allbuttons')
start.addEventListener('click', fetchData)

function game() {
  questionDiv.innerHTML = ``;
  answerDiv.innerHTML = ``;
  console.log(trivia)
  // function displayAnswers(question) {
  //store the correct and incorrect answers at put into an array for shuffling
  let correctAnswer = trivia[index].correct_answer
  let incorrectAnswer1 = trivia[index].incorrect_answers[0]
  let incorrectAnswer2 = trivia[index].incorrect_answers[1]
  let incorrectAnswer3 = trivia[index].incorrect_answers[2]
  let arrayAnswers = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]

  //for multiple choice quesitons, the answers always need to presented in a random order
  // if (question[0].type === 'multiple') {

  // funciton that shuffles they array of answer options created above
  function shuffle(array) {
    let currentIndex = array.length-1
    let temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //call the shuffle function and store results in an array
  let shuffledArray = shuffle(arrayAnswers)

  //udpate the HTML using the shuffled answer options.

  //display answer options in radio buttons


  // Create array of questions


  // Shuffle array


  // Include shuffled array into HTML somehow (below)


  questionDiv.innerHTML = `<h3>${trivia[index].question}</h3>`

  for (let i = 0; i < shuffledArray.length; i++) {
    let button = document.createElement('button')
    button.classList.add("answerButton")
    button.innerText = shuffledArray[i]
    answerDiv.append(button)
    button.addEventListener('click', () => {
      game()
    })
  
  }

index += 1
}
function showScores() {
  let gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  let element = document.getElementById("Question");
  element.innerHTML = gameOverHTML;
}



let fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);





  // function playGame() {
  //   let deck = shuffle(buildDeck())
  //   let playerName = greet()
  //   let score = 0 
  //   let currentCard = deck.pop()

  //   while (score > 5) {
  //     let nextCard = deck.pop()
  //     if (guess('h', 'l')) {
  //       console.log(`${score += 1} Congrulations you've scored 1 point higher`)
  //     } else {
  //     console.log(`sorry you were wrong. You recive zero points!`)
  //     }
  //     currentCard = nextCard
  //   }
  //   (deck.length === 0) ? console.log("you have lost!") : console.log("you have won")

  // }