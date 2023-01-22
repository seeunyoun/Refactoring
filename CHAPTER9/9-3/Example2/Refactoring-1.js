class ProductionPlan {
  constructor(production) {
    // 1. 변수 쪼개기 리팩터링을 적용한다.
    // this._production = production
    this._initialProduction = production
    this._productionAccumulator = 0
    this._adjustments = []
  }

  get production() {
    // 1. 변수 쪼개기 리팩터링을 먼저 적용한다.
    // return this._production
    // return this._initialProduction + this._productionAccumulator

    // 2. calculatedProductionAccumulator 리팩터링한다.
    return this.calculatedProductionAccumulator()
  }

  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    // this._production += anAdjustment
  }
}
