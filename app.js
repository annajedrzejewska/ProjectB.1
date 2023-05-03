const cities = [
    {
        name: "NYU New York",
        x: 260,
        y: 190,
        color: '#0021ee',
        img: 'ny.jpeg',
        info: 'New York University Shanghai is China\'s first Sino-US research university and the third degree-granting campus of New York University.'
    },
    {
        name: "NYU Abu Dhabi",
        x: 600,
        y: 230,
        color: '#f55b00',
        img: 'ad.jpeg',
        info: 'New York University Abu Dhabi is a degree granting, portal campus of New York University serving as a private, liberal arts college, located in Abu Dhabi, United Arab Emirates.'
    },
    {
        name: "NYU Shanghai",
        x: 780,
        y: 190,
        color: '#fae100',
        img: 'sha.jpeg',
        info: 'New York University is a private research university in New York City. Chartered in 1831 by the New York State Legislature, NYU was founded by a group of New Yorkers led by then–Secretary of the Treasury Albert Gallatin.',
    },
]

const map = document.getElementById('map')
const infoContainer = document.getElementById('info-container')
const infoBox = document.getElementById('info-box')

const zoomed = {
    value: false
}

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
    })

    map.appendChild(point)
}

document.addEventListener("click", e => {
    if (e.target === infoContainer) {
        infoContainer.style.display = 'none'
    }
})