/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
_______________________________________________________________________________________________
*/

let description = document.getElementById("descrizione");


//MILESTONE 0: Creo un array con all'interno 6 oggetti con Keys: nome, cognome, ruolo e foto 
const workers = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }    
]

//MILESTONE 1:creo un ciclo For (perchè sto lavorando con un array) per stampare in console tutti gli elementi degli oggetti
for(let i = 0; i < workers.length; i++){

    console.log("Nome: " + workers[i].nome);

    console.log("Cognome: " + workers[i].cognome);

    console.log("Ruolo: " + workers[i].ruolo);

    console.log("Foto: " + workers[i].foto);
}

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

for(let i = 0; i < workers.length; i++){

    let liElement = document.createElement("li");

    liElement.innerHTML = workers[i].nome + workers[i].cognome + workers[i].ruolo + workers[i].foto;

    description.append(liElement);
    


    //descriptionTwo.innerText = "Cognome: " + workers[i].cognome;

    //descriptionThree.innerText = "Ruolo: " + workers[i].ruolo;

    //descriptionFour.innerText = "Foto: " + workers[i].foto;
}

