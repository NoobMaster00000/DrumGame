// for button w
let w = document.querySelector("button.w");

w.style.backgroundImage = "url('./images/crash.png')";
w.style.backgroundPosition = "Center";
w.style.backgroundSize = "contain";
w.style.backgroundRepeat = "no-repeat";

w.addEventListener('click', function() {
    let audio = new Audio('./sounds/crash.mp3');
    audio.play();
    w.style.borderColor = '#da0463';
    setTimeout(function() {
        w.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'w') {
        let audio = new Audio('./sounds/crash.mp3');
        audio.play();
        w.style.borderColor = '#da0463';
        setTimeout(function() {
            w.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button a
let a = document.querySelector("button.a");

a.style.backgroundImage = "url('./images/kick.png')";
a.style.backgroundPosition = "Center";
a.style.backgroundSize = "contain";
a.style.backgroundRepeat = "no-repeat";

a.addEventListener('click', function() {
    let audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
    a.style.borderColor = '#da0463';
    setTimeout(function() {
        a.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'a') {
        let audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        a.style.borderColor = '#da0463';
        setTimeout(function() {
            a.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button s
let s = document.querySelector("button.s");

s.style.backgroundImage = "url('./images/snare.png')";
s.style.backgroundPosition = "Center";
s.style.backgroundSize = "contain";
s.style.backgroundRepeat = "no-repeat";

s.addEventListener('click', function() {
    let audio = new Audio('./sounds/snare.mp3');
    audio.play();
    s.style.borderColor = '#da0463';
    setTimeout(function() {
        s.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 's') {
        let audio = new Audio('./sounds/snare.mp3');
        audio.play();
        s.style.borderColor = '#da0463';
        setTimeout(function() {
            s.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button d
let d = document.querySelector("button.d");

d.style.backgroundImage = "url('./images/tom1.png')";
d.style.backgroundPosition = "Center";
d.style.backgroundSize = "contain";
d.style.backgroundRepeat = "no-repeat";

d.addEventListener('click', function() {
    let audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    d.style.borderColor = '#da0463';
    setTimeout(function() {
        d.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'd') {
        let audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        d.style.borderColor = '#da0463';
        setTimeout(function() {
            d.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button j
let j = document.querySelector("button.j");

j.style.backgroundImage = "url('./images/tom2.png')";
j.style.backgroundPosition = "Center";
j.style.backgroundSize = "contain";
j.style.backgroundRepeat = "no-repeat";

j.addEventListener('click', function() {
    let audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
    j.style.borderColor = '#da0463';
    setTimeout(function() {
        j.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'j') {
        let audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        j.style.borderColor = '#da0463';
        setTimeout(function() {
            j.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button k
let k = document.querySelector("button.k");

k.style.backgroundImage = "url('./images/tom3.png')";
k.style.backgroundPosition = "Center";
k.style.backgroundSize = "contain";
k.style.backgroundRepeat = "no-repeat";

k.addEventListener('click', function() {
    let audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
    k.style.borderColor = '#da0463';
    setTimeout(function() {
        k.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'k') {
        let audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        k.style.borderColor = '#da0463';
        setTimeout(function() {
            k.style.borderColor = '#404b69';
        }, 200);
    }
});

// for button l
let l = document.querySelector("button.l");

l.style.backgroundImage = "url('./images/tom4.png')";
l.style.backgroundPosition = "Center";
l.style.backgroundSize = "contain";
l.style.backgroundRepeat = "no-repeat";

l.addEventListener('click', function() {
    let audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
    l.style.borderColor = '#da0463';
    setTimeout(function() {
        l.style.borderColor = '#404b69';
    }, 200);
});

document.body.addEventListener('keydown', function(e) {
    if (e.key == 'l') {
        let audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        l.style.borderColor = '#da0463';
        setTimeout(function() {
            l.style.borderColor = '#404b69';
        }, 200);
    }
});
