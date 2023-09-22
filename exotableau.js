"use strict";

let names=[]; // créer un tableau vide names 
names.push("Vincent","Paul","Arthur"); // ajouter "Vincent", "Paul" et "Arthur" dans le tableau en utilisant la méthode push

names.forEach(name =>{ // à la fin de chaque prénom
    name +=" " + "va a la peche "; // ajouter "va à la pêche"
    console.log(name) // afficher les éléments
})