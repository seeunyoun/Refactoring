const customerData = {
  '1920': {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
      },
      '2015': {
        '1': 70,
        '2': 63,
      },
    },
  },
  '38673': {
    name: '닐 포드',
    id: '38673',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
      },
      '2015': {
        '1': 70,
        '2': 63,
      },
    },
  },
}

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers().usage(customerID, laterYear, month)
  const earlier = getRawDataOfCustomers().usage(
    customerID,
    laterYear - 1,
    month,
  )
  return { laterAmount: later, change: later - earlier }
}

// 1. 변수 캡슐화
function getRawDataOfCustomers() {
  return customerData
}

function setRawDataOfCustomers(arg) {
  customerData = arg
}

function getCustomerData() {
  return customerData
}

// const test = (customerData[customerID].usages[year][month] = amount)
// const test = (getRawDataOfCustomers()[customerId].usages[year][month] = amount)
const test = getCustomerData().setUsage(customerID, year, month, amount)

// 2. 전체 구조를 표현하는 클래스를 정의하고, 이를 반환하는 함수를 새로 만든다.
class customerData {
  constructor(data) {
    this._data = data
  }

  // 읽는 코드를 모두 독립 함수로 추출한 다음 고객 데이터 클래스로 옮긴다.
  // 이 방법의 장점은 customerData의 모든 쓰임을 명시적인 API로 제공한다는 것이다.
  // 이 클래스만 보면 데이터 사용 방법을 모두 파악할 수 있다.
  // 하지만 읽는 패턴이 다양하면 그만큼 작성할 코드가 늘어난다.
  // 리스트-해시(list-and-hash) 데이터 구조를 쉽게 다룰 수 있는데, 이런 언어를 사용하면다면 클라이언트에 데이터를 이 형태로 넘겨주는 것도 좋다.
  usage(customerID, year, month) {
    return this._data[customerID].usage[year][month]
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount
  }

  // 깊은 복사
  get rawData() {
    return _.cloneDeep(this._data)
  }
}
