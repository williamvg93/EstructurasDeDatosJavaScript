class DoubleLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

/*     comprobar() {
        console.log(this.head)
    } */

    addToHead(data) {
        const newNode = new Node(data, this.head, null)
        if(this.head) {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
    }

    print() {
        let current = this.head
        if (current == null) {
            return 'There are no data !!!'
        } else {
            while (current) {
                console.log(current)
                current = current.next
            }
        }
    }

    reversePrint() {
        let current = this.tail
        if (current == null) {
            return 'There are no data!!!'
        } else {
            while (current) {
                console.log(current)
                current = current.next
            }
        }
    }


}

class Node {
    constructor(data, next, prev) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}