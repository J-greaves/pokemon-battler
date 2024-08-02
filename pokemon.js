


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
    constructor (){
        super()
            this.name = 'charmander'
            this.move = 'ember'
            this.hitPoints = 44
            this.attackDamage = 17
    }
}
class Squirtle extends Water{
    constructor (){
        super()
            this.name = 'squirtle'
            this.move = 'water gun'
            this.hitPoints = 44
            this.attackDamage = 16 
    }
}
class Bulbasaur extends Grass{
    constructor (){
        super()
            this.name = 'bulbasaur'
            this.move = 'vine whip'
            this.hitPoints = 45
            this.attackDamage = 16
    }
}
class Rattata extends Normal{
    constructor (){
        super()
            this.name = 'rattata'
            this.hitPoints = 12
            this.attackDamage = 1
    }
}
class Pokeballs{
    constructor(){
        this.contents = 'empty'
        this.hitPoints = 0
        this.attackDamage = 0 
        this.type = 'gamma'
        this.move = 'flail' 
    }
    throw(pokemon){
        if(this.contents !== 'empty' &&pokemon !== undefined){
            return 'forbidden move'
        }else if(this.contents==='empty' && pokemon !== undefined){
        this.contents=pokemon.name
        this.hitPoints=pokemon.hitPoints
        this.attackDamage=pokemon.attackDamage
        this.type=pokemon.type
        this.move=pokemon.move
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

class Trainer{
    constructor(){
        this.belt = {
            pokeball1: new Pokeballs(),
            pokeball2: new Pokeballs(),
            pokeball3: new Pokeballs(),
            pokeball4: new Pokeballs(),
            pokeball5: new Pokeballs(),
            pokeball6: new Pokeballs(),
        }
    }
    catch(pokemon){
        for (const ball in this.belt){
            const pokeball = this.belt[ball]
            if(pokeball.contents === "empty"){
               return pokeball.throw(pokemon)
            }
        }
        return "pokeballs are full"
    }
    getPokemon(name){
        for (const ball in this.belt){
            const pokeball = this.belt[ball]
            if(pokeball.contents === name){
               return pokeball.throw()
            }
    }
    return 'you do not have this pokemon'
    }
    fightingPokemon(name){
        for (const ball in this.belt){
            const pokeball = this.belt[ball]
            if(pokeball.contents === name){
               return pokeball
            }
    }

    }
}
class Battle{
    constructor(trainer1,trainer2,pokemon1,pokemon2){
        this.trainer1=trainer1
        this.trainer2=trainer2
        this.pokemon1=trainer1.fightingPokemon(pokemon1)
        this.pokemon2=trainer2.fightingPokemon(pokemon2)
        this.effect1=1
        this.effect2=1
    }
    fight(){
        this.typeChecker()
        const first = this.pokemon1
        const second = this.pokemon2
        second.hitPoints -=Math.round(first.attackDamage*this.effect1)
        first.hitPoints-=Math.round(second.attackDamage*this.effect2)
    }
    typeChecker(){
        if(this.pokemon1.type==='fire'){
            if(this.pokemon2.type==='water'){
                this.effect1=0.75
                this.effect2=1.25
            }else if(this.pokemon2.type==='grass'){
                this.effect1=1.25
                this.effect2=0.75
            }
        }else if(this.pokemon1.type==='water'){
            if(this.pokemon2.type==='grass'){
                this.effect1=0.75
                this.effect2=1.25
            }else if(this.pokemon2.type==='fire'){
                this.effect1=1.25
                this.effect2=0.75
            }
        }else if(this.pokemon1.type==='grass'){
            if(this.pokemon2.type==='fire'){
                this.effect1=0.75
                this.effect2=1.25
            }else if(this.pokemon2.type==='water'){
                this.effect1=1.25
                this.effect2=0.75
            }
        }
    }
}

module.exports= {Pokemon, Fire, Water, Grass, Normal,Charmander,Squirtle,Bulbasaur,Rattata, Pokeballs, Trainer, Battle}