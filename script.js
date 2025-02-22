// Initial path definition

var path = "M 10 100 Q 500 100 990 100"
var finalpath = "M 10 100 Q 500 100 990 100"

// Select the div containing the SVG

var string = document.querySelector("#string")


// Update path on mouse move

string.addEventListener("mousemove",function(dets){

    // Update path dynamically based on mouse position
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    // Animate the path change using GSAP
    gsap.to("svg path",{
        attr: {d: path},
        duration:0.2,
        ease:"power3.out"
    })
})

// Reset path when mouse leaves the div
string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)" 

    })
})