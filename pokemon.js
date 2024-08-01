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


module.exports= {Pokemon, Fire, Water, Grass, Normal}