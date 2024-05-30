
//Variables ---------------X

//Functions ---------------X

function display(){ //to make responsive window, using diagonal of the circle 
    var diagonal_radius=((window.innerHeight)**2 + (window.innerWidth)**2)**(1/2)
    document.getElementById("circle").style.height = diagonal_radius+"px";
    document.getElementById("circle").style.width = diagonal_radius+"px";
}

function roatation_of_sections(){ //rotation and arrrangement of sections
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

//Event Listeners ---------------X
window.addEventListener("resize", display);

//Circular Bi-directional Infinite Scroll Function
window.addEventListener("scroll", ()=> {
    // to move to scroll top of the page(start of the disc) when it hits the bottom
    this.maxScroll = document.body.scrollHeight/1.334
        //maxScroll and oldScroll are variable for this function
        //maxScroll hold the max near value to end
        //oldScroll holds previous value
    if (this.oldScroll > this.scrollY){
        // print "false" if direction is down and "true" if up
        if (window.scrollY<1){
            window.scrollTo(0,this.maxScroll)
        }
        this.oldScroll = this.scrollY;
    }
    else {
        if (window.scrollY>this.maxScroll){
            window.scrollTo(0,0)
        }
        this.oldScroll = this.scrollY;
    }  
})

//Inital functions to run ---------------X
display();
roatation_of_sections();
