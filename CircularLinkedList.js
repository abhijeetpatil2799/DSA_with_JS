class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class CLL {
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0
    }


    //displaying circular linked list 
    display(){
        let current = this.head
        for(let i=0;i<this.length;i++){
            console.log(current.data)
            current=current.next
        }
        console.log("length : ",this.length)
        console.log("head: ",this.head.data)
        console.log("tail: ",this.tail.data)
    }

    //inserting element at beg 
    insertAtBeg(data){
        const node = new Node(data)
        console.log("inserting element at beginning ",node)
        if(this.head==null){
            this.head=node
            this.tail=node
            this.length++
        }else {
            this.tail.next = node 
            node.next = this.head
            this.head=node
            this.length++
        }
    }

    //inserting at end 
    insertAtEnd(data){
        const node = new Node(data)
        console.log("inserting at end of CLL :",node)
        if(this.head==null){
            this.head=node
            this.tail=node
            this.length++   
        }else {
            this.tail.next=node
            node.next=this.head
            this.tail=node
            this.length++
        }
    }

    //inserting at index 
    insertAtIndex(data,index){
        const node = new Node(data)
        console.log("inserting element : ",node," at index : ",index)
        if(index==0){
            this.insertAtBeg(data)
        }else if (index==this.length-1){
            this.insertAtEnd(data)
        }else {
            if(this.head==null){
                this.head=node
                this.tail=node
                this.length++
            }else {
                let current = this.head
                for(let i=0;i<index-1;i++){
                    current=current.next
                }
                node.next = current.next
                current.next = node
                this.length++
            }
        }
    }
    // deleting at beg 
    deleteAtBeg(){
        console.log("deleting at beginning of cll")
        if(this.head==null){
            console.log("CLL is empty")
            return
        }else {
            let temp = this.head
            this.head=this.head.next
            this.tail.next = this.head
            temp.next=null
            this.length--
        }
        
    }

    //delete at end 
    deleteAtEnd(){
        console.log("deleting at end of cll")
        if(this.head==null){
            console.log("CLL is empty")
            return 
        }else {
            if(this.length==1){
                this.deleteAtBeg()
            }else {
                let current = this.head
                let temp = this.tail
                for(let i=0;i<this.length-2;i++){
                    current=current.next
                }
                console.log('current ',current)
                current.next=this.head
                temp.next=null
                this.tail=current
                this.length--
                
            }
            
        }
    }

    //delete at index 
    deleteAtIndex(index){
        console.log('deleting element from index : ',index)
        if(index==0){
            this.deleteAtBeg()
        }else if (index==this.length-1){
            this.deleteAtEnd()
        }else {
            if(this.head==null){
                console.log("CLL is empty")
                return 
            }else {
                let current=this.head
                for(let i=0;i<index-1;i++){
                    current=current.next
                }
                let temp = current.next
                current.next= temp.next
                temp.next=null 
                this.length--
            }
        }
    }
}



let cll = new CLL()
cll.insertAtBeg(1)
cll.insertAtBeg(2)
cll.insertAtBeg(5)
cll.insertAtBeg(6)
cll.display()
cll.insertAtEnd(3)
cll.display()
cll.insertAtIndex(4,1)
cll.display()
cll.deleteAtBeg()
cll.display()
cll.deleteAtEnd()
cll.display()
cll.deleteAtIndex(1)
cll.display()