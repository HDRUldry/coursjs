let mot1 = prompt('Mot numéro 1 ! ').toLowerCase();
let mot2 = prompt('Mot numéro 2 ! ').toLowerCase();
   

function anagramme(mot1, mot2) {

    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
        for(var i = 0; i < accent.length; i++){
        mot1 = mot1.replace(accent[i], noaccent[i]);
        mot2 = mot2.replace(accent[i], noaccent[i]);
        
    }
     

    var ana1 = mot1.split("").sort().join();
    var ana2 = mot2.split("").sort().join();

//On Vérifie si les deux chaînes ont des longueurs différentes et si les mots possendent les memes lettres

    if (ana1 === ana2) {
        alert('Les mots ' + mot1.toUpperCase() + ' et ' + mot2.toUpperCase() + " sont bien des anagrammes")

     }else if (mot1.length !== mot2.length || ana1 !== ana2) {
        alert('Les mots ' + mot1.toUpperCase() + ' et ' + mot2.toUpperCase() + " ne sont pas des anagrammes")
    }

}

console.log(anagramme(mot1, mot2))


$('#refresh').on('click', function () {
    location.reload();
});