const prompt = require("prompt-sync")();
let choix;
let candidats = [];
function Ajoutercadidat() {
    let cin = Number(prompt("CIN : "));
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
function voter() {
    let cinelecteur = Number(prompt("Ajouter votre CIN : "));
    // Vérifier si l'électeur a déjà voté
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cinelecteur) {
                console.log("Vous avez deja vote.");
                return;
            }
        }
    }
    // Demander la CIN du candidat
    let cincandidat = Number(prompt("CIN du candidat : "));
    // Chercher le candidat
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cincandidat) {
            candidats[i].electeurs.push(cinelecteur);
            console.log("Vote enregistré");
            return;
        }
    }
    // Le candidat n'existe pas
    console.log("Candidat introuvable.");
}
function Afficher() {
    // deux choix selon
    let choix2 = Number(prompt("1 selon le nombre de vote : "));

    // selon le nombre de vote
    switch (choix2) {
        case 1:
            for (let i = 0; i < candidats.length; i++) {

            }
            break;
    }

    // 2 selon le parti politique
}
do {
    console.log("===== Gestion d'une campagne électorale =====");
    console.log("1. Ajouter un nouveau candidat");
    console.log("2. Ajouter plusieurs candidats à la fois");
    console.log("3. Voter pour un candidat");
    console.log("4. Afficher la liste des candidats");
    choix = Number(prompt("Votre choix : "));
    switch (choix) {
        case 1:
            Ajoutercadidat();
            break;
        case 2:
            let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

            for (let i = 0; i < nombre; i++) {
                Ajoutercadidat();
            } 
            break;
        case 3:
            voter();
            break;
        case 4:
            Afficher();
            break;
    }
} while (choix !== 0);