
const {Pokemon, Fire, Water, Grass, Normal} = require('../pokemon')

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
    test("return pokemon type", () => {
        const flareon = new Fire ()
        expect(flareon.type).toBe("fire")
        const vaporeon = new Water ()
        expect(vaporeon.type).toBe("water")
        const leafeon = new Grass ()
        expect(leafeon.type).toBe("grass")
        const eevee = new Normal ()
        expect(eevee.type).toBe("normal")
    })
    test("returns boolean for effectiveness", () => {
        const flareon = new Fire ()
        const vaporeon = new Water ()
        const leafeon = new Grass ()
        const eevee = new Normal ()
        expect(flareon.isEffectiveAgainst(leafeon)).toBe(true)
        expect(vaporeon.isEffectiveAgainst(flareon)).toBe(true)
        expect(leafeon.isEffectiveAgainst(vaporeon)).toBe(true)
        expect(eevee.isEffectiveAgainst(flareon)).toBe(false)
        expect(flareon.isEffectiveAgainst(vaporeon)).toBe(false)
    })
    test("returns boolean for effectiveness", () => {
        const flareon = new Fire ()
        const vaporeon = new Water ()
        const leafeon = new Grass ()
        const eevee = new Normal ()
        expect(flareon.isWeakAgainst(vaporeon)).toBe(true)
        expect(vaporeon.isWeakAgainst(leafeon)).toBe(true)
        expect(leafeon.isWeakAgainst(flareon)).toBe(true)
        expect(eevee.isWeakAgainst(flareon)).toBe(false)
        expect(flareon.isWeakAgainst(leafeon)).toBe(false)
    })
    test("new pokemon class returns correct type", () => {
        const charmander = new Charmander ()
        const squirtle = new Squirtle ()
        const bulbasaur = new Bulbasaur ()
        const rattata = new Rattata ()
        expect(charmander.type).toBe("fire")
        expect(squirtle.type).toBe("water")
        expect(bulbasaur.type).toBe("grass")
        expect(rattata.type).toBe("normal")
})
})
