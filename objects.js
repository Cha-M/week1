const pet =
{
    name : "Fluffy",
    typeOfPet : "Cat",
    age : 1,
    colour : "Black",
    eat : function() {return `${this.name} is eating`},
    drink : function() {return `${this.name} is drinking`},
    //no => in objects if you want to use this keyw
    walk : () => {
        console.log( `${this.name} (undefined) is walking`)
    }
}

console.log(pet.eat())
pet.walk()