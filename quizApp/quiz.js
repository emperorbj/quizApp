const questions = [
    {
        question:'Who founded Remnant christian network?',
        answers:[
            {text:'Apostle Selman', correct:false},
            {text:'Apostle Arome Osayi', correct:true},
            {text:'Apostle Paul', correct:false},
            {text:'Apostle Orokpo', correct:false}
        ]
    },
    {
        question:'Who founded facebook?',
        answers:[
            {text:'Jeff Bezoz', correct:false},
            {text:'Mark Zuckerberg', correct:true},
            {text:'Elon Musk', correct:false},
            {text:'Sam Altman', correct:false}
        ]
    },
    {
        question:'Who is the CEO of twitter as from 2023 till date?',
        answers:[
            {text:'Jeff Bezoz', correct:false},
            {text:'Mark Zuckerberg', correct:false},
            {text:'Elon Musk', correct:true},
            {text:'Sam Altman', correct:false}
        ]
    },
    {
        question:'Who is the CEO of OpenAI?',
        answers:[
            {text:'Jeff Bezoz', correct:false},
            {text:'Mark Zuckerberg', correct:false},
            {text:'Elon Musk', correct:false},
            {text:'Sam Altman', correct:true}
        ]
    },
    {
        question:'Which javascript frame work was launched by meta?',
        answers:[
            {text:'Vue.js', correct:false},
            {text:'Angular.js', correct:false},
            {text:'React.js', correct:true},
            {text:'firebase', correct:false}
        ]
    }
];

const questionEl = document.querySelector('#question')
const answerEl = document.querySelector('.answer-btn')
const nextButton = document.querySelector('#next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Next'

    showQuestion()
}

function reset() {
    nextButton.style.display = 'none'
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}

function showQuestion() {

    reset()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNum = currentQuestionIndex + 1
    questionEl.innerHTML = questionNum + '. ' + currentQuestion.question

    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement('button')
        button.innerHTML = answers.text
        button.classList.add('btn')
        answerEl.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click',selectAnswer)
    })
    
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score ++
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerEl.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = 'true'
    })
    nextButton.style.display = 'block'
}

function showScore(){
    reset()
    questionEl.innerHTML = `you scored ${score} out of ${questions.length}`
    nextButton.innerHTML = 'play Again'
    nextButton.style.display = 'block'
}



nextButton.addEventListener('click',function(){
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}





startQuiz()
showQuestion()
