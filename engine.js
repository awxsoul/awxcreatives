var scrollvalue=0;
var scrolldirection=1;
var scrolltouch=0;
//scrolltouch idea did not work

//Functions
function dig_rad(){
    return ((window.innerHeight)**2 + (window.innerWidth)**2)**(1/2);
}
function display(){
    document.getElementById("circle").style.height = dig_rad()+"px";
    document.getElementById("circle").style.width = dig_rad()+"px";
}
function spin(){
    gsap.to(".projsec", {
        rotation: 36,
        duration: 1
    });   
}

function fixScrollBehavior(elem) {
    elem.addEventListener('scroll', (e) => {
        console.log('scrolling');
    });

    let MOUSE_OVER = false;
    elem.addEventListener('wheel', (e) => {
        if (MOUSE_OVER) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
            return false;
        }
    });

    elem.addEventListener('mouseenter', () => {
        MOUSE_OVER = true;
    });
    elem.addEventListener('mouseleave', () => {
        MOUSE_OVER = false;
    });

    elem.addEventListener('wheel', (e) => {
        let delta = e.wheelDelta;
        if (delta > 0) {
            if(scrolltouch==0){
                scrolldown(16)
                scrolltouch=0;
            }
        } else {
            if(scrolltouch==0){
                scrollup(16)
                scrolltouch=0;
            }
        }
    });
}

function scrolldefault(){
    setInterval(function(){
        if(scrolldirection==1){
            scrolldown(22.5);
            scrolltouch=0;
        } else {
            scrollup(22.5);
            scrolltouch=0;
        }
    
    },2000);
}
function scrolldown(speed){
    console.log("down"+scrollvalue);
    scrolldirection=1;
            scrollvalue+=speed;
            gsap.to(".projsec", {
                rotation: scrollvalue,
                duration: 1,
                ease:"none"
            });
}
function scrollup(speed){
    console.log("up"+scrollvalue);
    scrolldirection=0;
            scrollvalue-=speed;
            gsap.to(".projsec", {
                rotation: scrollvalue,
                duration: 1,
                ease:"none"
            });
}

//Event Listeners
window.addEventListener("resize", display);

//Inital funations to run
display();
scrolldefault()
fixScrollBehavior(window);

