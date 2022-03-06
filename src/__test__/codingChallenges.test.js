const { findsHighestDigit, sortArrayByLength } = require('../../codingChallenges')


describe('Test validity for functions', () => {
    test('finds the highest digit, when integer is passed in as input', () => {

    
        expect(findsHighestDigit(876329)).toEqual(9);
    })

    test('Sort Array of Strings by its length', () => {


        expect(sortArrayByLength(
            ['i/m', 'super','hungry', 'what', 'should', 'i', 'eat' ]
        )).toEqual(
            ["i", "i/m", "eat", "what", "super", "hungry", "should"]
        )
    })
})
