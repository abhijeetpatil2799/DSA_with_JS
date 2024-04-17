class Node {
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

class SLL {
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
    }

    // inserting an item to list (by default at end)
    insert(data){
        console.log("inserting data to linked list: ",data)
        const node = new Node(data)
        if(this.head==null){
            this.head=node
            this.tail=this.head
            console.log("data inserted as head")
            this.length ++ 
        }else {
            this.tail.next = node
            this.tail = node
            console.log("data inserted at end of the list")
            this.length ++ 
        }
    } 

    insertAtBeg(data){
        console.log("inserting data at beginning to linked list: ",data)
        const node = new Node(data)
        if(this.head==null){
            this.head=node
            this.tail=this.head
            console.log("data inserted as head")
            this.length ++ 
        }else {
            node.next = this.head
            this.head = node
            console.log("data inserted at beginning of the list")
            this.length ++ 
        }
    }

    insertAtIndex(data,index){
        console.log("inserting element at index ",index,"to linked list: ",data)
        const node = new Node(data)
        if(index>this.length-1){
            console.log("index is greater than length ")
            return
        }
        if(index==0){
            this.insertAtBeg(data)
        }
        else if(index==this.length-1){
            this.insert(data)
        }else {
            let counter = 0 
            let current = this.head
            while(counter !=index-1){
                current = current.next
                counter ++
            }
            node.next = current.next 
            current.next = node
            this.length++
        }
        
    }

    

    // deleting end of the data (pop operation)
    deleteLast(){
        if(this.length===0){
            console.log("linked list is empty")
            return
        }else if(this.length===1){
            const node = this.head
            console.log("linked list has only head deleting : ",node)
            this.head = null
            this.length--
            return node
        }else {
            console.log("deleting last element of linked list")
            let current = this.head
            for(let i=0;i<this.length-2;i++){
                current = current.next
            }
            const node = current.next
            current.next = null 
            this.tail = current
            console.log("node deleted : ",node)
            this.length--
            return node
        }
    }

    // deleting first node of the linked list 
    deleteFirst(){
        if(this.head==null){
            return 
        }
        if(this.head.next == null){
            const node = this.head
            this.head=null 
            console.log("list only has one element deleting head: ",node)
            this.length--
            return node
        }else {
            const node = this.head
            this.head= this.head.next
            node.next = null 
            this.length--
            console.log("deleted first element of node",node)
            return node
        }
    }

    deleteAtIndex(index){
        if(index==0){
            console.log('deleting at index 0', this.deleteFirst())
        }else if(index==this.length){
            console.log('deleting last element of linked list',this.deleteLast())
        }else {
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            const node = current.next
            current.next = node.next 
            node.next = null
            console.log("deleted node at index ",index,"node : ",node)
            this.length--
            return node
        }
    }
}

let sll = new SLL()
sll.insert(1)
sll.insert(3)
sll.insertAtBeg(4)
sll.insertAtIndex(8,1)
sll.insertAtIndex(8,0)
sll.dislay()
sll.deleteAtIndex(1)
sll.dislay()
sll.deleteLast()
sll.dislay()
sll.deleteFirst()
sll.dislay()