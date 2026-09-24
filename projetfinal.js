const prompt = require("prompt-sync")();
let choix;
let candidats = [];
function Ajoutercadidat{
    let CIN =Number(prompt("CIN : "));
    let exist = false;
    for(let i = 0; i < candidats.length ; i++){
        if(candidats[i].CIN === CIN){
            exist = true;
        }
    }
    if(exist){
        console.log("ce cadidat exist deja. ");
        return
}
    let cin = prompt("CIN : ");
    let nom = prompt("Nom : ");
    let prenom = prompt("Prénom : ");
    let partiPolitique = prompt("Parti politique : ");
    let age = Number(prompt("Age : "));
    let candidat = {
        cin : cin ;
        nom : nom ;
        prenom : prenom ;
        partiPolitique : partiPolitique;
        age : age;
        electeurs: []
    };
    codidats.push(candidat);
    console.log("Candidat ajouté avec succès.");
}

do{
    console.log("===== Gestion d'une campagne électorale =====;");
    console.log ("1. Ajouter un nouveau candidat :  ");
    console.log("2. Ajouter plusieurs candidats à la fois : ");
    choix = Number(prompt("votre choix : "));
    switch (choix){
        case 1 :
            Ajoutercadidat();
            break;
        case 2 :
            let Number = Number(prompt(""Combien de candidats voulez-vous ajouter ? ""))
            for(let i = 0; i < Number,i++){
                Ajoutercadidat();
            break;
            }
        case 3 :
            //3. Afficher la liste des candidats :
            // deux choix 1er 
            //1er Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants).
            // 2eme Filtrer et afficher uniquement les candidats d'un parti politique spécifique.
             break;
    }
    
} while (choix !== 0);