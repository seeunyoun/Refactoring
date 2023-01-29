// 물리적으로 똑같은 고객 객체를 사용하고 싶다면 유일한 객체를 저장해둘 곳이 있어야 한다.
// -> 저장소 객체(repository object)를 사용한다.
let _repositoryData

export function initialize() {
  _repositoryData = {}
  _repositoryData.customers = new Map()
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id)) {
    return _repositoryData.customers.set(id, new Customer(id))
  }
  return findCustomer(id)
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id)
}
