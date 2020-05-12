let index = 0 
let trivia;
async function fetchData() {
  const url = "https://opentdb.com/api.php?amount=10&category=15"

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
start.addEventListener('click', fetchData)

function game() {
  questionDiv.innerHTML = ``;
  console.log(trivia)
  function displayAnswers(question) {
    //store the correct and incorrect answers at put into an array for shuffling
    let correctAnswer = question[0].correct_answer
    const incorrectAnswer1 = question[0].incorrect_answers[1]
    const incorrectAnswer2 = question[0].incorrect_answers[2]
    const incorrectAnswer3 = question[0].incorrect_answers[3]
    const arrayAnswers = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
    
    //for multiple choice quesitons, the answers always need to presented in a random order
    if (question[0].type === 'multiple') {
      
      // funciton that shuffles they array of answer options created above
      function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
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
    const shuffledArray = shuffle(arrayAnswers)

     //udpate the HTML using the shuffled answer options.
     $('#answers').html(
      //display answer options in radio buttons


    // Create array of questions


    // Shuffle array


    // Include shuffled array into HTML somehow (below)
 `
  <div class="card"">
    <h3>${trivia[0].question}</h3>

    <input type="one" id="choice-1" class="answer" value='${shuffledArray[0]}'>
    <label for="1" id="1">${shuffledArray[0]}</label><br><br>
    <input type="two" id="choice-2" class="answer" value='${shuffledArray[1]}'>
    <label for="2" id="2">${shuffledArray[1]}</label><br><br>
    <input type="three" id="choice-3" class="answer" value='${shuffledArray[2]}'>
    <label for="3" id="3">${shuffledArray[2]}</label><br><br>
    <input type="four" id="choice-4" class="answer" value='${shuffledArray[3]}'>
    <label for="4" id="4">${shuffledArray[3]}</label>
    <br><br>
    <button id= "allbuttons">Submit</button>
    <div id = "next"></div>
  `
)
} else {
//for true/false questions, no shuffling or randomization is needed. these options will always
//be presented as True and False in that order
$('#answers').html(
`
    <input type="one" id="choice-1" class="answer" value="True">
    <label for="1" id="1">True</label><br><br>
    <input type="two" id="choice-2" class="answer" value="False">
    <label for="2" id="2">False</label><br><br>
    <br><br>
    <button id= "submit-answer">Submit</button>
    <div id = "next"></div>
  `
 
)
  }
  `;
  }
  </div >
}