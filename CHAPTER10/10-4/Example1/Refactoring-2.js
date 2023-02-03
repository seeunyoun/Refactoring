// 1. 가장 먼저 airSpeedVelocity와 plumage 함수를 Bird라는 클래스로 묶어보자.
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    switch (this.type) {
      case '유럽 제비': {
        return '보통이다'
      }
      case '아프리카 제비': {
        return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다'
      }
      case '노르웨이 파랑 앵무': {
        return this.voltage > 100 ? '그을렸다' : '예쁘다'
      }
      default:
        return '알 수 없다.'
    }
  }

  get airSpeedVeleocity() {
    switch (this.type) {
      case '유럽 제비': {
        return 35
      }
      case '아프리카 제비': {
        return 40 - 2 * this.numberOfCoconuts
      }
      case '노르웨이 파랑 앵무': {
        return this.isNailed ? 0 : 10 + this.voltage / 10
      }
      default:
        return null
    }
  }
}

// 2. 종별 서브 클래스를 만든다.
class EuropeanSwallow extends Bird {}

class AfricanSwallow extends Bird {}

class NorwegianBlueParrot extends Bird {}

function plumnages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]))
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]))
}

// 1. 가장 먼저 airSpeedVelocity와 plumage 함수를 Bird라는 클래스로 묶어보자.
function plumage(bird) {
  return new Bird(bird).plumage
}

// 1. 가장 먼저 airSpeedVelocity와 plumage 함수를 Bird라는 클래스로 묶어보자.
function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity
}

// 3. 객체를 얻을 팩터리 함수를 사용하도록 수정한다.
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
