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

module.exports= {Pokemon}