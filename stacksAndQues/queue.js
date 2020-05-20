class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.fisrt = null; 
    this.last = null;
    this.size = 0;
  }

  //adds a val to list
  enqueue(val){
    //create a new node using the val passed to the func
    let newNode = new Node(val);
    // if there are no nodes in queue, set this node to be the first and last el in the queue
    if(!this.first){
      this.first = newNode; 
      this.last = newNode; 
      //else set the next el on the cur last to be that node and then set the last el of the queue to be that node
    } else {
      this.last.next = newNode; 
      this.last = newNode; 
    }
    // increment size by 1
    return ++this.size; 

  }

  //removes a val from the lis
  dequeue(){
    //if there is no first el return null 
    if(!this.first) return null;
    //store the first property in a variable 
    let temp = this.first; 
    //if the first is the same as the last(check if there is only 1 node)
    if(this.first === this.last){
      //if so set the first and last to be null 
      this.last = null; 

    }
    // if there is more than 1 node set the first el to be the next el of the first
    this.first = this.first.next; 
    //decrement the size by 1
    this.size--; 
    return temp.value
  }

}