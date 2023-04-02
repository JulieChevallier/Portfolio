function fadeIn(elem) {
    elem.style.opacity = 0;
    elem.style.display = "flex";
    elem.style.flewFlow = "wrap";

    let opacity = 0;
    let interval = setInterval(function() {
        opacity += 0.05;
        elem.style.opacity = opacity;
        if (opacity >= 1) {
        clearInterval(interval);
        }
    }, 20);
}

function fadeOut(elem) {
    let opacity = 1;
    let interval = setInterval(function() {
        opacity -= 0.05;
        elem.style.opacity = opacity;
        if (opacity <= 0) {
        elem.style.display = "none";
        elem.style.flewFlow = "none";
        clearInterval(interval);
        }
    }, 20);
}

function software(){
    let software = document.getElementsByClassName("sd")[0];
    let computer = document.getElementsByClassName("cg")[0];
    let web = document.getElementsByClassName("wd")[0];
    let design = document.getElementsByClassName("d")[0];

    if(software.style.display !== "block"){
        fadeOut(computer);
        fadeOut(web);
        fadeOut(design);
        setTimeout(() => {
            fadeIn(software);
        }, 500);
    }
}

function computer(){
    let software = document.getElementsByClassName("sd")[0];
    let computer = document.getElementsByClassName("cg")[0];
    let web = document.getElementsByClassName("wd")[0];
    let design = document.getElementsByClassName("d")[0];

    if(computer.style.display !== "block"){
        fadeOut(software);
        fadeOut(web);
        fadeOut(design);
        setTimeout(() => {
            fadeIn(computer);
        }, 500);
    }
}

function web(){
    let software = document.getElementsByClassName("sd")[0];
    let computer = document.getElementsByClassName("cg")[0];
    let web = document.getElementsByClassName("wd")[0];
    let design = document.getElementsByClassName("d")[0];

    if(web.style.display !== "block"){
        fadeOut(computer);
        fadeOut(software);
        fadeOut(design);
        setTimeout(() => {
            fadeIn(web);
        }, 500);
    }
}

function design(){
    let software = document.getElementsByClassName("sd")[0];
    let computer = document.getElementsByClassName("cg")[0];
    let web = document.getElementsByClassName("wd")[0];
    let design = document.getElementsByClassName("d")[0];

    if(design.style.display !== "block"){
        fadeOut(computer);
        fadeOut(web);
        fadeOut(software);
        setTimeout(() => {
            fadeIn(design);
        }, 500);
    } 
}
  