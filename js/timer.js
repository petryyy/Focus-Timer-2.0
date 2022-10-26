import Sound from "./sound.js"

const sound = Sound()

export default function({ minutesDisplay,secondsDisplay,controls,}){ 

    let pauseSetTimeOut
    let minutes = Number(minutesDisplay.textContent)

function pauseApplication(){ 
    clearTimeout(pauseSetTimeOut)
}

    function updateDisplay(minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2,'0')
        secondsDisplay.textContent = String(seconds).padStart(2,'0')
    }

    function stopApplication(){ 
        clearTimeout(pauseSetTimeOut)
        updateDisplay(minutes,0)
    }

    function add5Minutes(){
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent)+5).padStart(2,'0')
    }

    function remove5Minutes(){
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent)-5).padStart(2,'0')
    }


    function coutdown(){
    pauseSetTimeOut =  setTimeout(function(){
    
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
    
            if(minutes == 0 && seconds == 0){ 
                controls.resetTimer()  
                stopApplication()
                sound.kitchenAudio()
                return
            }
    
            if(seconds <= 0 ){ 
                --minutes
                seconds = 60
            }
    
            updateDisplay(minutes,String(seconds -1).padStart(2,'0'))
            coutdown()
    
        },1000)}

        return{ 
            coutdown,updateDisplay,pauseApplication,stopApplication,add5Minutes,remove5Minutes
        }
}