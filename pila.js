class pila {
//vamos a provar esto
    constructor(){
        this.item = [];
    
    }

    //Agregar el numero en la fila.
    push(){
        this.item.push(elemento);
    }

    //Eliminar elemento.
    pop(){
        if(this.item.length === 0){
            return "la pila está vacía.";

        }
        return this.item.pop();
    }

    //retorma cima.
    peek(){
        return this.item[this.item.length - 1];
    }

    isEmpty () {
        return this.item.length === 0;
    }

    mostrar() {
        console.log(this.item);
    }
}

let miPila = new pila();
miPila.push("A");
miPila.push("B");
miPila.push("C");
miPila.mostrar();
console.log("eliminar elemento:", miPila.pop());
miPila.mostrar();
console.log("cima:", miPila.peek());
console.log("¿Está vacía?", miPila.isEmpty());
miPila.pop();
miPila.pop();
miPila.mostrar();
console.log("¿Está vacía?"+ miPila.isEmpty());


