$(document).ready(function () {
    $(".toggle-manu").click(function (e) {
        $("nav").toggleClass("active-nav");
    });
    $(".close").click(function (e) {
        $("nav").removeClass("active-nav");
    });
    $(".back-to-top").click(function (e) {
        $("html").animate({ "scrollTop": "0" });
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $("header").addClass("header-active");
        $(".back-to-top").fadeIn();
    }
    else {
        $("header").removeClass("header-active");
        $(".back-to-top").fadeOut();
    }
});

// THEME SWITCHER
$(document).ready(function () {
    $(".theme-switcher ul li").click(function (e) {
        var color = $(this).attr("class");
        $(":root").attr("class", color);
    });
});


//   slider
$(document).ready(function () {

    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

// counter
var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

// theme-switcher
$(document).ready(function () {
    $(".theme-switcher a").click(function (e) {
        $(this).toggleClass("rorate-switcher border-switcher");
        $(".theme-switcher a i").toggleClass("rorate-switcher");
        $(".theme-switcher").toggleClass("on-switcher");

    });
});


// mouse effct
$(document).ready(function () {
    // Configuration sparkles
    const particleCount = 100; // Number of particles
    const particleSize = 3; // Size of particles in pixels
    const particleColor = "#ffffff"; // Color of particles
    const particleSpeed = 1; // Speed of particles

    // Particle container
    const particleContainer = document.getElementById("particle-container");

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particleContainer.appendChild(particle);
    }

    // Handle mouse move events
    document.addEventListener("mousemove", function (event) {
        const particles = document.getElementsByClassName("particle");
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Move particles towards the mouse position
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i];
            const particleX = particle.offsetLeft + particleSize / 2;
            const particleY = particle.offsetTop + particleSize / 2;
            const dx = mouseX - particleX;
            const dy = mouseY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const moveX = (dx / distance) * particleSpeed;
            const moveY = (dy / distance) * particleSpeed;

            particle.style.left = particle.offsetLeft + moveX + "px";
            particle.style.top = particle.offsetTop + moveY + "px";

            // Adjust opacity based on distance
            const maxDistance = Math.sqrt(
                (window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2
            ); // Maximum distance from the center of the screen
            const opacity = 1 - distance / maxDistance;
            particle.style.opacity = opacity;
        }

        // Create a sparkle at the mouse position
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = mouseX + "px";
        sparkle.style.top = mouseY + "px";
        particleContainer.appendChild(sparkle);

        // Remove the sparkle after a short delay
        setTimeout(function () {
            particleContainer.removeChild(sparkle);
        }, 1000);
    });

});

// 
$(document).ready(function () {


    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 380,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
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
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
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
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
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
    });


});