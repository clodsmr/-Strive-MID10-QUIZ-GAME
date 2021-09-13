


//if questionNumber>questions.lenght--->showScore() 

//array of questions

const arrQuestions = [ 
    {
        question:"Which scientist is credited with the discovery of the pendulum?",
        answers: [  "Albert Einstein", "Galielo Galilei", "Joannes Kepler" ],
        corret_answer: 2,

    },   
 
    {
        question:"What is the name of Isaac Newton's three extremely important laws? ",

        answers: [
             "Kepler's laws",
             "Law of motion",
             "Gravitational laws",
    ],
        corret_answer: 2 ,
    },
    {
        question:"Can you name the tube used to produce X-rays?",
        answers: [
             "X-rays tube",
             "Coolidge tube",
             "Cathod-ray tube",
        ],
        corret_answer: 2 ,
    },
    {
        question:"What is a word used to describe a solid whose arrangement of atoms and molecules has no definite pattern?",

     
        answers:  [
             "Liquid",
             "Amorphous",
             "Crystal",
        ],
        corret_answer: 2 ,
    }, 
    {
        question:"For what discovery did Albert Einstein win his first Nobel prize?",

     
        answers:  [
            {text: "Black Body radiation", correct: true}
             "Photoelettric effect",
             "General Relativity",
        ],
        corret_answer: 2 ,
    }
]

let rightAnswers = []

for (k=0 ; k<arrQuestions.length; k++){
   
    rightAnswers.push(arrQuestions[k].corret_answer)

}

/*let questionNumber = []

for (let questions=0; questions<arrQuestions.length; questions++) {
       questionNumber.push(arrQuestions[questions].question)

}*/


//creo le div in cui inserire le domande per ogni domanda dell'array e gliele metto

const showingQuestions = function(){

    let quizNode = document.getElementById("quizContainer")
    let buttonsArray = []
    
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
            radioButtonLabel.classList.add("labels")

            let answerNode = document.createTextNode(`${arrQuestions[i].answers[j]}`)
            radioButtonLabel.appendChild(answerNode)

            buttonsArray.push(radioButtonNode)


            questionNode.appendChild(radioButtonNode)
            questionNode.appendChild(radioButtonLabel)
            

         }

       
        
  }

}
// array di bottoni: ogni bottone ha eventListener onclick, funzione. 
// funzione : (if id del bottone ij = i:currentquestion e j=risposta corretta =rightAnswers[i]) allore score+=1
// else score

let showScore = function () {

    let buttons = document.querySelector('radioButton')
        
        for (let question=0; question<6; question++)
    
        // handle button click
        buttons.onclick = function () {
            const rbs = document.querySelectorAll('input[name="question 1"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            alert(selectedValue);
        };

    
}

let rightAnswer = function() {

    
}


window.onload = function(){

    showingQuestions()
}