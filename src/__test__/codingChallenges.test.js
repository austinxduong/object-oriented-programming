const { findsHighestDigit } = require('../../codingChallenges')


describe('Test validity for functions', () => {
    test('finds the highest digit, when integer is passed in as input', () => {

    
        expect(findsHighestDigit(876329)).toEqual(9);
    })
})