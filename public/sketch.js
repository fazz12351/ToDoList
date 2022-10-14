let messages = document.querySelectorAll(".message")



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


messageVisibility(false, ".message", "message")