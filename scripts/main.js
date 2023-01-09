class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;
    }

    attacked(damage) {
        if (this.canFly) {
            let chance = Math.random();
            if (chance > 0.5) {
                console.log(this.name + " flew away.");
                damage = 0
            }
        }

        if (this.shield) {
            damage *= 0.8;
            console.log(this.name + " defends with a shield.");
        }

        this.hp -= damage;
        
        console.log(this.name + " has been attacked. HP reduced by " + damage + ".HP remaining: " + this.hp + ".");
    }
}

class Dwarf extends Hero {
    constructor(name, hp) {
       super(name, hp);
       this.shield = true;
    }

    attack(otherHero) {
        let damage = 10;
        console.log(this.name + " attacked with damage:" + damage + ".");
        otherHero.attacked(damage);
    }
}

class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }

    attack(otherHero) {
        let damage = 15;
        console.log(this.name + " attacked with damage:" + damage + ".");
        otherHero.attacked(damage)
    }
}

class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this. canFly = true;
        this.shield = true;
    }

    attack(otherHero) {
        let damage = 5;
        console.log(this.name + " attacked with damage:" + damage + ".");
        otherHero.attacked(damage)
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;  //turn face referire la tura eroirlor si poate avea valori de 0 si 1
    }

    performAttack() {
        if (this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn === 1 - this.turn; //schimbam tura din 0 in 1 si invers
    }

    findWinner() {
        if (this.hero1.hp > 0) {
            console.log(this.hero1.name + " won with " + this.hero1.hp + ".");
        } else if (this.hero2.hp > 0) {
            console.log(this.hero2.name + " won with " + this.hero2.hp + ".");
        } else {
            console.log(" no hero left alive.");
        }
    }

    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while (this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}

let dwarf = new Dwarf("Gimli" , 40);
let sprite = new Sprite("Elrond", 35);
let dragon = new Dragon("Smaug" , 45);

let epicFight = new Fight(dwarf, sprite, );
epicFight.go()








