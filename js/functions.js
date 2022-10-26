export default function Controls({
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
    
}){

    function startApplication(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }
    
    function resetTimer(){ 
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    
    }

    function hideFlorest(){
        buttonFlorestOn.classList.add('hide')
        buttonFlorestOff.classList.remove('hide')
        imageFlorest.classList.add('hide')
    }

    function hideBusiness(){
        buttonBusinessOff.classList.remove('hide')
        buttonBusinessOn.classList.add('hide')
        imageBusiness.classList.add('hide')

    }

    function hideFire(){
        buttonFireOff.classList.remove('hide')
        buttonFireOn.classList.add('hide')
        imageFire.classList.add('hide')
    }

    function hideRain(){
        buttonRainOn.classList.add('hide')
        buttonRainOff.classList.remove('hide')
        imageRain.classList.add('hide')
    }


    function onFlorest(){ 
        imageFlorest.classList.remove('hide')
        buttonFlorestOn.classList.remove('hide')
        buttonFlorestOff.classList.add('hide')

        hideRain()
        hideBusiness()
        hideFire()
    }

    function offFlorest(){
        imageFlorest.classList.add('hide')
        buttonFlorestOn.classList.add('hide')
        buttonFlorestOff.classList.remove('hide')
    }



    function onRain(){ 
        imageRain.classList.remove('hide')
        buttonRainOff.classList.add('hide')
        buttonRainOn.classList.remove('hide')

        hideFlorest()
        hideBusiness()
        hideFire()
    }
    
    function offRain(){
        hideRain()
    }

    function OffBusiness(){
        buttonBusinessOff.classList.add('hide')
        buttonBusinessOn.classList.remove('hide')
        imageBusiness.classList.remove('hide')

        hideRain()
        hideFlorest()
        hideFire()
    }

    function OnBusiness(){ 
        hideBusiness()
    }

    function OnFire(){ 
        buttonFireOff.classList.add('hide')
        buttonFireOn.classList.remove('hide')
        imageFire.classList.remove('hide')

        hideFlorest()
        hideRain()
        hideBusiness()
    }

    function offFire(){
        hideFire()
    }


    return{
        startApplication,
        resetTimer,
        onFlorest,
        offFlorest,
        onRain,
        offRain,
        OffBusiness,
        OnBusiness,
        OnFire,
        offFire,
    }
}   