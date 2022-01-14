import { combinationLock } from './combinationLock'

const usedCombinations = ['one', 'who', 'two', 'bob', 'add', 'owl', 'fab', 'den', 'mia', 'tat']

describe('Testing New Combination Lock', () => {
    test('\'win\' should possible to use', () => {
        expect(combinationLock(usedCombinations, 'win')).toBe('POSSIBLE')
    })

    test('\'deb\' should possible to use', () => {
        expect(combinationLock(usedCombinations, 'deb')).toBe('POSSIBLE')
    })

    test('\'men\' should possible to use', () => {
        expect(combinationLock(usedCombinations, 'men')).toBe('POSSIBLE')
    })

    test('\'bad\' should possible to use', () => {
        expect(combinationLock(usedCombinations, 'bad')).toBe('POSSIBLE')
    })

    test('\'hat\' should not possible to use', () => {
        expect(combinationLock(usedCombinations, 'hat')).toBe('IMPOSSIBLE')
    })

    test('\'wln\' should not possible to use', () => {
        expect(combinationLock(usedCombinations, 'wln')).toBe('IMPOSSIBLE')
    })

    test('\'twm\' should not possible to use', () => {
        expect(combinationLock(usedCombinations, 'twm')).toBe('IMPOSSIBLE')
    })
})