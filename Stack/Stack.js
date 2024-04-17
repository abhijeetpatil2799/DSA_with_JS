class Stack {

    constructor(){
        this.size = 0
        this.top = -1 
        this.stackArr = []
    }

    push(data){
        console.log("pushing data to stack : ",data)
        this.top ++
        this.stackArr[this.top] = data
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            console.log("stack is empty")
            return 
        }else {
            const data = this.stackArr[this.top]
            console.log("removing data from stack : ",data)
            this.stackArr.splice(this.top,1)
            this.top--
            this.size--
        }
             
    }

    display(){
        this.stackArr.forEach((ele)=> console.log(ele," "))
        console.log("top pointer : ",this.stackArr[this.top])
    }

    isEmpty(){
        return this.top === -1 ? true : false
    }
}

const stack = new Stack()
stack.push(1)
stack.display()
stack.push(2)
stack.push(4)
stack.push(3)
stack.push(5)
stack.push(6)
stack.display()
stack.pop()
stack.display()
stack.push(3)
stack.display()
console.log("is empty",stack.isEmpty())
