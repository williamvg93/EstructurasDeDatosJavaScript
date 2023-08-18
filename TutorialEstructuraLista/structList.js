class List {

    constructor() {
        this.head = null
    }

    push(data) {
        let node = new Node(data)
        /* a la propiedad head solo se le va a greagr el valor del primer elemento agregado, por eso se utiliza el if, como la propiedad se inicializa en null, esta comprobacion siempre se va a se true cuando se realice el primer push, despues nunca se volvera a ejecutar */
        this.last = node
        if (this.head == null) {
            this.head = node
        } else {
            this.last.next = node
        }
    }

}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}