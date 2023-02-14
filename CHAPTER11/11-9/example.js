function score(candidate, medicalExam, scoringGuide) {
  let result = 0
  let healthLevel = 0
  let highMedicalRiskFlag = false

  if (medicalExam.isSmoker) {
    healthLevel += 10
    highMedicalRiskFlag = true
  }

  let certificationGrade = 'regular'
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = 'low'
    result -= 5
  }

  result -= Math.max(healthLevel - 5, 0)
  return result
}

// -----------------------------------------------------------------------------

// 1. 시작은 빈 클래스를 만들고 이 함수를 그 클래스로 옮기는 일부터다.
class Scorer {
  execute(candidate, medicalExam, scoringGuide) {
    let result = 0
    let healthLevel = 0
    let highMedicalRiskFlag = false

    if (medicalExam.isSmoker) {
      healthLevel += 10
      highMedicalRiskFlag = true
    }

    let certificationGrade = 'regular'
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
      certificationGrade = 'low'
      result -= 5
    }

    result -= Math.max(healthLevel - 5, 0)
    return result
  }
}

function score(candidate, medicalExam, scoringGuide) {
  return new Scorer().execute(candidate, medicalExam, scoringGuide)
}

// -----------------------------------------------------------------------------

// 1. 시작은 빈 클래스를 만들고 이 함수를 그 클래스로 옮기는 일부터다.
class Scorer {
  // 2. 명령이 받는 인수를 생성자로 옮기자. (= 매개변수를 옮기자.)
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate
    this._medicalExam = medicalExam
    this._scoringGuide = scoringGuide
  }

  execute() {
    let result = 0
    let healthLevel = 0
    let highMedicalRiskFlag = false

    if (this._medicalExam.isSmoker) {
      healthLevel += 10
      highMedicalRiskFlag = true
    }

    let certificationGrade = 'regular'
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      certificationGrade = 'low'
      result -= 5
    }

    result -= Math.max(healthLevel - 5, 0)
    return result
  }
}

// 3. execute 메서드를 호출하는 곳에서도 인자를 지운다.
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute()
}

// -----------------------------------------------------------------------------

// 1. 시작은 빈 클래스를 만들고 이 함수를 그 클래스로 옮기는 일부터다.
class Scorer {
  // 2. 명령이 받는 인수를 생성자로 옮기자. (= 매개변수를 옮기자.)
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate
    this._medicalExam = medicalExam
    this._scoringGuide = scoringGuide
  }

  // [더 가다듬기] 4. 지역 변수를 필드로 바꾼다.
  execute() {
    // let result = 0
    // let healthLevel = 0
    // let highMedicalRiskFlag = false
    this._result = 0
    this._highLevel = 0
    this._highMedicalRiskFlag = false

    if (this._medicalExam.isSmoker) {
      this._highLevel += 10
      this._highMedicalRiskFlag = true
    }

    this._certificationGrade = 'regular'
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      this._certificationGrade = 'low'
      this._result -= 5
    }

    this._result -= Math.max(this._highLevel - 5, 0)
    return this._result
  }
}

// 3. execute 메서드를 호출하는 곳에서도 인자를 지운다.
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute()
}
