type CombinationPossibility = 'POSSIBLE' | 'IMPOSSIBLE'

export const combinationLock = (usedCombinations: string[], newCombination: string): CombinationPossibility => {
    // A combination lock has three dials, each dial has eight letters
    if (newCombination.length !== 3) return 'IMPOSSIBLE'        // If the length of the new combination string is less or greater than 3, then it is impossible to use

    // We need to determine eight letters of each dial of the used combinations
    // Use Set because each deal only accepts unique letter
    // Its more efficient to use Set rather than Array
    const firtsDial: Set<string> = new Set()
    const secondDial: Set<string> = new Set()
    const thirdDial: Set<string> = new Set()

    for (let combination of usedCombinations) {                 // Iterate all used combinations to collects the letters used for dial
        firtsDial.add(combination.charAt(0))                    // Add first letter of combination to the firstDial
        secondDial.add(combination.charAt(1))                   // Add second letter of combination to the secondDial
        thirdDial.add(combination.charAt(2))                    // Add third letter of combination to the thirdDial
    }

    // Start checking if new combination lock is possible to use
    // Use logical operator AND
    // Check if each letter of new combination is available in the dial in order
    if (
        firtsDial.has(newCombination.charAt(0)) &&
        secondDial.has(newCombination.charAt(1)) &&
        thirdDial.has(newCombination.charAt(2))
    ) return 'POSSIBLE'

    return 'IMPOSSIBLE'
}