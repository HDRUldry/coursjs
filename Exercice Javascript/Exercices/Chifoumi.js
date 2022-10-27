//Fonction pour la comparaison

function comparer(choix1, choix2) {
    if (choix1 === choix2) {
      return 'Egalité !';
    } else if (choix1 === 'pierre') {
      if (choix2 === 'ciseaux') {
        return 'pierre';
      } else if (choix2 === 'feuille') {
        return 'feuille';
      }
    } else if (choix1 === 'feuille') {
      if (choix2 === 'pierre') {
        return 'feuille';
      } else if (choix2 === 'ciseaux') {
        return 'ciseaux';
      }
    } else if (choix1 === 'ciseaux') {
      if (choix2 === 'pierre') {
        return 'pierre';
      } else if (choix2 === 'feuille') {
        return 'ciseaux';
      }
    }
  }
  // début de partie
  alert('Bonjour bienvenue sur le jeux du chifoumi en ligne')
  const nomUtilisateur = prompt('Quel est ton prenom ?')
  const choixUtilisateur = prompt('Veuillez choisir votre signe ?').toLowerCase();

  var choixOrdi = Math.random();
  if (choixOrdi < 0.34) {
    choixOrdi = 'pierre';
  } else if(choixOrdi <= 0.67) {
    choixOrdi = 'feuille';
  } else {
    choixOrdi = 'ciseaux';
  }
  alert('Ordinateur : '+ choixOrdi);
//   alert(nomUtilisateur +':'+ choixUtilisateur);
  let resultat = comparer(choixUtilisateur, choixOrdi);

if (choixUtilisateur===choixOrdi)
{

    alert(resultat)
    location.reload();

}else{

    alert('Gagnant : ' + resultat);
    location.reload();

}