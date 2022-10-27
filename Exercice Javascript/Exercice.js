const answer = prompt('Quel est votre douleur ?')
const answerLower = answer.toLowerCase();

switch (answerLower) {

    case "abdomen":
        alert("vous avez l'appendicite")
        break

    case "gorge":
        const fievre = prompt('Avez vous de la fievre ?')
        const fievreLower = fievre.toLowerCase();

        if (fievreLower === 'oui') {

            alert("vous avez un rhume")

        } else {

            alert("vous avez un mal de gorge")

        }

    case "aucune":
        const toux = prompt('Avez vous de la toux ?')
        const touxLower = toux.toLowerCase();

        if (touxLower === 'oui') {

            const fievre1 = prompt('Avez vous de la fievre ?')
            const fievre1Lower = fievre1.toLowerCase();
            if (fievre1Lower === 'oui') {

                alert("vous avez un rhume")

            } else {

                alert("vous avez un refroidissement")

            }

        } else {

            alert("vous avez rien")
        }


}
