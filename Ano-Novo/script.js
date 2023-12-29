const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#counter')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}

const hadleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(hadleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)

const createSnowFlake = () => {
    const $snow = document.createElement('i');
    $snow
        .classList
        .add('fas', 'fa-snowflake', 'snowflake');
    
    $snow.style.left = 
        `${Math.random() * window.innerWidth}px`;
    $snow.style.animationDuration = 
        `${(Math.random() * 3 + 2)}s`;
    $snow.style.opacity =
        Math.random();
    $snow.style.fontSize =
        `${Math.random() * 20}px`;
    $snow.style.filter = 'blur(1px)'

    document.body.appendChild($snow);
    $snow.onanimationend = () => {
        $snow.remove();
    };

    requestAnimationFrame(createSnowFlake);
};

requestAnimationFrame(createSnowFlake);