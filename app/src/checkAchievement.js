// функция, проверяющая условия выполнения ачивок. Сложные проверки вынесены отдельно для облегчения
//масштабирования ачивок в духе 'сделать X действий'

const checkAchievement = (id, state) => {
    switch (id) {
        case 'ach1': {
            return state.passed === 3
        }
        case 'ach2': {
            return state.passed === 5
        }
        case 'ach3': {
            return state.perfect === 1
        }
        case 'ach4': {
            return state.perfect === 3
        }
        case 'ach5': {
            return state.perfect === 5
        }
        case 'ach6': {
            return checkAttempts(state.passedTests, 5)
        }
        case 'ach7': {
            return sumAttempts(state.passedTests) === 10
        }
        default: return false
    }
}

export const checkAttempts = (testsInfo, number) => {
    for (var key in testsInfo) {
        if (testsInfo[key].attempts === number) {
            return true
        }
    }
    return false
}

export const sumAttempts = (testsInfo) => {
    let sum = 0
    for (var key in testsInfo) {
        sum += testsInfo[key].attempts || 0
    }
    return sum
}

export default checkAchievement