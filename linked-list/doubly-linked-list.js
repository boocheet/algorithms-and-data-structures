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
     shift(){
        //  if length is 0 return undefined 
        if (this.length === 0) return undefined;
        // store the current head in a var
        let oldHead = this.head
        // if length is one 
        if(this.length === 1){
            // set the head to null 
            this.head = null; 
            // set the tail to null 
            this.tail = null 
        } else {
            // update the head to be the next of the old head 
            this.head = oldHead.next
            // set the head's prev to null 
            this.head.prev = null; 
            // set the old head's next to null 
            oldHead.next = null; 
        }
        // decrement the length
        this.length--;
        // return the old head 
        return oldHead;
     }
     unshift(val){
         // create a new node with the val passed fto the function 
         let newHead = new Node(val)
         // if length is 0
         if (this.length === 0){
             // set the head to tbe the new node
             this.head = newHead;
             // set the tail to be the new node 
             this.tail = newHead; 
         } else {
            // store the head node 
            this.head.prev = newHead; 
            // set the next property on the new node to be the prev head
            newHead.next = this.head; 
            // update the head to be the new node
            this.head = newHead
         }
        // increment the length
        this.length++
        // return the list
        return this;
     }
 }

list = new DoublyLinkedList()
list.push(99)
list.push(100)
list.push('last item')
list.shift()
list.unshift(99)
 console.log(list)