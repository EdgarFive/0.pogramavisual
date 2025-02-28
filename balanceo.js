function esBalanceada(expresion){
    let pila = [];
    let pares = {
        ")": "(",
        "]": "[",
        "}": "{",
        ">": "<"}; //diccionario
    
    for(let caracter of expresion){
        if(["(","[","{","<"].includes(caracter)){
            pila.push(caracter);

        }else if([")","]","}",">"].includes(caracter)){
            if(pila.length === 0 || pila.pop() !== pares[caracter]){
                return false;
            }
        }
    }
    return pila.length === 0;
}

//pruebas

console.log(esBalanceada("{[()]}"));
console.log(esBalanceada("{[(])}"));
console.log(esBalanceada("<((()))>"));