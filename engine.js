//Functions
function dig_rad(){
    return ((window.innerHeight)**2 + (window.innerWidth)**2)**(1/2);
}
function display(){
    document.getElementById("circle").style.height = dig_rad()+"px";
    document.getElementById("circle").style.width = dig_rad()+"px";
}

//Event Listeners
window.addEventListener("resize", display);


//Inital funations to run
display();
