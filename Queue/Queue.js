class Queue {
  constructor() {
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.queArr = [];
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  enQueue(data) {
    console.log("inserting data in queue ", data);
    if (this.isEmpty()) {
      this.front = this.rear = 0;
      this.queArr[this.rear] = data;
      this.size++;
    } else {
      this.rear++;
      this.queArr[this.rear] = data;
      this.size++;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    } else {
      const elementToremove = this.queArr[this.front];
      console.log("removing element from front, ", this.queArr[this.front]);
      this.queArr.splice(this.front, 1);
      this.rear--;
      this.size--;
      return elementToremove;
    }
  }

  display() {
    console.log("QUEUE: ");
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.queArr[i]);
    }
    console.log("front : ", this.queArr[this.front]);
    console.log("rear: ", this.queArr[this.rear]);
    console.log("size :", this.size);
  }
}

module.exports = {
  Queue,
};

const q = new Queue();
q.display();
q.enQueue(1);
q.enQueue(5);
q.enQueue(7);
q.enQueue(4);
q.enQueue(2);
q.enQueue(6);
q.display();
q.deQueue();
q.display();
q.deQueue();
q.deQueue();
q.display();
