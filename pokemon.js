const { typeOf } = require("react-is")


class Pokemon{
    constructor(name,hitPoints,attackDamage,move){
        this.name=name
        this.hitPoints=hitPoints
        this.attackDamage=attackDamage
        if(move===undefined) this.move='tackle'
        else this.move=move
    }
    takeDamage(damage){
        this.hitPoints -= damage
    }
    useMove(){
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage
    }
    hasFainted(){
        return this.hitPoints<=0
    }
}

class Fire extends Pokemon{
    constructor (name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "fire"
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "grass"
    }
    isWeakAgainst(pokemon){
        return pokemon.type === "water"
    }
}

class Water extends Pokemon{
    constructor (name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "water"
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "fire"
    }
    isWeakAgainst(pokemon){
        return pokemon.type === "grass"
    }
}

class Grass extends Pokemon{
    constructor (name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "grass"
    }
    isEffectiveAgainst(pokemon){
        return pokemon.type === "water"
    }
    isWeakAgainst(pokemon){
        return pokemon.type === "fire"
    }
}

class Normal extends Pokemon{
    constructor (name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "normal"
    }
    isEffectiveAgainst(pokemon){
        return false
    }
    isWeakAgainst(pokemon){
        return false
    }
}

class Charmander extends Fire{
    constructor (hitPoints, attackDamage){
        super(hitPoints, attackDamage)
            this.name = 'charmander'
            this.move = 'ember'
    }
}
class Squirtle extends Water{
    constructor (hitPoints, attackDamage){
        super(hitPoints, attackDamage)
            this.name = 'squirtle'
            this.move = 'water gun'
    }
}
class Bulbasaur extends Grass{
    constructor (hitPoints, attackDamage){
        super(hitPoints, attackDamage)
            this.name = 'bulbasaur'
            this.move = 'vine whip'
    }
}
class Rattata extends Normal{
    constructor (hitPoints, attackDamage){
        super(hitPoints, attackDamage)
            this.name = 'rattata'
    }
}
class Pokeballs{
    constructor(){
        this.contents = 'empty' 
    }
    throw(pokemon){
        if(this.contents !== 'empty' &&pokemon !== undefined){
            return 'forbidden move'
        }else if(this.contents==='empty' && pokemon !== undefined){
        this.contents=pokemon.name
        return 'you caught '+pokemon.name
        }else if(this.contents==='empty' && pokemon === undefined){
            return 'there are no pokemon'
        }else return `go ${this.contents}`
    }
    isEmpty(){
        return this.contents==='empty'
    }
    contains(){
        return this.contents==='empty'? 'empty...':this.contents
    }
}

module.exports= {Pokemon, Fire, Water, Grass, Normal,Charmander,Squirtle,Bulbasaur,Rattata, Pokeballs}