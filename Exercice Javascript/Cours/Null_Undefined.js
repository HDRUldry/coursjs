console.log ("On est jeudi")

let maVariable = 0;
let maVariableNull = null;
let maVariableUndefined

console.log(typeof maVariableNull)//Bug JS
if(maVariableNull=== null){
    console.log ("Je suis null")
}

if(maVariableUndefined === undefined){
    console.log ("Je suis undefined")
}

if (maVariable || maVariable === 0) {
    console.log ("Je rentre dans ma variable")
}