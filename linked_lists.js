class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Adds a node to the end of a linked list
    append(value) {
        const node = new Node(value);
        let runner = this.head;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        while (runner) {
            if (!runner.next) {
                runner.next = node;
                this.tail = node;
                return this;
            }
            else {
                runner = runner.next;
            }
        }
    }

    //Appends values of a linked list into an easily readable string
    toString() {
        let str = "";
        let runner = this.head;
        while (runner) {
            str += runner.value.toString() + ", ";
            runner = runner.next;
        }
        return str;
    }

    //Adds a node to the beginning of a linked list
    prepend(value) {
        const node = new Node(value);
        let runner = node;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        else {
            runner.next = this.head;
            this.head = runner;
            return this;
        }
    }

    //Returns the last node of a linked list
    last() {
        return this.tail;
    }
}

// const linkedList = new LinkedList()
// linkedList.append(1)
// linkedList.append(99)
// linkedList.prepend(420)
// console.log(linkedList.toString())
// console.log(linkedList.last())

export {LinkedList, Node}