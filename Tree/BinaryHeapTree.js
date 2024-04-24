class BinaryHeap {
    constructor(){
        this.binaryHeap = [100,19,36,17,3,25,1,2,7]
    }
    
    // return parent index and value of provided index element
    getParent(index){
        if(index>this.binaryHeap.length-1){
            console.log("index is greater than length")
            return
        }else {
            const parentIdx = Math.floor((index-1)/2)
            return {
                index: parentIdx,
                value: this.binaryHeap[parentIdx]
            }
        }
    }


    //return left element index and value of provided index element
    getLeft(index){
        if(index > this.binaryHeap.length-1){
            console.log("index is greater than length")
        }else {
            const leftIdx = index * 2 + 1
            return {
                index: leftIdx,
                value: this.binaryHeap[leftIdx]
            }
        }
    }

    //return right element index and value of provided index element
    getRight(index){
        if(index > this.binaryHeap.length-1){
            console.log("index is greater than length")
        }else {
            const rightIdx = index * 2 + 2
            return {
                index: rightIdx,
                value: this.binaryHeap[rightIdx]
            }
        }
    }

    insert(element){
        this.binaryHeap.push(element)
        this.bubbleUp()
    }

    // to heapify in max binary heap
    bubbleUp(){
        let elementIdx = this.binaryHeap.length-1     
                               // new element is pushed at last location of array
        
        while(elementIdx>0){
            const ele = this.binaryHeap[elementIdx]  
            const parentObj = this.getParent(elementIdx)
            if(this.binaryHeap[elementIdx]<=parentObj.value) break   
            this.binaryHeap[elementIdx] = parentObj.value   
            this.binaryHeap[parentObj.index] = ele       // comparing this new element with its parent if it is greater than parent then moving it to parents location 
             
            elementIdx = parentObj.index                                        // now to continue process changing element index to parent index to continue flow
        }
        
    }

    // delete wiil delete root element 
    // 1. copy last element to the root
    // 2. check heap standard and push down copied element to appropriate place

    delete(){
        const firstElem = this.binaryHeap[0]
        const lastElem = this.binaryHeap[this.binaryHeap.length-1]

        if(firstElem && lastElem){
            this.binaryHeap[0] = lastElem                                //1. swap last element to root
            this.binaryHeap.splice(this.binaryHeap.length-1,1)             //2. delete last element
            let idx = 0

            while(idx != undefined ){
                const ele = this.binaryHeap[idx]                                                                                    // get element of current index (initially 0 which is swapped just now)
                
                if(this.binaryHeap[idx] < this.getLeft(idx).value || this.binaryHeap[idx] < this.getRight(idx).value){              // check if which element is greater among current node, left or right and swap 
                    const eleToSwap = this.getLeft(idx).value > this.getRight(idx).value ? this.getLeft(idx) : this.getRight(idx)
                    this.binaryHeap[idx] = eleToSwap.value
                    this.binaryHeap[eleToSwap.index] = ele
                    idx = eleToSwap.index                                                                                           // continue process until idx is undefined i.e. it will not have either left or right child
                }
                 else {
                    break
                }
            }
            }
            
    }

    display(){
        console.log(this.binaryHeap)
    }
}

const bh = new BinaryHeap()
bh.insert(87)

bh.display()
console.log(bh.getLeft(1))
console.log(bh.getRight(1))
console.log(bh.getParent(1))
bh.delete()
bh.display()
