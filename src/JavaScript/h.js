function aficcheResult(){
    let divOfresult = document.getElementById("divForResult");
    let numberFOrightAnsewerFormLocalstroage = parseInt(localStorage.getItem("numberOfrightanswer"))  ;
    function returnNiveau(){
        if(numberFOrightAnsewerFormLocalstroage <= 2){
            return "A1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 2 || numberFOrightAnsewerFormLocalstroage <=6){
            return "B1"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 6 || numberFOrightAnsewerFormLocalstroage <=8){
            return "B2"
        }
        else if (numberFOrightAnsewerFormLocalstroage > 8 || numberFOrightAnsewerFormLocalstroage <=9){
            return "C1"
        }
        else if (numberFOrightAnsewerFormLocalstroage ===10 ){
            return "C2"
        }
    }
    divOfresult.innerHTML = `<h1 > Votre score  précédent est <span>${numberFOrightAnsewerFormLocalstroage}</span> / 10</h1>
    <h1 > Votre score est <span>${numberFOrightAnsewerFormLocalstroage}</span> / 10</h1>
        <h2 class="mt-8">Niveau <span>${returnNiveau()}</span></h2>
         <button onclick="StartQuizFromZero()" class="text-white mt-8 p-3 text-center border border-solid border-white font-semibold rounded-lg shadow-md hover:bg-black/50 focus:ring-opacity-75 text-xl">Redémarrer</button>
        `
}
aficcheResult()