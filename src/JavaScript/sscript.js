const frenchTestQuestions = [
    {
        question: "Comment dit-on 'apple' en français?",
        options: ["Pomme", "Banane", "Orange", "Raisin"],
        answer: "Pomme"
    },
    {
        question: "Choisissez le bon verbe: Je ____ au cinéma tous les samedis.",
        options: ["vais", "va", "aller", "allons"],
        answer: "vais"
    },
    {
        question: "Quelle est la forme correcte de l'article pour le mot 'chien'?",
        options: ["La", "Le", "Les", "L'"],
        answer: "Le"
    },
    {
        question: "Conjuguez le verbe 'être' pour 'ils' au présent.",
        options: ["sont", "est", "es", "sommes"],
        answer: "sont"
    },
    {
        question: "Comment dit-on 'I am tired' en français?",
        options: ["Je suis fatigué", "Tu es fatigué", "Il est fatigué", "Nous sommes fatigués"],
        answer: "Je suis fatigué"
    },
    {
        question: "Choisissez la bonne forme: Nous ____ la musique.",
        options: ["écoutons", "écoute", "écouter", "écoutes"],
        answer: "écoutons"
    },
    {
        question: "Quelle est la traduction de 'They are going to the beach'?",
        options: ["Ils vont à la plage", "Nous allons à la plage", "Tu vas à la plage", "Il va à la plage"],
        answer: "Ils vont à la plage"
    },
    {
        question: "Choisissez la bonne réponse: ____ est ton nom?",
        options: ["Quel", "Quelle", "Quels", "Quelles"],
        answer: "Quel"
    },
    {
        question: "Comment dit-on 'good evening' en français?",
        options: ["Bonsoir", "Bonjour", "Bonne nuit", "Salut"],
        answer: "Bonsoir"
    },
    {
        question: "Complétez la phrase: Elle ____ un livre.",
        options: ["lit", "lis", "lisent", "lire"],
        answer: "lit"
    }
];
document.getElementById("nameOfuser").textContent = localStorage.getItem("nameOfuser") ;
let i = 0;
function startOfQuiz() {
    let parentOfquestions = document.getElementById("divForQu");
    parentOfquestions.innerHTML = `<div class="flex items-center flex-col justify-center">
        <div class="text-white text-2xl p-6">
            <h1 >Question N <span>${i + 1}</span>/10</h1>
        </div>
        <div id="question" class="text-white text-2xl p-6 w-1/2 min-h-20 border-solid border-red-50 border text-center ">
            ${frenchTestQuestions[i].question}
        </div>
        <div class="text-white text-2xl p-6  ">
            <div class="flex flex-col">
            ${frenchTestQuestions[i].options.map((ele, index) =>
        `<span id="${index}" class="reponsOfuser border p-3 rounded-md mb-3 cursor-pointer "><span>${index + 1}-</span> ${ele}</span>`
    ).join('')
        }
            </div>
            <button onclick="next()" id="btn-next" hidden class=" px-4 text-center border border-solid border-white text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 text-xl">
                Next
            </button>
        </div>
    </div>`
}

function aficcheResult(){
    let divOfresult = document.getElementById("divForQu");
    let numberFOrightAnsewerFormLocalstroage = parseInt(localStorage.getItem("numberOfrightanswer"))  ;
    function returnNiveau(){
        if(numberFOrightAnsewerFormLocalstroage <= 2){
            return "A1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 2 && numberFOrightAnsewerFormLocalstroage <=6){
            return "B1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 6 && numberFOrightAnsewerFormLocalstroage <=8){
            return "B2"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 8 && numberFOrightAnsewerFormLocalstroage <=9){
            return "C1"
        }
        else if (numberFOrightAnsewerFormLocalstroage ===10 ){
            return "C2"
        }
    }
    divOfresult.innerHTML = `<div id="divForResult" class="text-white text-center flex justify-center items-center mt-28 flex-col text-6xl">
    <h1 class="text-xl mb-8" > Votre score  précédent  est <span >${localStorage.getItem("lastscor")}</span> / 10</h1>
    <h1 > Votre score est <span>${numberFOrightAnsewerFormLocalstroage}</span> / 10</h1>
        <h2 class="mt-8">Niveau <span>${returnNiveau()}</span></h2>
         <button onclick="StartQuizFromZero()" class="text-white mt-8 p-3 text-center border border-solid border-white font-semibold rounded-lg shadow-md hover:bg-black/50 focus:ring-opacity-75 text-xl">Redémarrer</button>
          </div>
        `
}



startOfQuiz()
let a = 7;
function Timer() {
    let spanOftimer = document.getElementById("spanOftimer");
    spanOftimer.textContent = a;
    a--;
    if (a < 0) {
        clearInterval(intervalId);
        ColorFortheRightAnswer()
        hiddenBtn()
    }

}
function statrSecons() {
    intervalId = setInterval(Timer, 1000);
}
statrSecons()
function next() {
    a = 7;
    if (i < 9) {
        document.getElementById("spanOftimer").textContent = a;
        clearInterval(intervalId);
        i++
        startOfQuiz();
        selectionerLareponse();
        statrSecons()
    }
    else {
        let parentOfquestions = document.getElementById("divForQu");
        parentOfquestions.textContent= ""
    
        aficcheResult()
    } 
}

let indexOfrightanswer;
let numberOFtherightanswer = 0 ; // scor

localStorage.setItem("numberOfrightanswer", numberOFtherightanswer);
function selectionerLareponse() {
    let reponsOfuser = document.querySelectorAll(".reponsOfuser");

    reponsOfuser.forEach((elem, index) => {

        if (elem.textContent.slice(3) === frenchTestQuestions[i].answer) {
            indexOfrightanswer = index
        }
        elem.addEventListener('click', () => {

            if (a > 0) {
                if (elem.textContent.slice(3) === frenchTestQuestions[i].answer) {
                    elem.classList.add("bg-green-600")
                    numberOFtherightanswer++
                    localStorage.setItem("numberOfrightanswer", numberOFtherightanswer);
                }
                else {
                    elem.classList.add("bg-red-700")
                }

                a = 0;
                document.getElementById("spanOftimer").textContent = a;
                clearInterval(intervalId);
                reponsOfuser[indexOfrightanswer].classList.add("bg-green-600");
                hiddenBtn();

            }
        })
    })
}
function ColorFortheRightAnswer() {
    let reponsOfuser = document.querySelectorAll(".reponsOfuser");

    reponsOfuser[indexOfrightanswer].classList.add("bg-green-600")
}
selectionerLareponse();

function hiddenBtn() {
    let btn = document.getElementById("btn-next");
    if (a <= 0) {
        btn.classList.toggle("block")
        
    }
}

function StartQuizFromZero() {

    localStorage.setItem("lastscor" , localStorage.getItem("numberOfrightanswer")) ;
    i = 0;
    numberOFtherightanswer = 0
    localStorage.setItem("numberOfrightanswer", numberOFtherightanswer);
    startOfQuiz()
    statrSecons()
    selectionerLareponse();
}
