const passagers = ["FCClown", "Susmah", "Raptor","Daniel","Sophie", "Denis"];

//FOR OF
for (let passager of passagers) {
    console.log("le passager est: " + passager)
}
console.log("-------------------")

//FOR IN 
for (let i in passagers) {
    console.log("le passager est: " + passagers[i])
}
console.log("-------------------")
//boucle classique avec length
for (let i = 0; i < passagers.length; i++){
    console.log("le passager est: " + passagers[i])
}
console.log("-------------------")

//.map
const passagersTransformes = passagers.map(passager => "le passager est : "+passager)
console.log(passagersTransformes)
console.log("-------------------")
//.ForEach
passagers.forEach(passager => console.log("le passager est : "+passager))
console.log("-------------------")
//Faire comme avec map avec un ForEach
const passagersTransformes2 = []
passagers.forEach(passager => passagersTransformes2.push("le passager est : "+passager))
console.log(passagersTransformes2)
console.log("-------------------")

//Les fonctions associé au prototype Array
const passagersFilters = passagers.filter(p => p.toLowerCase().includes("d"))
console.log(passagersFilters)
console.log("-------------------")

//FindIndex juste le numero dans le tableau pas la valeur
const passagersFilters1 = passagers.findIndex(p => p.toLowerCase().includes("s"))
console.log(passagersFilters1)
console.log("-------------------")

passagers.includes("Marlene")

passagers.slice(0,2)