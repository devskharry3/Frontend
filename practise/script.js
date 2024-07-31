class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//single list definition Next, we define the `singleLinkedList` class that wuill manage the nodes:

//javascript
class SinglyLinkedList{
    constructor() {
        this.head = null;
    }

    //insert at the end 
    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let  current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    //inseert at the beginning 
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    //Delete a node 
    delete(data) {

        if(!this.head) return;

        //if the node to be deleted is the head 
        if(this.head.data === data) {
            this.head
        }
    }
}