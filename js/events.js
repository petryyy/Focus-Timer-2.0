import {buttonPlay,buttonPause,buttonStop} from './index.js'

import Sound from "./sound.js"

const sound = Sound()


export default function Events({
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
}){ 
    buttonPlay.addEventListener('click',function(){ 
        controls.startApplication()
        timer.coutdown()
        sound.buttonPress()
    })
    
    buttonPause.addEventListener('click',function(){
        controls.resetTimer()  
        timer.pauseApplication()
        sound.buttonPress()
    })
    
    buttonStop.addEventListener('click',function(){
        timer.stopApplication()
        controls.resetTimer()
        sound.buttonPress()
    })

    buttonSum.addEventListener('click',function(){ 
        timer.add5Minutes()
        sound.buttonPress()
    })

    buttonSub.addEventListener('click',function(){
        timer.remove5Minutes()
        sound.buttonPress()
        
    })

    buttonFlorestOff.addEventListener('click',function(){
        controls.onFlorest()
        sound.buttonFlorestPlay()

        sound.buttonRainPause()
        sound.buttonCoffePause()
        sound.buttonFirePause()
    })

    
    buttonFlorestOn.addEventListener('click',function(){
        controls.offFlorest()
        sound.buttonFlorestPause()
    })

    buttonRainOff.addEventListener('click',function(){
        controls.onRain()
        sound.buttonRainPlay()

        sound.buttonFlorestPause()
        sound.buttonCoffePause()
        sound.buttonFirePause()
        sound.buttonCoffePause()
    })

    buttonRainOn.addEventListener('click',function(){
        controls.offRain()
        sound.buttonRainPause()

        
    })

    buttonBusinessOff.addEventListener('click',function(){
        controls.OffBusiness()
        sound.buttonCoffePlay()

        sound.buttonRainPause()
        sound.buttonFlorestPause()
        sound.buttonFirePause()
    })

    buttonBusinessOn.addEventListener('click',function(){
        controls.OnBusiness()
        sound.buttonCoffePause()
    })

    buttonFireOff.addEventListener('click',function(){
        controls.OnFire()
        sound.buttonFirePlay()

        sound.buttonRainPause()
        sound.buttonCoffePause()
        sound.buttonFlorestPause()
    })
    
    buttonFireOn.addEventListener('click',function(){
        controls.offFire()
        sound.buttonFirePause()
    })
}