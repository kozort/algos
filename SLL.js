class Node {
    constructor(valu) {
        this.value = valu;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this

    }
    removeFront() {
        if (this.head == null){
            return null
        }
        this.head = this.next;
        this.next = null
        return this
    }
    front() {
        if (this.head == null){
            return null
        }
        return this.head.value
    }
}

