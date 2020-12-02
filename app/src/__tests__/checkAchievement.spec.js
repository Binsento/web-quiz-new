import checkAchievement, { checkAttempts, sumAttempts } from '../checkAchievement'

const passedInfo1 = {
    js: { attempts: 5, bestScore: 15 },
    css: { attempts: 1, bestScore: 5 },
    html: { attempts: 10, bestScore: 5 },
    react: { attempts: undefined, bestScore: undefined }
}

const passedInfo2 = {
    js: { attempts: 2, bestScore: 10 },
    css: { attempts: 1, bestScore: 5 },
    html: { attempts: 7, bestScore: 5 },
    react: {}
}

const info1 = {
    passed: 5,
    perfect: 3,
    passedTests: {...passedInfo1}
}
const info2 = {
    passed: 3,
    perfect: 1,
    passedTests: {...passedInfo2}
}

describe('проверка числа попыток прохождения', () => {
    it('соответствие числа попыток в одном тесте', () => {
        expect(checkAttempts(passedInfo1, 5)).toBeTruthy()
        expect(checkAttempts(passedInfo1, 10)).toBeTruthy()
        expect(checkAttempts(passedInfo1, 7)).toBeFalsy()
        expect(checkAttempts(passedInfo2, 7)).toBeTruthy()
    })
    it('общее число попыток', () => {
        expect(sumAttempts(passedInfo1)).toBe(16)
        expect(sumAttempts(passedInfo2)).toBe(10)
    })
})

describe('проверка выполнения условий ачивок', () => {
    it('вариант 1', () => {
        expect(checkAchievement('ach1', info1)).toBeFalsy()
        expect(checkAchievement('ach2', info1)).toBeTruthy()
        expect(checkAchievement('ach3', info1)).toBeFalsy()
        expect(checkAchievement('ach4', info1)).toBeTruthy()
        expect(checkAchievement('ach5', info1)).toBeFalsy()
        expect(checkAchievement('ach6', info1)).toBeTruthy()
        expect(checkAchievement('ach7', info1)).toBeFalsy()
        expect(checkAchievement('foo', info1)).toBeFalsy()
    })
    it('вариант 2', () => {
        expect(checkAchievement('ach1', info2)).toBeTruthy()
        expect(checkAchievement('ach2', info2)).toBeFalsy()
        expect(checkAchievement('ach3', info2)).toBeTruthy()
        expect(checkAchievement('ach4', info2)).toBeFalsy()
        expect(checkAchievement('ach5', info2)).toBeFalsy()
        expect(checkAchievement('ach6', info2)).toBeFalsy()
        expect(checkAchievement('ach7', info2)).toBeTruthy()
        expect(checkAchievement('foo', info2)).toBeFalsy()
    })
})