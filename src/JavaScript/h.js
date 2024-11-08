document.getElementById("btn").addEventListener('click', (e) => {
   e.preventDefault()
    let newName = document.getElementById("name").value;

    if (newName.length === 0) {
        e.preventDefault();

    }
    else {
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("dataOfUser")) || [];

        let nameExists = dataFromLocalStorage.some(data => data.name === newName);

        if (!nameExists) {
            dataFromLocalStorage.push({ name: newName });
            localStorage.setItem("dataOfUser", JSON.stringify(dataFromLocalStorage));
            console.log("Nom ajouté :", newName);
        } else {
            console.log("Le nom existe déjà :", newName);
        }

        localStorage.setItem("nameOFuser", newName) ;
    }


    })
