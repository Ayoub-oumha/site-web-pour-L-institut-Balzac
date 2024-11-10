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


document.getElementById("nameOfuser").textContent = localStorage.getItem("nameOFuser");
let counter = 0 ;
let i = 0;
function startOfQuiz() {
    let parentOfquestions = document.getElementById("divForQu");
    parentOfquestions.innerHTML = `<div  >
    <div class="flex flex-col items-center    p-6 rounded-lg bg-white bg-opacity-90 shadow-lg  ">
        <div class="text-blue-800 text-3xl font-semibold ">
            <h1>Question N <span>${i + 1}</span> / 10</h1>
        </div>

        <div id="question" class=" bg-blue-50 text-blue-900 text-2xl font-medium p-6 w-full rounded-lg shadow-md text-center border border-blue-300 mb-6 mt-4">
            ${frenchTestQuestions[i].question}
        </div>

        <div class="text-2xl w-full  px-8  ">
            <div class=" flex  flex-wrap   flex-col   ">
                ${frenchTestQuestions[i].options.map((ele, index) =>
                    `<button id="${index}" class="reponsOfuser   flex  mb-4  border border-gray-300 p-4 rounded-lg  cursor-pointer transition duration-200 ease-in-out hover:bg-blue-600 hover:text-white "><span class="font-semibold">${index + 1} -</span> <span>${ele}</span></button>`
                ).join('')}
            </div>
        </div>

        <button onclick="next()" id="btn-next" class=" px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl transition duration-200 hidden ">
            Suivant
        </button>
    </div>
</div>

`
}
function aficcheResult() {
    let divOfresult = document.getElementById("divForQu");
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataOfUser"));
    let numberOfrightAnswer = dataFromLocalStorage[0].numbreOfrightAnswer ;
    let lastScor = dataFromLocalStorage[0].lastscore ;
    
   
    function returnNiveau() {
        if (numberOfrightAnswer <= 2) {
            return "A1"
        }
        else if (numberOfrightAnswer> 2 && numberOfrightAnswer <= 6) {
            return "B1"
        }
        else if (numberOfrightAnswer > 6 && numberOfrightAnswer <= 8) {
            return "B2"
        }
        else if (numberOfrightAnswer > 8 && numberOfrightAnswer <= 9) {
            return "C1"
        }
        else if (numberOfrightAnswer === 10) {
            return "C2"
        }
    }
   function answers(a , b , index){
     let output = ""
    
    for(let k = 0 ; k < 4; k++ ){
       
        if( b == k){
            output += `
            <div class=" answer1 reponsOfuser border border-gray-400 p-2 rounded-md bg-green-400 ">${frenchTestQuestions[index].options[k]}</div>
        `
        }
        else if( a == k ){
            output += `
            <div class="answer1 reponsOfuser border border-gray-400 p-2 rounded-md bg-red-400">${frenchTestQuestions[index].options[k]}</div>
        `
        }
        else if(a == 100){
            output += `
        <div class="answer1 reponsOfuser border border-gray-400 p-2 rounded-md bg-red-400 ">${frenchTestQuestions[index].options[k]}</div>
    `
        }
        else { output += `
        <div class="answer1 reponsOfuser border border-gray-400 p-2 rounded-md ">${frenchTestQuestions[index].options[k]}</div>
    `}  
        
        
        
    }
    return output ;
   }
    function detaileOfQuestions(){
        let output = ""; // Initialize an empty string to store HTML content
        for(let j = 1 ; j <= 10 ; j++ ){
            let therightanswer = dataFromLocalStorage[j].indexOfanswer
            let indexOfanswerFormuser = dataFromLocalStorage[j].indexOfanswerchouaser
           
         output +=   `<div class="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
            <h3 class="text-xl font-medium">Question N <span>${j}</span> / 10</h3>
            <p class="text-lg mt-2 mb-4">${frenchTestQuestions[dataFromLocalStorage[j].indexOfQ].question}</p>
            <div class="space-y-2">
                <!-- Sample answer options -->
               ${ answers(indexOfanswerFormuser , therightanswer , dataFromLocalStorage[j].indexOfQ)}
                
            </div>
        </div>`
        
       
        }
        
        return output;

       
    }
    detaileOfQuestions()
    divOfresult.innerHTML =` <main id="resultDiv" class="flex flex-col items-center py-12 w-full">
    <div class="bg-white p-10 rounded-lg shadow-lg text-center w-3/4 max-w-lg">
        <h1 class="text-4xl font-bold text-blue-800 mb-4">Résultats de l'évaluation</h1>
        <p class="text-2xl font-semibold">Votre score : <span class="text-blue-600">${numberOfrightAnswer}</span> / 10</p>
        <p class="text-xl mt-2">Niveau atteint : <span class="text-green-600">${returnNiveau()}</span></p>
        <p class="mt-4 text-lg">Score précédent : <span class="font-medium">${lastScor}</span> / 10</p>
        <button onclick="StartQuizFromZero()"
            class="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Redémarrer l'évaluation
        </button>
         <button id="downloadButton"
            class="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
           Télécharger le PDF
        </button>
    </div>

    <section id="questions-section" class="w-3/4 max-w-lg mt-12">
        <h2 class="text-2xl font-semibold text-center mb-6">Détails des questions</h2>
        <!-- Repeatable question card -->
        
       ${detaileOfQuestions()}
        <!-- Repeat for other questions -->
    </section>
</main>`
function downloadResultAsPDF() {
    const element = document.getElementById("resultDiv");
    console.log("hhhh")
    html2pdf()
        .set({
            margin: 1,
            filename: 'resultats_evaluation.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save();
}

document.getElementById("downloadButton").addEventListener("click", downloadResultAsPDF);
 
}

// function aficcheResult() {
//     let divOfresult = document.getElementById("divForQu");
//     let numberFOrightAnsewerFormLocalstroage = parseInt(localStorage.getItem("numberOfrightanswer"));
//     function returnNiveau() {
//         if (numberFOrightAnsewerFormLocalstroage <= 2) {
//             return "A1"
//         }
//         else if (numberFOrightAnsewerFormLocalstroage > 2 && numberFOrightAnsewerFormLocalstroage <= 6) {
//             return "B1"
//         }
//         else if (numberFOrightAnsewerFormLocalstroage > 6 && numberFOrightAnsewerFormLocalstroage <= 8) {
//             return "B2"
//         }
//         else if (numberFOrightAnsewerFormLocalstroage > 8 && numberFOrightAnsewerFormLocalstroage <= 9) {
//             return "C1"
//         }
//         else if (numberFOrightAnsewerFormLocalstroage === 10) {
//             return "C2"
//         }
//     }
//     divOfresult.innerHTML =` <main class="flex flex-col items-center py-12 w-full">
//     <div class="bg-white p-10 rounded-lg shadow-lg text-center w-3/4 max-w-lg">
//         <h1 class="text-4xl font-bold text-blue-800 mb-4">Résultats de l'évaluation</h1>
//         <p class="text-2xl font-semibold">Votre score : <span class="text-blue-600">7</span> / 10</p>
//         <p class="text-xl mt-2">Niveau atteint : <span class="text-green-600">A2</span></p>
//         <p class="mt-4 text-lg">Score précédent : <span class="font-medium">5</span> / 10</p>
//         <button onclick="StartQuizFromZero()"
//             class="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
//             Redémarrer l'évaluation
//         </button>
//     </div>

//     <section id="questions-section" class="w-3/4 max-w-lg mt-12">
//         <h2 class="text-2xl font-semibold text-center mb-6">Détails des questions</h2>
//         <!-- Repeatable question card -->
//         <div class="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
//             <h3 class="text-xl font-medium">Question N <span>1</span> / 10</h3>
//             <p class="text-lg mt-2 mb-4">${frenchTestQuestions[i].question}</p>
//             <div class="space-y-2">
//                 <!-- Sample answer options -->
//                 <span class="reponsOfuser border border-gray-400 p-2 rounded-md">Option 1</span>
//                 <span class="reponsOfuser border border-gray-400 p-2 rounded-md bg-green-200">Option 2 (Correct)</span>
//                 <span class="reponsOfuser border border-gray-400 p-2 rounded-md">Option 3</span>
//                 <span class="reponsOfuser border border-gray-400 p-2 rounded-md bg-red-200">Option 4 (Incorrect)</span>
//             </div>
//         </div>
       
//         <!-- Repeat for other questions -->
//     </section>
// </main>`
        
// }
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
        AddToLocalStorage() ;
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
       
        if (elem.textContent.slice(4) === frenchTestQuestions[i].answer) {
            indexOfrightanswer = index
        }
        
        elem.addEventListener('click', () => {

            if (a > 0) {
                indexOfanswerChouaser = index ;
                if (elem.textContent.slice(4) === frenchTestQuestions[i].answer) {
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
        btn.classList.replace("hidden" , "block")

    }
}

function StartQuizFromZero() {

    localStorage.setItem("lastscor", localStorage.getItem("numberOfrightanswer"));
    AddLastscor();
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
        
        if(i == 0 ){
           dataFromLocalStorage = [dataFromLocalStorage[0]]
        }
        let indexOfuserInLocalStorage ;
         dataFromLocalStorage.forEach((ele , index) =>{
            if(ele.name === localStorage.getItem("nameOFuser")){
                indexOfuserInLocalStorage = index ;
            }
        }) 
        
        console.log(dataFromLocalStorage)
        dataFromLocalStorage[indexOfuserInLocalStorage].numbreOfrightAnswer = numberOFtherightanswer ;
        
        let obj = {
            indexOfQ : i ,
            indexOfanswer : indexOfrightanswer ,
            indexOfanswerchouaser : indexOfanswerChouaser 
        }
        dataFromLocalStorage.push(obj) ;
        console.log(dataFromLocalStorage)
        localStorage.setItem("dataOfUser" , JSON.stringify(dataFromLocalStorage));

}
function AddLastscor(){
    let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataOfUser")) || [];

    let indexOfuserInLocalStorage ;
    dataFromLocalStorage.forEach((ele , index) =>{
       if(ele.name === localStorage.getItem("nameOFuser")){
           indexOfuserInLocalStorage = index ;
       }
   }) 
   
   dataFromLocalStorage[indexOfuserInLocalStorage].lastscore = numberOFtherightanswer ;
   localStorage.setItem("dataOfUser" , JSON.stringify(dataFromLocalStorage));
    
}
