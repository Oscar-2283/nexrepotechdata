// enqueue: 在Array的末尾添加一個元素。
// dequeue: 移除並 return Array的第一個元素。
// front:  return Array的第一個元素但不移除。
// size:  return Array的數量。
// isEmpty: 判斷Array是否為空。
class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
