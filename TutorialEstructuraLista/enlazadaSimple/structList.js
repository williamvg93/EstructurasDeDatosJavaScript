class List {

    constructor() {
        this.head = null
        this.length = 0
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
        this.length++
    }

    print() {
        let aux = this.head
        if (aux == null) {
            aux = 'There are no data !!!'
        } else {
            while (aux != null) {
                console.log(aux.data)
                aux = aux.next
            }
        }
        return aux
    }

    getLastElement() {
        let aux = this.head
        if (aux == null) {
            aux = 'There are no data !!!'
        } else {
            while (aux != null && aux.next != null ) {
                aux = aux.next
            }
        }
        return aux            
    }

    getElementByIndex(index) {
        let aux = this.head
        let auctIndex = 0
        if (index < 0 ) {
            aux = 'Indices less than "0" are not allowed'
        } else if (aux == null) {
            aux = 'There are no data !!!'
        } else if (index >= this.length) {
            aux = 'The entered index is out of range !!!'
        } else {
            while(aux != null && auctIndex != index) {
                aux = aux.next
                auctIndex++
            }
        }
        return aux
    }

    find(element) {
        let aux = this.head
        if (aux == null) {
            aux = 'There are no data !!!'
        } else {
            let cont = 0
            while (cont < this.length) {
                if (aux.data == element) {
                    return aux
                }
                aux = aux.next
                cont++
            }
            aux = 'No results found !!!'
        }
        return aux
    }

    delete(element) {
        let aux = this.head
        if (aux == null) {return 'There are no data !!!'} 
        if (aux.data == element) {this.head = aux.next; this.length--; return aux.data}
        while (aux.next.data != element) {
            aux = aux.next
        }
        aux.next = aux.next.next
        this.length--        
    }

}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/* let mylist = new List()
mylist.push(1)
mylist.push(3)
mylist.push(10)
mylist.push(16) */