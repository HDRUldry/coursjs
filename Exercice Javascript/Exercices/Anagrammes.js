const mot1 = prompt('Mot numéro 1 ! ').toLowerCase();
const mot2 = prompt('Mot numéro 2 ! ').toLowerCase();


function anagramme(mot1, mot2) {

    

    var ana1 = mot1.split("").sort().join();
    var ana2 = mot2.split("").sort().join();

//On Vérifie si les deux chaînes ont des longueurs différentes et si les mots possendent les memes lettres

    if (ana1 === ana2) {
        alert('Les mots ' + mot1 + ' et ' + mot2 + " sont bien des anagrammes")

     }else if (mot1.length !== mot2.length || ana1 !== ana2) {
        alert('Les mots ' + mot1 + ' et ' + mot2 + " ne sont pas des anagrammes")
    }

}

console.log(anagramme(mot1, mot2))
