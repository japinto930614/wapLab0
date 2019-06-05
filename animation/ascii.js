var index = 0;
function putText(animation) {
    let textbox = document.getElementById("textbox");
    var animationArray = ANIMATIONS[animation].split("=====\n");
    textbox.value = animationArray[index];
    ++index;
    if (index == animationArray.length) {
        index = 0;
    }
}

window.onload = function () {
    let play;
    let isPlaying = false;
    let sizeoption = document.getElementById("sizeoption");
    let startbutton = document.getElementById("startbutton");
    let stopbutton = document.getElementById("stopbutton");
    let animationoption = document.getElementById("animationoption");
    let turbocheck = document.getElementById("turbocheck");
    let speed = 250;
   

    startbutton.onclick = function () {
        if (!isPlaying) {
            animation = animationoption.value;
            if (animation != "") {
                play = setInterval(function () { putText(animation); }, speed);
                startbutton.disabled = true;
                stopbutton.disabled = false;
                animationoption.disabled = true;
                isPlaying = true;
            }
        }
    };
    document.getElementById("stopbutton").onclick = function () {
        clearInterval(play);
        startbutton.disabled = false;
        stopbutton.disabled = true;
        animationoption.disabled = false;
        isPlaying = false;
    }
    sizeoption.onchange = function () {
        let textbox = document.getElementById("textbox").style.fontSize = sizeoption.value;
    }
    turbocheck.onchange = function () {
        if(turbocheck.checked){
            speed = 50;
            clearInterval(play);
            play = setInterval(function () { putText(animation); }, speed);
        } else {
            speed = 250;
            clearInterval(play);
            play = setInterval(function () { putText(animation); }, speed);
        }
    }
}
