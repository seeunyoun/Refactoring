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
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month]
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][
    month
  ]
  return { laterAmount: later, change: later - earlier }
}

// 1. 변수 캡슐화
function getRawDataOfCustomers() {
  return customerData
}

function setRawDataOfCustomers(arg) {
  customerData = arg
}

// const test = (customerData[customerID].usages[year][month] = amount)
const test = (getRawDataOfCustomers()[customerId].usages[year][month] = amount)
