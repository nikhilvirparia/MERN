class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        let stats = ` Name: ${this.name}, 
        \n strength: ${this.strength}, 
        \n speed: ${this.speed}, 
        \n health: ${this.health}`
        console.log(stats)
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 210);
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom = () => console.log("Cool.")
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
