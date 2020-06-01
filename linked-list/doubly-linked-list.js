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
     print(){
        let arr = []
        let current = this.head
        while(current){
          arr.push(current.val)
          current = current.next
        }
        console.log(arr)
      }

     get(index){
        // if index is < 0 or >= the length return null 
        if (index < 0 || index >= this.length) return null;
        let half = this.length / 2; 
        let current = index <= half ? this.head : this.tail;
        // if index <=  half the length of the list 
        if (index <= half){
            // loop through the list starting from the head and loop towards the middle
            for(let i =0; i < half; i++){
                if (index === i){
                    // return the nod once it is found
                    return current
                }
                current = current.next
            }
        } else {// if the index is > half the length of the list
            //loop through the list starting from the tail and loop towards the middle
            for(let i = this.length -1; i > half; i--){
                if(index === i) return current;// return node once it's found
                current = current.prev;
            }
        }

     }
     set(index, val){
         //create a variable which is the result of the get method
         //at the index passed to the function
         let result = this.get(index)
        //if the get method returns a valid node
        if(result != null){
            //set the value of that node to be the value passed to the function 
            result.val = val; 
            //return true
            return true
        } 
        //otherwise return false
        return false;
     }
     insert(index, val){
        //if index is < 0 or >= length return false
        if(index < 0 || index >= this.length) return false
        //if index is 0 unshift
        if(index === 0) return this.unshift(val)
        //if index is the same as length push 
        if(index === this.length) return this.push(val)
        // use get method to access the index -1 
        let prevNode = this.get(index - 1)
        // console.log('found node', prevNode)
        let afterNode = prevNode.next
        let newNode = new Node(val)
        // set the next and prev properties on the correct nodes to link 
        // everything together
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = afterNode
        afterNode.prev = newNode
        // increment this.length
        this.length++
        //return true
        return true
     }
     remove(index){
         //if index < 0 or >= length return undefined
         if(index < 0 || index >= this.length) return undefined
         //if index is 0, shift
         if(index === 0) return this.shift();
         //if index is length -1, pop
         if(index === this.length -1) return this.pop()
         // use get method to get the item to be removed
         let nodeToBeRemoved = this.get(index)
         let prevNode = nodeToBeRemoved.prev
         let afterNode = nodeToBeRemoved.next
         //update the next and prev var to remove found node from list
         prevNode.next = afterNode
         afterNode.prev = prevNode
         //set next and prev to null on the found node
         nodeToBeRemoved.next = null 
         nodeToBeRemoved.prev = null 
         // decrement the length
         this.length--
         //return the removed node
         return this; 
     }
 }

list = new DoublyLinkedList()
list.push('harry')
list.push('Potter')
list.push('And')
list.push('The')
list.push('James')
list.push('last item')
list.shift()
list.unshift(99)
// console.log(list.set(4, 'test2'))
list.insert(3, 'Hermione')
console.log(list.print())
list.remove(3)
console.log(list.print())