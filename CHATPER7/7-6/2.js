// TrackingInformation이 예전에는 유용했을지 몰라도 현재는 제 역할을 못하고 있으니 Shipment 클래스로 인라인 하자.
// class TrackingInformation {
// 3. TrackingInformation의 모든 요소를 Shipment로 옮긴다.
// get shippingCompany() {
//   return this._shippingCompany
// }
// set shippingCompany(arg) {
//   this._shippingCompany = arg
// }
// get trackingNumber() {
//   return this._trackingNumber
// }
// set trackingNumber(arg) {
//   this._trackingNumber = arg
// }
// get display() {
//   return `${this.shippingCompany}: ${this.trackingNumber}`
// }
// }
// 4. TrackingInformation 클래스를 삭제한다.

class Shipment {
  get trackingInfo() {
    // 3. display() 메서드를 인라인한다.
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }

  // get trackingInformation() {
  //   return this._trackingInformation
  // }

  // set trackingInformation(aTrackingInformation) {
  //   this._trackingInformation = aTrackingInformation
  // }

  // 1. 먼저 Shipment에 위임 함수를 만들고 2. 클라이언트가 이를 호출하도록 수정하자.
  // set shippingCompany(arg) {
  //   this. .shippingCompany = arg
  // }

  get shippingCompany() {
    return this._shippingCompany
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg
  }

  get trackingNumber() {
    return this._trackingNumber
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg
  }
}

// 클라이언트
// 2. 클라이언트가 위임 함수를 호출하도록 수정한다.
// aShipment.trackingInformation.shippingCompany = request.vendor
aShipment.shippingCompany = requst.vendor
