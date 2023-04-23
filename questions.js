var feelsgood = null;
var exposed  = null;
var fever = null;
var cough = null;
var shortBreath = null;

function fN(){
    feelsgood = false;
    const y = document.querySelector(".buttonY1");
    const n = document.querySelector(".buttonN1");
    n.style.backgroundColor = "yellow";
    y.style.backgroundColor = "transparent";
}

function fY(){
    feelsgood = true;
    const y = document.querySelector(".buttonY1");
    const n = document.querySelector(".buttonN1");
    n.style.backgroundColor = "transparent";
    y.style.backgroundColor = "yellow";
}

function eN(){
    exposed = false;
    const y = document.querySelector(".buttonY2");
    const n = document.querySelector(".buttonN2");
    n.style.backgroundColor = "yellow";
    y.style.backgroundColor = "transparent";
}

function eY(){
    exposed = true;
    const y = document.querySelector(".buttonY2");
    const n = document.querySelector(".buttonN2");
    n.style.backgroundColor = "transparent";
    y.style.backgroundColor = "yellow";
}

function fevN(){
    fever = false;
    const y = document.querySelector(".buttonY3");
    const n = document.querySelector(".buttonN3");
    n.style.backgroundColor = "yellow";
    y.style.backgroundColor = "transparent";
}

function fevY(){
    fever = true;
    const y = document.querySelector(".buttonY3");
    const n = document.querySelector(".buttonN3");
    n.style.backgroundColor = "transparent";
    y.style.backgroundColor = "yellow";
}

function cN(){
    cough = false;
    const y = document.querySelector(".buttonY4");
    const n = document.querySelector(".buttonN4");
    n.style.backgroundColor = "yellow";
    y.style.backgroundColor = "transparent";
}

function cY(){
    cough = true;
    const y = document.querySelector(".buttonY4");
    const n = document.querySelector(".buttonN4");
    n.style.backgroundColor = "transparent";
    y.style.backgroundColor = "yellow";
}

function sN(){
    shortBreath = false;
    const y = document.querySelector(".buttonY5");
    const n = document.querySelector(".buttonN5");
    n.style.backgroundColor = "yellow";
    y.style.backgroundColor = "transparent";
}

function sY(){
    shortBreath = true;
    const y = document.querySelector(".buttonY5");
    const n = document.querySelector(".buttonN5");
    n.style.backgroundColor = "transparent";
    y.style.backgroundColor = "yellow";
}


function getR(){
if(shortBreath == null || feelsgood == null || fever == null || cough == null|| exposed == null){
    var disp = document.getElementById("errorMessage");
    disp.innerText = "You must answer all the questions";
    return;
}
if (feelsgood == true && exposed == false && fever == false && cough == false && shortBreath == false) {
// goes to page for greens

    document.location.href = "safe.html";
} else if (fever == true || cough == true || shortBreath == true) {
// goes to page for red
document.location.href = "unsafe.html";
} else {
    //goes to page for yellow
    document.location.href = "midsafe.html";
   

}

}
