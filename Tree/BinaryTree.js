class TreeNode {
constructor(data){
    this.data = data 
    this.left = null 
    this.right = null
}
}

class Tree {
    constructor(){
        this.root = null 
    }
    insert(data){
        console.log("inserting element to tree: ",data)
        const node = new TreeNode(data)
        if(this.root==null){
            this.root = node
        }else {  
            this.insertNode(this.root,node)
        }
    }

    insertNode (node, newNode){
        if(newNode.data < node.data){
            if(node.left == null ){
                node.left = newNode
            }else {
                this.insertNode(node.left,newNode)
            }
        } else if(newNode.data > node.data){
            if(node.right == null ){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            } 
        }
       
    }

    findMax(node){
        if(node.right == null){
            return node
        }else {
            return this.findMax(node.right)
        }
    }
    
    findMin(node){
        if(node.left === null ){
            return node
        }else {
            return this.findMin(node.left)
        }
    }

    delete(data){
        console.log("deleting data",data)
        if(this.root === null){
            console.log("tree is empty")
        }else{
            if(this.root == data && this.root.left == null && this.root.right == null){
                this.root = null 
            }else{
                this.deleteElement(data,this.root)
            }
           
        }
    }

    deleteElement(data,node){
        if(node.data==data){
            //deleting leaf node
            if(node.left == null && node.right == null ){
                node = null
                return node
            } 
            //deleting element with one child
            else if(node.left == null){
                node = node.right
                return node
            } else if(node.right == null){
                node = node.left
                return node
            }

            //deleting element with both child 
            // general statergy is find max of left subtree and replace with subtree's root

           else if(node.left != null && node.right !=null){
                const temp = this.findMax(node.left)
                node.data = temp.data
                node.left = this.deleteElement(data,node.left)
                return node
            }
        }
        else if(data < node.data ){
            node.left =  this.deleteElement(data,node.left)
            return node
        }else if (data > node.data){
            node.right =  this.deleteElement(data,node.right)
            return node
        }
    }

    displayInorder(node){
        if(node!==null){
            this.displayInorder(node.left)
            console.log(node.data)
            this.displayInorder(node.right)
        }
    }

    displayPreorder(node){
        if(node!=null){
            console.log(node.data)
            this.displayInorder(node.left)
            this.displayInorder(node.right)
        }
    }

    displayPostorder(node){
        if(node!=null){
            this.displayInorder(node.left)
            this.displayInorder(node.right)
            console.log(node.data)
        }
    }

    displayTreeDesc(){
    console.log("root ele: ",t.root)
    console.log("inorder:")
    t.displayInorder(t.root)
    console.log("preorder:")
    t.displayPreorder(t.root)
    console.log("postorder:")
    t.displayPostorder(t.root)
    console.log("max ele: ",t.findMax(t.root))
    console.log("min ele:",this.findMin(t.root))
    }
}

const t = new Tree()
t.insert(4)
t.insert(9)
t.insert(1)
t.insert(11)
t.insert(6)
t.insert(2)
t.insert(3)
t.insert(32)
t.insert(67)
t.insert(5)
t.insert(7)
t.insert(90)
t.delete(90)
// console.log("root",t.root.right)
t.displayTreeDesc()
