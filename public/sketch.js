let messages = document.querySelectorAll(".message")
let body = document.querySelector("body")
let container = document.querySelector(".container");
let today = new Date();
let Hours = today.getHours();



//alters the dom elemtns. if its multiple object, set teh bool array to true, next paramnet select the dom elemnt using tags or calssses, and dec is the style we want from the css.
function messageVisibility(array, object, dec) {
    if (array === true) {
        let objects = document.querySelectorAll(object);
        for (var i = 0; i < objects.length; i++) {
            objects[i].classList.add(dec)
        }


    } else if (array === false) {
        let objects = document.querySelector(object);
        objects.classList.add(dec)
    }
}


//function checks the time of sday and set the UI based oon the curretn time
function TimeOfDay(time) {
    if (time <= 4) {
        body.classList.add("dark")
        messageVisibility(true, ".message", "dark-text")
        messageVisibility(true, ".container", "dark-border")

    } else if (time >= 4 && time <= 11) {
        body.classList.add("dull")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
    } else if (time >= 11 && time <= 15) {
        body.classList.add("bright")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
    } else if (time >= 15 && time <= 20) {
        body.classList.add("dull")
        messageVisibility(true, ".message", "light-text")
        messageVisibility(true, ".container", "light-border")
    } else {
        body.classList.add("dark")
        messageVisibility(true, ".message", "dark-text")
        messageVisibility(true, ".container", "dark-border")
    }
}

Hours=2


TimeOfDay(Hours)



messageVisibility(false, ".message", "message")


let cards=document.querySelectorAll(".card");
for(var i=0;i<cards.length;i++){
    cards[i].addEventListener("mouseover",function(){
       this.classList.add("hovering")
    })
}
