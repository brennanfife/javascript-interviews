// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
class Node {
    constructor(data, next=null) {
        this.data=data
        this.next=next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// create an instance
//! let list = new LinkedList()

// INSERTING
// 1. ...before the head
// 2. ...after the tail
// 3. ...in the middle

// 1
LinkedList.prototype.insertAtBeginning = function(data) {
    let newNode = new Node(data) 
    // a newNode object is created with property data and next
    newNode.next = this.head 
    // the pointer next is assigned head pointer
    this.head = newNode 
    // head pointer needs to now point at the newNode
    return this.head
}