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
start.addEventListener('click', fetchData)

function game() {
console.log(trivia)
}

async function question() {


  try {

    let response = await axios.get(url);
    let data = response.data.results
    console.log(data)

    for (let i = 0; i < 10; i++) {
      let question = response.data.results[i].question
      let correct = response.data.results[i].correct_answer
      let wrong = response.data.results[i].
      console.log(question, correct, wrong)
    }
    
  } catch (error) {
    console.log(`It's a secret to everybody ${error}`)
  }
  console.log(response, data)
}








// function renderList(questions) {
//   questions.forEach((element) => {
//     let list = document.querySelector("Questions")

//   })
  

// }
  

