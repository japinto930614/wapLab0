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
    let speed
    document.getElementById("startbutton").onclick = function () {
        if (!isPlaying) {
            animation = document.getElementById("animationoption").value;
            if (animation != "") {
                play = setInterval(function () { putText(animation); }, 250);
                isPlaying = true;
            }
        }
    };

    document.getElementById("stopbutton").onclick = function () {
        clearInterval(play);
        isPlaying = false;
    }

    sizeoption.onchange = function () {
        let textbox = document.getElementById("textbox").style.fontSize = sizeoption.value;
    }


}
