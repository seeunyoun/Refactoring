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
