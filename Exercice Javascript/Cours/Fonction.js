//Fonction
console.log ("Version classique avec le mot clé FUNCTION")
function afficherDeuxValeurs(param1, param2) {
   if(param1){


   
    return param1 +" "+param2
}
    return "il y a un probleme dans le systeme"

}
const reponseFunction = afficherDeuxValeurs ("Hello","World")
console.log(reponseFunction)

//Functions Flechée
console.log("Version fonction fleché")
const afficherDeuxValeursF = (param1, param2) => {
    if(param1){
 
 
    
     return param1 +" "+param2
 }
     return "il y a un probleme dans le systeme"
 
 }
 const reponseFunctionF = afficherDeuxValeursF("Hello","World")
 console.log(reponseFunctionF)

 //Fonctions SUM

 console.log("Version fonction SUM")

 function sum(a = 0, b = 0, c = 0) {
    return a + b * c
}
console.log("Le resultat est : "+ sum(2, 5, 10))

//Reecrire les fonctions

// function confirm() {
//   return true;
// }

const confirm = () => {
    return true;
  }

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => { console.log("You agreed."); },
  () => { console.log("You canceled the execution."); }
);
