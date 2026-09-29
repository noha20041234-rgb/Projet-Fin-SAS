const prompt = require("prompt-sync")();
let choix;
let candidats = [
    { cin : "AA123456",
    nom : "name1",
    prenom : "name1",
    partiPolitique : "IND",
    age: 40,
    electeurs: ["e1","e2","e3","e4","e5"]
    },
    { cin : "AB123456",
    nom : "name2",
    prenom : "name2",
    partiPolitique : "PAM",
    age: 40,
    electeurs: ["e6","e7","e8","e9"]
    },
      { cin : "AC123456",
    nom : "name3",
    prenom : "name3",
    partiPolitique : "IND",
    age: 40,
    electeurs: ["e10","e11","e12","e13","e14","e15","e16"]
    }
];


function Ajoutercadidat() {
    let cin = prompt("CIN : ").trim();
    let exist = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            exist = true;
        }
    }
    if (exist) {
        console.log("Ce candidat existe deja.");
        return;
    }
    let nom = prompt("Nom : ").trim();
    let prenom = prompt("Prénom : ").trim();
    let partiPolitique = prompt("Parti politique : ").trim();
    let age = Number(prompt("Age : "));
    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(candidat);
    console.log("Candidat ajouté avec succès.");
}

function voter(){

    let cinElecteur = prompt("Entrez votre CIN : ").trim();
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cinElecteur) {
                dejaVote = true;
            }
        }
    }
    if (dejaVote) {
        console.log("Vous avez déjà voté ");
        return;
    }
    
    let cinCandidat = prompt("Entrez la CIN du candidat : ").trim();
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            trouve = true;
        }
    }
    if (trouve) {
        console.log("Vote enregistré avec succès.");
    
    } else {
        console.log("Candidat introuvable.");
    }
}
  
 function AfficherTousLesCandidats() {
    for (let i = 0; i < candidats.length; i++) {
        console.log("===== Candidat " + (i + 1) + " =====");
        console.log("CIN : " + candidats[i].cin);
        console.log("Nom : " + candidats[i].nom);
        console.log("Prénom : " + candidats[i].prenom);
        console.log("Parti politique : " + candidats[i].partiPolitique);
        console.log("Âge : " + candidats[i].age);
        console.log("Nombre de votes : " + candidats[i].electeurs.length);
        console.log("--------------------");
    }
}

function Triervote() {
    for (let i = 0; i < candidats.length - 1; i++) {
        for (let j = 0; j < candidats.length - 1 - i; j++) {
            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                let temp = candidats[j];
                candidats[j] = candidats[j + 1];
                candidats[j + 1] = temp;
            }
        } 
    }
    AfficherTousLesCandidats();
}

function FiltrerParParti() {
    let parti = prompt("Entrez le parti politique : ").trim();
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].partiPolitique === parti) {
            trouve = true;
            console.log("===== Candidat " + (i + 1) + " =====");
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prénom : " + candidats[i].prenom);
            console.log("Parti politique : " + candidats[i].partiPolitique);
            console.log("Âge : " + candidats[i].age);
            console.log("Nombre de votes : " + candidats[i].electeurs.length);
            console.log("--------------------");
        }
    }
    if (trouve === false) {
        console.log("Aucun candidat trouve pour ce parti.");
    }
}

function AfficherCandidats() {
    let choixAffichage;
    console.log("===== Affichage des candidats =====");
    console.log("1. Par nombre de votes");
    console.log("2. Par parti politique");
    choixAffichage = Number(prompt("Entrez votre choix : "));
    switch (choixAffichage) {
        case 1:
            Triervote();
            break;
        case 2:
            FiltrerParParti();
            break;
        default:
            console.log("Choix invalide.");
    }
}

function ModifierCandidat() {
    let cin = prompt("Entrez la CIN du candidat : ").trim();
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            let nouveauParti = prompt("Nouveau parti politique : ").trim();
            let nouvelAge = Number(prompt("Nouvel âge : "));
            candidats[i].partiPolitique = nouveauParti;
            candidats[i].age = nouvelAge;
            trouve = true;
            console.log("Candidat modifié avec succès.");
        }
    }
    if (!trouve) {
        console.log("Candidat introuvable.");
        return
    }
}
 
function SupprimerCandidat() {
    let cin = prompt("Entrez la CIN du candidat : ").trim();
    let trouve = false;
     for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            candidats.splice(i, 1);
            trouve = true;
            console.log("Candidat supprimé avec succès.");
            break;
        }
    }
    if (!trouve) {
        console.log("Candidat introuvable.");
        return
    }
}

function RechercherCandidat() {
    let nom = prompt("Entrez le nom du candidat : ").trim();
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === nom) {
             console.log("===== Candidat =====");
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prénom : " + candidats[i].prenom);
            console.log("Parti politique : " + candidats[i].partiPolitique);
            console.log("Âge : " + candidats[i].age);
            console.log("Nombre de votes : " + candidats[i].electeurs.length);
            console.log("--------------------");
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("Candidat introuvable.");
    }
}
do {
    console.log("===== Gestion d'une campagne électorale =====");
    console.log("1. Ajouter un candidat ");
    console.log("2. Ajouter plusieurs candidats ");
    console.log("3. Voter pour un candidat ");
    console.log("4. Afficher la liste des candidat"); 
    console.log("5. Modifier les informations d'un candidat ");
    console.log("6. Supprimer un candidat ");
    console.log("7. Rechercher des candidats ");
    console.log("0. Fin du programme ");
    choix = Number(prompt("Entrez votre choix : "));
    switch (choix) {
        case 1:
            Ajoutercadidat();
            break;
        case 2:
            let number = Number(prompt("Combien de candidats voulez-vous ajouter ?"));
            for(let i = 0; i < number; i++){
                Ajoutercadidat()
            }
            break;
        case 3:
            voter();
            break;
        case 4 :
            AfficherCandidats();
            break;
        case 5 :
            ModifierCandidat() ;
            break;
        case 6 :
            SupprimerCandidat();
            break;
        case 7 :
            RechercherCandidat();
            break;
        case 0:
        console.log("Fin du programme.");
        break;

    default:
        console.log("Choix invalide.");
}

 }while (choix !== 0);


