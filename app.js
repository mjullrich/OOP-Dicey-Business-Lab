const MAX = 1400;

let container = document.getElementById('square-container');

class Square {
    constructor(x, y, ) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.addEventListener('click', () => {
            this.updateColor();
            this.updateLocation();
        });

        this.updateColor();
        this.roll();
        container.appendChild(this.div);
    }

    updateLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }

    roll() {
        this.div.innerHTML = randomVal(1, 6);
    }
}

let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    let sq = new Square(xVal, yVal, );
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




