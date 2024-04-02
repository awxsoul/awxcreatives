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


//Event Listeners
window.addEventListener("resize", display);


  
//Circular scroll Function
window.addEventListener("scroll", ()=> {
    // to move to scroll top of the page(start of the disc) when it hits the bottom
    var maxscroll = document.body.scrollHeight/1.334
    console.log(document.body.scrollHeight/1.334)
    console.log(window.scrollY)
    if (this.oldScroll > this.scrollY){
        // print "false" if direction is down and "true" if up
        if (window.scrollY<1){
            window.scrollTo(0,maxscroll)
        }
        console.log("True")
        this.oldScroll = this.scrollY;
    }
    else {
        if (window.scrollY>maxscroll){
            window.scrollTo(0,0)
        }
        console.log("False")
        this.oldScroll = this.scrollY;
    }  
})

//Inital functions to run
display();