import { registerCustomer } from './repository_object'

class Order {
  constructor(data) {
    this._number = data.number
    // 특정 주문과 관련된 고객 정보를 갱신하면 같은 고객을 공유하는 주문 모두에서 갱신된 데이터를 사용하게 된다.
    this._customer = registerCustomer(data.customer)
  }

  get customer() {
    return this._customer
  }
}

class Customer {
  constructor(id) {
    this._id = id
  }

  get id() {
    return this._id
  }
}
