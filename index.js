class NodeS {
    constructor(value, next = null, prev = null){
        this.value = value,
        this.next = next,
        this.prev = prev
    }
};

class DoubleLinkedList {
    constructor(){
        this.head = null,
        this.tail = null
    }
};

DoubleLinkedList.prototype.addToHead = function(value){
    let NewNode = new NodeS(value);

    if(this.head ===  null){
        this.head = NewNode;
        this.tail = NewNode;
    }else{
        let it = this.head;   
        it.prev = NewNode;
        NewNode.next = it;
        this.head = NewNode;
    }
    return this.head;
};

DoubleLinkedList.prototype.addToTail = function(value){
    let NewNode = new NodeS(value);
    
    if(this.tail === null){
        this.head = NewNode;
        this.tail = NewNode;
    }else{
       let it = this.head; 
       while(it != null){
           it = it.next;
       }
       NewNode.prev = it;
       it.next = NewNode;
       this.tail = NewNode;
    }
    return this.tail;
}

DoubleLinkedList.prototype.contains = function(value){
    let it = this.head;
    while(it != null){
        if(it.value === value){
            return true;
        }
        it = it.next;
    }
    return false;
}

DoubleLinkedList.prototype.addBeforeValue = function(value, valueS){
    let NewNode = new NodeS(value);

    if(this.contains(valueS)){
        if(this.head.value === valueS){
            this.addToHead(value);
        }else{
            let it = this.head;
            while(it !== null && it.next !== null){
                if(it.next.value === value){
                    NewNode.next = it.next;
                    NewNode.prev = it;
                    it.next.prev = NewNode;
                    it.next = NewNode
                }
                it = it.next;
            }
        }     
    }else{
        console.log('no contiene el valor a buscar');
    }
}

DoubleLinkedList.prototype.addAfterValue = function(value,valueS){
    let NewNode = new NodeS(value);

    if(this.contains(valueS)){
        if(this.tail.value === value){
            this.addToTail(value);
        }else{
            let it = this.head;
            while(it !== null){
                if(it.value === value){
                    NewNode.next = it.next;
                    NewNode.prev = it;
                    it.next.prev = NewNode;
                    it.next = NewNode;
                    break;
                }
                it = it.next; 
            }
        }
    }else{
        console.log('no contiene el valor a buscar');
    }
}

DoubleLinkedList.prototype.displayAll = function(){
    let it = this.head;
    while(it != null){
        console.log(it.value);
        it = it.next;
    }
}

DoubleLinkedList.prototype.deleteOne(value) = function{
    if(this.contains(value)){
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            let it = this.head;
            while(it != null){
                if(it.value === value){
                    it.prev.next = it.next;
                    it.next.prev = it.prev;
                }
                if(it.value === value && it == this.tail){
                    it.prev.next = null;
                }
                it = it.next;
            }
        }
    }else{
        console.log('no contiene el valor a buscar');
    }
}

let DLS = new DoubleLinkedList();
