class Order {
  constructor(data) {
    this.priority = data.priority
  }
}

// 클라이언트
const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority,
).length
