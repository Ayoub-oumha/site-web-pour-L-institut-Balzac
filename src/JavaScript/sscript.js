const frenchTestQuestions = [
    {
        question: "Quelle est la traduction de 'They are going to the beach'?",
        options: ["Tu vas à la plage", "Ils vont à la plage", "Il va à la plage", "Nous allons à la plage"],
        answer: "Ils vont à la plage"
    },
    {
        question: "Choisissez la bonne réponse: ____ est ton nom?",
        options: ["Quelles", "Quel", "Quels", "Quelle"],
        answer: "Quel"
    },
    {
        question: "Comment dit-on 'good evening' en français?",
        options: ["Salut", "Bonjour", "Bonne nuit", "Bonsoir"],
        answer: "Bonsoir"
    },
    {
        question: "Complétez la phrase: Elle ____ un livre.",
        options: ["lis", "lit", "lire", "lisent"],
        answer: "lit"
    },
    {
        question: "Comment dit-on 'She is happy' en français?",
        options: ["Vous êtes contents", "Elle est contente", "Il est content", "Tu es content"],
        answer: "Elle est contente"
    },
    {
        question: "Complétez: Nous ____ souvent du café.",
        options: ["boivent", "boit", "buvons", "bois"],
        answer: "buvons"
    },
    {
        question: "Quelle est la bonne réponse pour 'I like chocolate'?",
        options: ["J'aime le chocolat", "Je veux chocolat", "J'aime chocolat", "Je mange chocolat"],
        answer: "J'aime le chocolat"
    },
    {
        question: "Choisissez la forme correcte pour 'They finished the book'.",
        options: ["Ils finiront le livre", "Ils finiraient le livre", "Ils finissent le livre", "Ils ont fini le livre"],
        answer: "Ils ont fini le livre"
    },
    {
        question: "Comment dit-on 'I would like to travel' en français?",
        options: ["Je veux voyager", "Je voyage", "Je vais voyager", "J'aimerais voyager"],
        answer: "J'aimerais voyager"
    },
    {
        question: "Choisissez la bonne option pour compléter: Ils ____ depuis une heure.",
        options: ["attendez", "attendent", "attendons", "attend"],
        answer: "attendent"
    },
    {
        question: "Complétez: Elle n'a jamais ____ ce film.",
        options: ["vu", "voir", "voyait", "vu"],
        answer: "vu"
    },
    {
        question: "Quelle est la bonne traduction pour 'I would have done it if I had known'?",
        options: ["Je l'aurais fait si j'avais su", "J'aurais fait si je savais", "Je l'ai fait si j'ai su", "Je le fais si je savais"],
        answer: "Je l'aurais fait si j'avais su"
    },
    {
        question: "Choisissez la bonne phrase: Nous devons ____ le projet d'ici demain.",
        options: ["finit", "finir", "finissons", "finissant"],
        answer: "finir"
    },
    {
        question: "Quelle est la bonne traduction de 'Despite the rain, they went out'?",
        options: ["Malgré la pluie, ils sont sortis", "Sous la pluie, ils sont restés", "À cause de la pluie, ils sont partis", "Après la pluie, ils sont sortis"],
        answer: "Malgré la pluie, ils sont sortis"
    },
    {
        question: "Choisissez la forme correcte: Il est probable qu'il ____ demain.",
        options: ["vient", "vienne", "venait", "viendra"],
        answer: "vienne"
    },
    {
        question: "Complétez la phrase: Bien qu'elle ____ malade, elle est venue.",
        options: ["sera", "était", "est", "soit"],
        answer: "soit"
    },
    {
        question: "Choisissez la bonne phrase pour traduire 'He would have been here if he could.'",
        options: ["Il est ici s'il peut", "Il serait là s'il pouvait", "Il sera là s'il peut", "Il aurait été là s'il avait pu"],
        answer: "Il aurait été là s'il avait pu"
    },
    {
        question: "Quelle est la meilleure traduction pour 'The more I study, the better I understand.'?",
        options: ["J'étudie et je comprends mieux", "Plus j'étudie, mieux je comprends", "Quand j'étudie plus, je comprends mieux", "En étudiant, je comprends bien"],
        answer: "Plus j'étudie, mieux je comprends"
    },
    {
        question: "Complétez: Si je ____ la vérité, je ne l'aurais pas fait.",
        options: ["sachais", "savais", "avais su", "saurais"],
        answer: "avais su"
    }
];


function shuffle(arr) {
    const num = 7 ;

    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < num; j++) {
            const rand = Math.floor(Math.random() * 5)
            // [arr[i], arr[rand]] = [arr[rand], arr[i]];
            var temp = arr[i];
            arr[i] = arr[rand];
            arr[rand] = temp;
        }
    }
    return arr;
}
var d = shuffle(frenchTestQuestions);


document.getElementById("nameOfuser").textContent = localStorage.getItem("nameOfuser");
let counter = 0;
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

function aficcheResult() {
    let divOfresult = document.getElementById("divForQu");
    let numberFOrightAnsewerFormLocalstroage = parseInt(localStorage.getItem("numberOfrightanswer"));
    function returnNiveau() {
        if (numberFOrightAnsewerFormLocalstroage <= 2) {
            return "A1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 2 && numberFOrightAnsewerFormLocalstroage <= 6) {
            return "B1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 6 && numberFOrightAnsewerFormLocalstroage <= 8) {
            return "B2"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 8 && numberFOrightAnsewerFormLocalstroage <= 9) {
            return "C1"
        }
        else if (numberFOrightAnsewerFormLocalstroage === 10) {
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
    if (counter < 9) {
        
        AddToLocalStorage() ;
        document.getElementById("spanOftimer").textContent = a;
        clearInterval(intervalId);
        i++ ;
        counter++ ; 
        indexOfanswerChouaser = 100 ;
        startOfQuiz();
        selectionerLareponse();
        statrSecons() ;
    }
    else {
        let parentOfquestions = document.getElementById("divForQu");
        parentOfquestions.textContent = ""
        aficcheResult()
    }
}

let indexOfrightanswer  ;
let indexOfanswerChouaser = 100 ;
let numberOFtherightanswer = 0; // scor

localStorage.setItem("numberOfrightanswer", numberOFtherightanswer);
function selectionerLareponse() {
    let reponsOfuser = document.querySelectorAll(".reponsOfuser");

    reponsOfuser.forEach((elem, index) => {

        if (elem.textContent.slice(3) === frenchTestQuestions[i].answer) {
            indexOfrightanswer = index
        }
        elem.addEventListener('click', () => {

            if (a > 0) {
                indexOfanswerChouaser = index ;
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

    localStorage.setItem("lastscor", localStorage.getItem("numberOfrightanswer"));
    i = 0;
    counter = 0
    numberOFtherightanswer = 0
    localStorage.setItem("numberOfrightanswer", numberOFtherightanswer);
    startOfQuiz()
    statrSecons()
    selectionerLareponse();
}



function AddToLocalStorage(){
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataOfUser")) || [];
        
        
        let indexOfuserInLocalStorage ;
         dataFromLocalStorage.forEach((ele , index) =>{
            if(ele.name === localStorage.getItem("nameOFuser")){
                indexOfuserInLocalStorage = index ;
            }
        }) 
        
        dataFromLocalStorage[indexOfuserInLocalStorage].indexOfquestion = i ;
        dataFromLocalStorage[indexOfuserInLocalStorage].indexOfquestionCorrect = indexOfrightanswer ;
        dataFromLocalStorage[indexOfuserInLocalStorage].indexOfanswerOfuser = indexOfanswerChouaser  ;
        dataFromLocalStorage[indexOfuserInLocalStorage].numbreOfrightAnswer = numberOFtherightanswer ;

        
        console.log(dataFromLocalStorage)

}
