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
  // 다른 방법으로 클라이언트가 데이터 구조를 요청할 때 실제 데이터를 제공해도 된다.
  // 하지만 클라이언트가 테이터를 직접 수정하지 못하게 막을 방법이 없어서 "모든 쓰기 함수 안에서 처리한다"는 캡슐화의 핵심 원칙이 깨지는 게 문제다.
  // 따라서 가장 간단한 방법은 앞에서 작성한 rawData() 메서드를 사용하여 내부 데이터를 복제해서 제공하는 것이다.
  // 단점은 데이터 구조가 클수록 복제 비용이 커져서 성능이 느려질 수 있다는 것이다.
  const later = getRawDataOfCustomers().rawData[customerID].usage[laterYear][
    month
  ]
  const earlier = getRawDataOfCustomers().rawData[customerID].usage[
    laterYear - 1
  ][month]
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
const test = (getRawDataOfCustomers()[customerId].usages[year][month] = amount)

// 2. 전체 구조를 표현하는 클래스를 정의하고, 이를 반환하는 함수를 새로 만든다.
class customerData {
  constructor(data) {
    this._data = data
  }

  // 깊은 복사
  get rawData() {
    return _.cloneDeep(this._data)
  }
}
