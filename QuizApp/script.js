

const quizData = [
    {
        question: 'How old are you',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'what is the best programming langauage in 2019?',
        a: 'Java',
        b: 'C',
        c:'Python',
        d: 'Javascript',
        correct:'d'
    }, {
        question: 'who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'mihal Andrel',
        correct:'b'
    }, {
        question: 'what does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Hellicopters Terminals Motorboats Lamborghinis',
        correct: 'a'
    }, {
        question: 'what year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }, {
        question: 'Which country has it flag in green white green',
        a: 'Nigeria',
        b: 'Ghana',
        c: 'United States',
        d: 'Angola',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz');
const answerElement = document.getElementsByName('answer');
const questionElement = document.getElementById('Question');

const a_text  = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    

}

function getSelected(){

   const answerElement = document.getElementsByName('answer');

    let answer = undefined;

    answerElement.forEach((answerElement) => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer; 
}

function deselectAnswers() {
    answerElement.forEach((answerElement) => {
        answerElement.checked = false;
        });
    }

submitBtn.addEventListener('click' , () => {
    //Check to see the answer 
    const answer = getSelected();


    if(answer) {
        //if an answer is selected check if it's correct.
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }



    if(currentQuiz < quizData.length - 1  ) {
        //If there are more questions, load the next one
        currentQuiz++
        loadQuiz();
        
    } else{
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
        <button onclick= "location.reload()">Reload</button>`;
    }


}
});