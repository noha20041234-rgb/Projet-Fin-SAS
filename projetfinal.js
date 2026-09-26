const prompt = require("prompt-sync")();
let choix;
let candidats = [];

// 1 Ajouter candidat
function Ajoutercadidat() {
    let cin = prompt("CIN : ");
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
    let nom = prompt("Nom : ");
    let prenom = prompt("Prénom : ");
    let partiPolitique = prompt("Parti politique : ");
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
// VOTER
function voter(){
    // Vérifier si l’électeur a le droit de voter
    let cinElecteur = prompt("Entrez votre CIN : ");
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cinElecteur) {
                dejaVote = true;
            }
        }
    }
    if (dejaVote) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
        return;
    }
    // Demander l'identifiant ou la CIN du candidat
    let cinCandidat = prompt("Entrez la CIN du candidat : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            trouve = true;
        }
    }
    if (trouve) {
        console.log("Vote enregistré avec succès.");
        // candidat n'exist pas
    } else {
        console.log("Candidat introuvable.");
    }
}
 // AFFICHER Les info 
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
//triee
function TrierCandidats() {
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
// par parti politique
function FiltrerParParti() {
    let parti = prompt("Entrez le parti politique : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].partiPolitique === parti) {
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
    if( !trouve){
        console.log("Aucun candidat trouve pour ce parti. ");
    }
}
// Menu Affichage
function AfficherCandidats() {
    let choixAffichage;
    console.log("===== Affichage des candidats =====");
    console.log("1. Par nombre de votes");
    console.log("2. Par parti politique");
    choixAffichage = Number(prompt("Entrez votre choix : "));
    switch (choixAffichage) {
        case 1:
            TrierCandidats();
            break;
        case 2:
            FiltrerParParti();
            break;
        default:
            console.log("Choix invalide.");
    }
}
//Modifier un candidat
function ModifierCandidat() {
    let cin = prompt("Entrez la CIN du candidat : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            let nouveauParti = prompt("Nouveau parti politique : ");
            let nouvelAge = Number(prompt("Nouvel âge : "));
            candidats[i].partiPolitique = nouveauParti;
            candidats[i].age = nouvelAge;
            trouve = true;
            console.log("Candidat modifié avec succès.");
        }
    }
    if (!trouve) {
        console.log("Candidat introuvable.");
    }
}
function SupprimerCandidat() {
    let cin = prompt("Entrez la CIN du candidat : ");
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
    }
}
function RechercherCandidat() {
    let nom = prompt("Entrez le nom du candidat : ");
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
function NombreTotalCandidats() {
    console.log("Nombre total de candidats : " + candidats.length);
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
    console.log("8. Afficher le nombre total de candidat "); 
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
        case 8 :
            NombreTotalCandidats();
            break;
        
    }
} while (choix !== 0);


