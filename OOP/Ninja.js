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
       let stats = ` Name: ${this.name}, \n strength: ${this.strength}, \n speed: ${this.speed}, \n health: ${this.health}`
        console.log(stats)
    }

    drinkSake() {
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
