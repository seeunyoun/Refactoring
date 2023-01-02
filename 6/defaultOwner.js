let defaultOwnerData = { firstName: '마틴', lastName: '파울러' }

export function DefaultOwner() {
  return defaultOwnerData
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg
}
