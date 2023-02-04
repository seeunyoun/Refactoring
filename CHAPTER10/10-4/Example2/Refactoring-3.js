function rating(voyage, history) {
  // 4. 생성자를 호출하는 코드를 모두 찾아서 이 팩터리 함수를 대신 사용하도록 한다.
  return createRating(voyage, history).value
}

// 1. 다형성을 적용하기 위해 클래스를 만들어 '여러 함수 클래스로 묶기' 리팩터링을 하자.
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage
    this.history = history
  }

  get value() {
    const vpf = voyageProfitFactor(voyage, history)
    const vr = voyageRisk(voyage)
    const chr = captainHistoryRisk(voyage, history)
    if (vpf * 3 > vr + chr * 2) {
      return 'A'
    } else {
      return 'B'
    }
  }

  get voyageRisk() {
    let result = 1
    if (voyage.length > 4) {
      return (result += 2)
    }
    if (voyage.length > 8) {
      return (result += voyage.length - 8)
    }
    if (['중국', '동인도'].includes(voyage.zone)) {
      return (result += 4)
    }
    return Math.max(result, 0)
  }

  get captainHistoryRisk() {
    let result = 1
    if (history.length < 5) {
      return (result += 4)
    }
    result += history.filter((v) => v.profit < 0).length
    // 5. 서브클래스에 이 메서드를 오버라이드 한다.
    // if (voyage.zone === '중국' && hasChina(history)) {
    //   return (result -= 2)
    // }
    return Math.max(result, 0)
  }

  // 6. 조건부 블록 전체를 함수로 추출한다.
  get voyageProfitFactor() {
    let result = 2
    if (voyage.zone === '중국') {
      return (result += 1)
    }
    if (voyage.zone === '동인도') {
      return (result += 1)
    }
    result += this.voyageAndHistoryLengthFactor
    return result
  }

  // 6. 조건부 블록 전체를 함수로 추출한다.
  get voyageAndHistoryLengthFactor() {
    let result = 0
    if (voyage.zone === '중국' && hasChina(history)) {
      result += 3
      if (history.length > 10) {
        return (result += 1)
      }
      if (voyage.length > 12) {
        return (result += 1)
      }
      if (voyage.length > 18) {
        return (result -= 1)
      }
    } else {
      if (history.length > 8) {
        return (result += 1)
      }
      if (voyage.length > 14) {
        return (result -= 1)
      }
    }
    return result
  }

  get hasChinaHistory() {
    return this.history.some((v) => '중국' === v.zone)
  }
}

// 2. 변형 동작을 담을 빈 서브클래스를 만들자.
class ExperiencedChinaRating extends Rating {
  constructor() {
    super()
  }

  // 5. 서브클래스에 이 메서드를 오버라이드 한다.
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2
    return Math.max(result, 0)
  }
}

// 3. 적절한 변형 클래스르 반환해줄 팩터리 함수를 만든다.
function createRating(voyage, history) {
  if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history)
  } else {
    return new Rating(voyage, history)
  }
}
