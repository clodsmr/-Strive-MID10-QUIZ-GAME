let userScore = 0


//if questionNumber>questions.lenght--->showScore() 

//array of questions

const arrQuestions = [ 
    {
        question:"Which Renaissance scientist is credited with the discovery of the pendulum?",
        answers: [  "aa", "Galielo Galilei", "cc" ],
        corret_answer: "1"

    },   
 
    {
        question:"What is the name of Isaac Newton's three extremely important laws? ",

        answers: [
             "aa",
             "Law of motion",
             "cc",
    ],
        corret_answer: "1" ,
    },
    {
        question:"Can you name the tube used to produce X-rays?",
        answers: [
             "aa",
             "Coolidge tube",
             "cc",
        ],
        corret_answer:"1" ,
    },
    {
        question:"What is a word used to describe a solid whose arrangement of atoms and molecules has no definite pattern?",

     
        answers:  [
             "aa",
             "Amorphous",
             "cc",
        ],
        corret_answer:"1" ,
    }, 
    {
        question:"For what discovery did Albert Einstein win his first Nobel prize?",

     
        answers:  [
             "aa",
             "Photoelettric effect",
             "cc",
        ],
        corret_answer:"1" ,
    }
]

let rightAnswers = []

for (k=0 ; k<arrQuestions.length; k++){
   
    rightAnswers.push(arrQuestions[k].corret_answer)

}

let questionNumber = []

for (let questions=0; questions<arrQuestions.length; questions++) {
       questionNumber.push(arrQuestions[questions].question)

}


//creo le div in cui inserire le domande per ogni domanda dell'array e gliele metto

const showingQuestions = function(){

    let quizNode = document.getElementById("quizContainer")
   
    
    for (let i=0; i<arrQuestions.length; i++){

        let questionNode = document.createElement("div")
        questionNode.innerText = `${i+1}) ${arrQuestions[i].question}`
        questionNode.classList.add("questions")

        let newline = document.createElement('br')
        questionNode.appendChild(newline)

        quizNode.appendChild(questionNode)

        

//radio buttons per risposte
         

         for (let j=0; j<3; j++){
            let radioButtonNode = document.createElement("input");
            radioButtonNode.setAttribute("type", "radio");
            radioButtonNode.classList.add("radioButton")
            radioButtonNode.setAttribute("value", `${arrQuestions[i].answers[j]}`)
            radioButtonNode.setAttribute("name", `question ${i}`)
            radioButtonNode.setAttribute("id", `q${i}${j}`)

            let radioButtonLabel = document.createElement('label')
            radioButtonLabel.htmlFor = `q${i}${j}`

            let answerNode = document.createTextNode(`${arrQuestions[i].answers[j]}`)
            radioButtonLabel.appendChild(answerNode)

            


            questionNode.appendChild(radioButtonNode)
            questionNode.appendChild(radioButtonLabel)
            

         }

       
        
  }

}


let showScore = function () {

    let selectedButton = document.querySelector('radioButton').checked 

    for (questions of questionNumber){

    }
    
    
}


window.onload = function(){

    showingQuestions()
}