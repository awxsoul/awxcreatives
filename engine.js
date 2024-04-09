
const centrelogo = document.getElementById("centre_logo")

//Functions ---------------X
function display(){
    var digagonal_radius=((window.innerHeight)**2 + (window.innerWidth)**2)**(1/2)
    document.getElementById("circle").style.height = digagonal_radius+"px";
    document.getElementById("circle").style.width = digagonal_radius+"px";
}

function roatation_of_sections(){ //and arrrangement of sections
    for (let i=1; i<17; i++){
        var block = document.getElementById("section"+i)
        angle=(360/16*i)
        block.style.transform="rotate("+angle+"deg)"
        var pi = Math.PI
        var radvalue = angle*(pi/180); //convert deg to radian
        block.style.left=(-Math.cos(radvalue))*190+"%" //cos(randians)
        block.style.top=(-Math.sin(radvalue))*190+"%" //cos(randians)
        console.log(angle)
        console.log(Math.cos(radvalue))
    }
}

function poprotate(){
    centrelogo.style.height=44+"%"
}

function project_details(){
    for (let i=1; i<17; i++){
        
    }
    
}

//Event Listeners ---------------X
window.addEventListener("resize", display);
centrelogo.addEventListener("mouseenter", poprotate);

    //Circular Bi-directional Infinite Scroll Function
window.addEventListener("scroll", ()=> {
    // to move to scroll top of the page(start of the disc) when it hits the bottom
    this.maxScroll = document.body.scrollHeight/1.334
    //maxScroll and oldScroll are variable for this function
        //maxScroll hold the max near value to end
        //oldScroll holds previous value
    // console.log(document.body.scrollHeight/1.334)
    // console.log(window.scrollY)
    if (this.oldScroll > this.scrollY){
        // print "false" if direction is down and "true" if up
        if (window.scrollY<1){
            window.scrollTo(0,this.maxScroll)
        }
        // console.log("True")
        this.oldScroll = this.scrollY;
    }
    else {
        if (window.scrollY>this.maxScroll){
            window.scrollTo(0,0)
        }
        // console.log("False")
        this.oldScroll = this.scrollY;
    }  
})

//Inital functions to run 
display();
roatation_of_sections();
centrewheel();