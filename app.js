const quizQuestions = [

{
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    
]

let indexNumber = 0;
const count = document.getElementById("count")
count.innerHTML = `<p>${indexNumber + 1}/${quizQuestions.length}</p>`



function renterUI(){
    const question = document.getElementById("question")
    const options = document.getElementById("options")
    
    question.innerHTML = quizQuestions[indexNumber].question
    const optionsList = quizQuestions[indexNumber].options
    console.log(optionsList)
    options.innerHTML = ""

    for(var key in optionsList){
        console.log("loop", optionsList[key])
        options.innerHTML += `<li onclick="checkAnswer(this)">${optionsList[key]}</li>`
    }
}
function nextQues(){
    
    indexNumber++ 
    renterUI()
    count.innerHTML = `<p>${indexNumber + 1}/${quizQuestions.length}</p>`

}
function checkAnswer(ele){

    const userAnswer = ele.innerHTML
    const actualAnswer = quizQuestions[indexNumber].answer 

    if(userAnswer === actualAnswer){
        ele.style.background = "Green"
    }else{
       ele.style.background = "Red" 
    }

    const allList = document.getElementById("options")
    console.log("demo",allList.childNodes)
    allList.style.pointerEvents = "none"





    
}