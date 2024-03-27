class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// add(data): 在Link List 的最後面添加一個新節點。
// remove(data): 移除Link List 中資料等於指定的節點。

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        return current.data;
      }
      previous = current;
      current = current.next;
    }
  }
}

let sll = new SinglyLinkedList();
sll.add(1);
sll.add(2);
console.log(sll.remove(1)); // 1
console.log(sll.remove(2)); // 2
