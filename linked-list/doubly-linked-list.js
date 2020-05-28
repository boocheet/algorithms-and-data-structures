/**
 * Doubly linked list is almost identical to Singly linked list, 
 * except every node has another pointer, to the prev node
 */

 class Node {
     constructor(val){
         this.val = val 
         this.next = null; 
         this.prev = null; 
     }
 }

 class DoublyLinkedList{
     constructor(){
         this.head = null;
         this.tail = null; 
         this.length = 0;
     }

     push(val){
        //  Create a new node with the value passed to the function 
        let newNode = new Node(val)
        // if the head property is null set the head and the tail to be the newly created node
        if (this.length === 0){
            // set the prev property on the newly created node to be the tail
            this.head = newNode;
            this.tail = newNode;
        } else { 
            // if not set the next property on the tail to be that node
            this.tail.next = newNode;
            newNode.prev = this.tail;
            // set the tail to be the newly created node 
            this.tail = newNode;
        }
        // increment the length 
        this.length++
        // return the doubly linked list
        return this;
     }
     pop(){
        //  if there is no head return undefined 
        if (!this.head) return undefined; 
        // store the current tail in the variable to return later
        let currentTail = this.tail 
        // if the length is 1, set the head and tail and prev tail to be null 
        if(this.length === 1){
            this.head = null; 
            this.tail = null; 
            currentTail.prev = null;
        }else {
            // update the tail to be the prev node
            this.tail = currentTail.prev
            // set the new tails next to null 
            this.tail.next = null; 
        }
        // decrement the length 
        this.length--;
        // return the value remove
        return currentTail;
     }
 }

list = new DoublyLinkedList()
list.push(99)
list.push(100)
list.push('last item')
 console.log(list)