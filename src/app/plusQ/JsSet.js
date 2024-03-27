// add: 向Set中添加一個新元素。如果元素已經存在，則不會再加。
// has: 檢查Set中是否包含指定的元素。
// delete: 從Set中刪除指定的元素。
// size: 返回Set中元素的數量。
// values: 返回Set中所有元素的陣列。

class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  values() {
    return this.collection;
  }
}

let set = new MySet();
set.add(1);
set.add(2);
console.log(set.values()); // [1, 2]
console.log(set.has(1)); // true
console.log(set.size()); // 2
set.delete(1);
console.log(set.values()); // [2]
