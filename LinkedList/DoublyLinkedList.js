class Node {
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DLL {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    
    // display linked list 
    dislay(){
        console.log("displaying linked list")
        let current = this.head

        while(current != null){
            console.log(current.data)
            current = current.next
        }

        console.log("length is ",this.length)
    }

    // inserting at beginning 
    insertAtBeg(data){
        
        const node = new Node(data)
        console.log("inserting at beg of dll : ",node)
        if(this.head!=null){
            node.next = this.head 
            this.head.prev = node 
            this.head=node
            this.length++
        }else {
            this.head = node
            this.tail = node
            this.length++
        }
    }

    //inserting at end 
    insertAtEnd(data){
        const node = new Node(data)
        console.log("inserting at end of dll : ",node)
        if (this.head!=null){
            this.tail.next = node
            node.prev = this.tail
            this.tail=node
            this.length++
        }else {
            this.head=node
            this.tail=node
            this.length++
        }
    }

    //inserting at index 
    insertAtIndex(data,index){
        const node = new Node(data)
        console.log("inserting at index : ",index," of dll : ",node)
        if(index>this.length-1){
            console.log("index is greater than length ")
            return 
        }
        if(index===0){
            this.insertAtBeg(data)
        }else if(index === this.length){
            this.insertAtEnd(data)
        }else {
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            node.next = current.next 
            current.next.prev = node
            current.next = node 
            node.prev = current 
            this.length++
        }
    }

    //deleting from beg 
    deleteFromBeg(){
        if(this.head==null){
            console.log("dll is empty")
            return 
        }else {
            const temp = this.head
            this.head = this.head.next
            this.head.prev = null 
            console.log("deleting element from beginning",temp.data)
            this.length--
            
        }
    }

    // deleting from end 
    deleteFromEnd(){
        if(this.head==null){
            console.log("dll is empty")
            return 
        }else {
            const temp = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null 
            this.length -- 
            console.log("deleting element from end ",temp.data)
        }
    }

    // deleting from index 
    deleteFromIndex(index){
    
        if(index>this.length-1){
            console.log("index should be less than ",this.length-1)
            return 
        }else if(this.head==null){
            console.log("dll is empty")
            return 
        }else{
            if(index == 0){
                this.deleteFromBeg()
            } else if(index == this.length-1){
                this.deleteFromEnd()
            }else {
                let current = this.head
                for(let i=0;i<index;i++){
                    current = current.next

                }
                current.prev.next = current.next 
                current.next.prev = current.prev
                current.prev = null 
                current.next = null 
                console.log('deleting element from index ',index,'node: ',current.data)
                this.length--
            }
        }
    }
}

const dll = new DLL()
dll.insertAtBeg(2)
dll.insertAtBeg(1)
dll.dislay();
dll.insertAtEnd(4)
dll.dislay();
dll.insertAtIndex(8,1)
dll.dislay();
dll.insertAtIndex(6,3)
dll.dislay();
dll.deleteFromBeg()
dll.dislay()
dll.deleteFromEnd()
dll.dislay()
dll.deleteFromIndex(1)
dll.dislay()