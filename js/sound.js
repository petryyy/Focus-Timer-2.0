
export default function Sound(){

    const btnPress = new Audio("sound/button-press.wav")
    const kitchenTimer = new Audio("sound/kichen-timer.mp3")
    const btnFlorest = new Audio("sound/Floresta.wav")
    const btnRain = new Audio("sound/Chuva.wav")
    const btnFire = new Audio("sound/Lareira.wav")
    const btnCofee = new Audio("sound/Cafeteria.wav")


    btnFlorest.loop = true
    btnRain.loop = true
    btnFire.loop = true
    btnCofee.loop = true
    

    function buttonPress(){
        btnPress.play()
    }

    function kitchenAudio(){
        kitchenTimer.play()
    }

    function buttonFlorestPlay(){
        btnFlorest.play()
    }

    function buttonFlorestPause(){
        btnFlorest.pause()
    }

    function buttonRainPlay(){
        btnRain.play()
    }

    function buttonRainPause(){
        btnRain.pause()
    }

    function buttonFirePlay(){
        btnFire.play()
    }

    function buttonFirePause(){
        btnFire.pause()
    }

    function buttonCoffePlay(){
        btnCofee.play()
    }

    function buttonCoffePause(){
        btnCofee.pause()
    }

    return{
        buttonPress,
        kitchenAudio,
        buttonFlorestPlay,
        buttonFlorestPause,
        buttonRainPlay,
        buttonRainPause,
        buttonFirePlay,
        buttonFirePause,
        buttonCoffePlay,
        buttonCoffePause
    }
}