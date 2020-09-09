
AOS.init({
    // Global settings:
    //disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    //startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    //initClassName: 'aos-init', // class applied after initialization
    //animatedClassName: 'aos-animate', // class applied on animation
    //useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    //disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    //debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    //throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    //offset: 120, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    //duration: 400, // values from 0 to 3000, with step 50ms
    //easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    //mirror: false, // whether elements should animate out while scrolling past them
    //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



var partJson = {

    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/ballong.png",
                "width": 200,
                "height": 500
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 20,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 10,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 12,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};
var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));


particlesJS.load('particles-js', jsonUri, function () {
    console.log('callback - particles.js config loaded');
});


var fanClicked = false;

$('.fan-1').click(function () {
    if (fanClicked)
        return;

    fanClicked = true;
    this.style.cursor = "auto";

    var fanInterval = setInterval(function () {
        $('.fan-1').toggle();
        $('.fan-2').toggle();
    }, 100);

    for (i = 1; i < 5; i++) {
        cakeTimeout(i);
    }
    setTimeout( function () {
        clearInterval(fanInterval);
    }, 4000);
});

function cakeTimeout(i) {
    setTimeout(function () {
        $('.cake-' + i).toggle();
        $('.cake-' + (i + 1)).toggle();
    }, 500 * i);
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('toot').play();
    //document.removeEventListener('click', musicPlay);
}