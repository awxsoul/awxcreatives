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

function tr(){
    document.getElementById("circle4").style.backgroundColor="black";
}

//Event Listeners
window.addEventListener("resize", display);
document.getElementById("projects").addEventListener("onclick",tr);
//Inital funations to run
display();

console.log(window.scrollMaxY)
window.addEventListener("scroll", ()=> {
    console.log(window.scrollY)

    if (window.scrollY>3000){
        window.scrollTo(0,0)
    }
}
)
