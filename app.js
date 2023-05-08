const cities = [
    {
        name: "NYU New York",
        x: 260,
        y: 190,
        color: '#0021ee',
        img: 'new_york.jpg',
        info: 'New York University Shanghai is China\'s first Sino-US research university and the third degree-granting campus of New York University.',
        audio: new Audio('nyu.mp3')
    },
    {
        name: "NYU Abu Dhabi",
        x: 600,
        y: 230,
        color: '#f55b00',
        img: 'abu_dhabi.jpg',
        info: 'New York University Abu Dhabi is a degree granting, portal campus of New York University serving as a private, liberal arts college, located in Abu Dhabi, United Arab Emirates.',
        audio: new Audio('ad.mp3')
    },
    {
        name: "NYU Shanghai",
        x: 780,
        y: 190,
        color: '#fae100',
        img: 'shanghai.jpg',
        info: 'New York University is a private research university in New York City. Chartered in 1831 by the New York State Legislature, NYU was founded by a group of New Yorkers led by then–Secretary of the Treasury Albert Gallatin.',
        audio: new Audio('sha.mp3')
    },
]

const mapa = document.getElementById('map')
const infoContainer = document.getElementById('info-container')
const infoBox = document.getElementById('info-box')

const zoomed = {
    value: false
}

const nyaudio = new Audio('nyu.mp3')
const shaaudio = new Audio('sha.mp3')
const adaudio = new Audio('ad.mp3')

/* Draw Cities' Points */

for (let city of cities) {
    const point = document.createElement("div")


    /* Draw points */
    point.classList.add('point')
    point.style.left = `${city.x}px`
    point.style.top = `${city.y}px`
    point.style.background = city.color

    point.addEventListener('click', () => {
        const title = document.getElementById('info-box.city-name')
        const img = document.getElementById('info-box.img')
        const info = document.getElementById('info-box.city-info')
        title.innerText = city.name
        img.setAttribute('src', city.img)
        info.innerText = city.info
        infoContainer.style.display = 'flex'


        city.audio.play()
    })

    mapa.appendChild(point)
}

document.addEventListener("click", e => {
    if (e.target === infoContainer) {
        infoContainer.style.display = 'none'
        cities.forEach(city => city.audio.pause())
    }

})

document.addEventListener('click', e => {
    document.getElementById("entry-modal").style.display = 'none'
})

class ArtObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20, 50);
        this.color = color(random(205), random(25), random(200));
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }
}

let artObjects = [];

function setup() {
    createCanvas(1920, 1080);

    for (let i = 0; i < 1000; i++) {
        artObjects.push(new ArtObject(random(width), random(height)));
    }
}

function draw() {
    background(0);


    for (let i = 0; i < artObjects.length; i++) {
        artObjects[i].update();
        artObjects[i].draw();
    }
}