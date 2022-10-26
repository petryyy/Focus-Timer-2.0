import Controls from './functions.js'
import Timer from './timer.js'
import Events from './events.js'



const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause') 
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')


const buttonFlorestOn  = document.querySelector('.butonFlorestOn')
const buttonFlorestOff = document.querySelector('.buttonFlorestOff')
const buttonRainOff = document.querySelector('.buttonRainOff')
const buttonRainOn = document.querySelector('.buttonRainOn')
const buttonBusinessOff = document.querySelector('.businessOff')
const buttonBusinessOn = document.querySelector('.businessOn')
const buttonFireOff = document.querySelector('.fireOff')
const buttonFireOn = document.querySelector('.fireOn')


const imageFlorest = document.querySelector('.image-futuristic-florest')
const imageRain = document.querySelector ('.image-futuristic-rain')
const imageBusiness = document.querySelector('.image-futuristic-coffe')
const imageFire = document.querySelector('.image-futuristic-fire')


const controls = Controls({
    buttonPause,
    buttonPlay,
    imageFlorest,
    buttonFlorestOn,
    buttonFlorestOff,
    imageRain,
    buttonRainOn,
    buttonRainOff,
    buttonBusinessOff,
    buttonBusinessOn,
    imageBusiness,
    buttonFireOff,
    buttonFireOn,
    imageFire,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    controls,
    
})

Events ({
    controls,
    timer,
    buttonFlorestOff,
    buttonFlorestOn,
    buttonRainOff,
    buttonRainOn,
    buttonBusinessOff,
    buttonBusinessOn,
    buttonFireOff,
    buttonFireOn,
    buttonSum,
    buttonSub
})

export{ 
    buttonPlay,buttonPause,buttonStop
}