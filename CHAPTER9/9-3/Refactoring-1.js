// 데이터 중복임. production까지 갱신할 필요는 없기 때문에 이 부분을 리팩터링!

class ProductionPlan {
  constructor() {}

  get production() {
    // 2. 테스트 후 실패하지 않으면 코드를 수정하여 계산 결과를 직접 반환하도록 한다.
    // return this._production
    return this.calculatedProduction
  }

  // 1. applyAdjustment에서 production을 갱신하고 있으니 해당 함수를 만들어 계산하는 부분을 따로 뺀다.
  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    // 3. 옛 변수를 참조하는 모든 코드를 '죽은 코드 제거하기' 리팩터링으로 제거한다.
    // this._production += anAdjustment
  }
}
