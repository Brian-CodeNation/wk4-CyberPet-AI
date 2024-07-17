// script.js

class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 100;
        this.happiness = 100;
        this.comfort = 100;
    }

    decreaseStats = () => {
        this.energy = Math.max(0, this.energy - 1);
        this.happiness = Math.max(0, this.happiness - 3);
        this.comfort = Math.max(0, this.comfort - 2);
    }

    performAction = (action) => {
        switch(action) {
            case 'feed':
                this.energy = Math.min(100, this.energy + 3);
                break;
            case 'play':
                this.happiness = Math.min(100, this.happiness + 5);
                break;
            case 'comfort':
                this.comfort = Math.min(100, this.comfort + 5);
                break;
        }
    }
}

class Cat extends Animal {
    constructor() {
        super('Cat');
    }

    // You can add specific methods or properties for Cat here

}

class Dog extends Animal {
    constructor() {
        super('Dog');
    }

    // You can add specific methods or properties for Dog here
}

class Bird extends Animal {
    constructor() {
        super('Bird');
    }

    // You can add specific methods or properties for Bird here
}

let currentAnimal;
let statInterval;

const selectAnimal = (animal) => {
    switch(animal) {
        case 'Cat':
            currentAnimal = new Cat();
            break;
        case 'Dog':
            currentAnimal = new Dog();
            break;
        case 'Bird':
            currentAnimal = new Bird();
            break;
    }
    document.getElementById('animalName').innerText = currentAnimal.name;
    document.getElementById('selectAnimal').style.display = 'none';
    document.getElementById('animalCare').style.display = 'block';

    statInterval = setInterval(() => {
        currentAnimal.decreaseStats();
        updateStats();
        checkGameOver();
    }, 1000);
}

const performAction = (action) => {
    currentAnimal.performAction(action);
    updateStats();
}

const updateStats = () => {
    document.getElementById('energy').innerText = currentAnimal.energy;
    document.getElementById('happiness').innerText = currentAnimal.happiness;
    document.getElementById('comfort').innerText = currentAnimal.comfort;

    document.getElementById('energy-bar').style.width = `${currentAnimal.energy}%`;
    document.getElementById('happiness-bar').style.width = `${currentAnimal.happiness}%`;
    document.getElementById('comfort-bar').style.width = `${currentAnimal.comfort}%`;
}

const checkGameOver = () => {
    if (currentAnimal.energy === 0 || currentAnimal.happiness === 0 || currentAnimal.comfort === 0) {
        clearInterval(statInterval);
        alert('Game Over! Your animal didn\'t make it.');
        resetGame();
    }
}

const resetGame = () => {
    document.getElementById('selectAnimal').style.display = 'block';
    document.getElementById('animalCare').style.display = 'none';
    currentAnimal = null;
}

// Initialize game
document.getElementById('selectAnimal').style.display = 'block';
document.getElementById('animalCare').style.display = 'none';
