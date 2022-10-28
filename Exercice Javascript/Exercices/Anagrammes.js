const mot1 = prompt('Mot numéro 1 ! ').toLowerCase();
const mot2 = prompt('Mot numéro 2 ! ').toLowerCase();


function anagramme(mot1, mot2) {


    //On Vérifie si les deux chaînes ont des longueurs différentes

    if (mot1.length !== mot2.length) {
        return false;
    }

    var ana1 = mot1.split("").sort().join();
    var ana2 = mot2.split("").sort().join();


    // On compare les deux mots
    return (ana1 === ana2);
    
}

alert(anagramme(mot1, mot2))