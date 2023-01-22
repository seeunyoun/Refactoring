class ProductionPlan {
  constructor() {}

  get production() {
    return this._production
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    this._production += anAdjustment
  }
}
