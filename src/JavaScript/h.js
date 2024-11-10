document.getElementById("btn").addEventListener('click', (e) => {
 
    let newName = document.getElementById("name").value;

    if (newName.length === 0) {
        e.preventDefault();

    }
    else {
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataOfUser")) || [];
         dataFromLocalStorage =  [];


            dataFromLocalStorage.push({ name: newName });
            localStorage.setItem("dataOfUser", JSON.stringify(dataFromLocalStorage));
            
        

        localStorage.setItem("nameOFuser", newName) ;
    }


    })
