function plumnages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]),
  )
}

function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, airSpeedVelocity(b)]),
  )
}

function createBird(bird) {
  switch (this.type) {
    case '유럽 제비': {
      return new EuropeanSwallow(bird)
    }
    case '아프리카 제비': {
      return new AfricanSwallow(bird)
    }
    case '노르웨이 파랑 앵무': {
      return new NorwegianBlueParrot(bird)
    }
    default:
      return new Bird(bird)
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    return '알 수 없음'
  }

  get airSpeedVeleocity() {
    return null
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super()
  }

  get plumage() {
    return '보통이다.'
  }

  get airSpeedVeleocity() {
    return 35
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super()
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다'
  }

  get airSpeedVeleocity() {
    return 40 - 2 * this.numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super()
  }

  get plumage() {
    return this.voltage > 100 ? '그을렸다' : '예쁘다'
  }

  get airSpeedVeleocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10
  }
}

// 8. plumage와 airSpeedVelocity 함수는 인라인 시켰다.
// function plumage(bird) {
//   return new Bird(bird).plumage
// }

// function airSpeedVelocity(bird) {
//   return new Bird(bird).airSpeedVelocity
// }
