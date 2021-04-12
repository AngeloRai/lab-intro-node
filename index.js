class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
    
  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b)
    this.length = this.items.length 
  }

  get(pos) {
    if (!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos]
  }

  max() {
    if (this.items.length == 0) throw new Error('EmptySortedList');
    return this.items[this.items.length -1]
  }

  min() {
    if (this.items.length == 0) throw new Error('EmptySortedList');
    return this.items[0]
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length == 0) throw new Error('EmptySortedList');
    return this.sum(this.items) / this.items.length
  }
}

module.exports = SortedList;
