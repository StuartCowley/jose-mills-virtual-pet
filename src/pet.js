function Pet(petName) {
    const initialFitness = 10;
    this.name = petName;
    this.age = 0;
    this.hunger = 0;
    this.fitness = initialFitness;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const maxFitness = 10;
    this.fitness += 4;
    if (this.fitness > maxFitness) {
        this.fitness = maxFitness;
    } else this.fitness = this.fitness;
};

Pet.prototype.feed = function() {
    const minHunger = 0;
    this.hunger -= 3;
    if (this.hunger < minHunger) {
        this.hunger = minHunger;
    } else this.hunger = this.hunger;
};

Pet.prototype.checkUp = function() {
    const hungry = 5;
    const outOfShape = 3;
    if (this.hunger >= hungry && this.fitness <= outOfShape) {
        return 'I am hungry AND I need a walk';
    }
    if (this.hunger >= hungry) {
        return 'I am hungry';
    }
    if (this.fitness <= outOfShape) {
        return 'I need a walk';
    }
    return 'I feel great!';
};

module.exports = Pet;