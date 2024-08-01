
const {Pokemon} = require('../pokemon')

describe("pokemon()",()=>{
    test("should return pokemon with all correct attributes",()=>{
        const eevee = new Pokemon('Eevee',6000,1,'Hyper Beam')
        const output = {
            name: 'Eevee',
            hitPoints: 6000,
            attackDamage: 1,
            move: 'Hyper Beam'
          }
          expect(eevee).toEqual(output)
    })
    test("should return new hitpoints after damage taken",()=>{
        const eevee = new Pokemon('Eevee',6000,1,'Hyper Beam')
        eevee.takeDamage(100)
          expect(eevee.hitPoints).toEqual(5900)
    })
    test("should return new hitpoints after damage taken",()=>{
        const dialga = new Pokemon('Dialga',200,780,'Splash')
          expect(dialga.useMove()).toEqual(780)
    })
    test("Pokemon has fainted retun boolean",()=>{
        const dialga = new Pokemon('Dialga',200,780,'Splash')
        expect(dialga.hasFainted()).toBe(false)
        dialga.takeDamage(6000)
        expect(dialga.hasFainted()).toBe(true)
    })
})
