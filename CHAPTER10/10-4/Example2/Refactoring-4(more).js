function rating(voyage, history) {
  return createRating(voyage, history).value
}

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
    return Math.max(result, 0)
  }

  get voyageProfitFactor() {
    let result = 2
    if (voyage.zone === '중국') {
      return (result += 1)
    }
    if (voyage.zone === '동인도') {
      return (result += 1)
    }
    result += this.voyageLengthFactor
    return result
  }

  // 7. 메서드 이름의 And는 이 메서드가 독립된 두 개의 일을 수행한다고 말한다. -> 분리시켜야 한다.
  // 10. 이제 한 가지 동작만하므로 함수 이름을 바꿔준다.
  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0
  }

  // 8. 메서드 이름의 And는 이 메서드가 독립된 두 개의 일을 수행한다고 말한다. -> 분리시켜야 한다.
  get historyLenthFactor() {
    return this.history.length > 8 ? 1 : 0
  }

  get hasChinaHistory() {
    return this.history.some((v) => '중국' === v.zone)
  }
}

class ExperiencedChinaRating extends Rating {
  constructor() {
    super()
  }

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2
    return Math.max(result, 0)
  }

  // 9. 서브클래스에도 동일하게 분리시킨다.
  // 10. 이제 한 가지 동작만하므로 함수 이름을 바꿔준다.
  get voyageLengthFactor() {
    let result = 0
    if (voyage.length > 12) {
      return (result += 1)
    }
    if (voyage.length > 18) {
      return (result -= 1)
    }
    return result
  }

  get historyLenthFactor() {
    history.length > 10 ? 1 : 0
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3
  }
}

function createRating(voyage, history) {
  if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history)
  } else {
    return new Rating(voyage, history)
  }
}
