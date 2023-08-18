class List {

    constructor() {
        this.head = null
    }

    push(data) {
        let node = new Node(data)
        /* a la propiedad head solo se le va a greagr el valor del primer elemento agregado, por eso se utiliza el if, como la propiedad se inicializa en null, esta comprobacion siempre se va a se true cuando se realice el primer push, despues nunca se volvera a ejecutar */
        if (this.head == null) {
            this.head = node
        } else {
            this.last.next = node
        }
        this.last = node
    }

    print() {
        let aux = this.head
        while (aux != null) {
            console.log(aux.data)
            aux = aux.next
        }
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let mylist = new List()
mylist.push(1)
mylist.push(3)
mylist.push(10)
mylist.push(16)