
//Variables ---------------X
const projects= [["Logo Design","RAINBOW"],
["Illustrations","TABEAZY"],
["Motion Graphics","WATERLABS"],
["Calender Print","NORSKLING"],
["Logo Desgin","BRAND HYPOTHESIS"],
["Motion Graphics","TABEAZY"],
["Illustrations","HOMEMADE"],
["Branding","MOOG STUDIOS"],
["Motion Graphics","MASCHMEIJER"],
["Illustrations","MR.DEEP DEMOCRACY"],
["Branding","TURPLE"],
["Illustrations","GUITAR"],
["Line Art","WATCHES DUBAI"],
["Logo Desgin","VULTURE CULTURE"],
["Illustrations","BLUE&RED"],
["Logo Desgin","FLYING FINS"]]

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
        // console.log(angle)
        // console.log(Math.cos(radvalue))
    }
}

function fetch_project_details(){
    var project_tittle=document.getElementsByClassName("proj_tittle")
    var project_client=document.getElementsByClassName("client")
    for(let i=0;i<projects.length;i++){
        project_tittle[i].innerHTML=projects[i][0];
        project_client[i].innerHTML=projects[i][1];
        console.log("fetched project details") 
    }
}

function mirror_project_deatil_alignment(){
    // the project sections are outside circle2
    // get cirlce2 to loacte vertical split
    var check = document.getElementById("circle2")
    var rect = check.getBoundingClientRect(); // gets DOMrect values  
    // console.log(rect.top, rect.right, rect.bottom, rect.left);
    for(let i=1;i<=16;i++){ // loop to get all sections checked
        var proj_sec = document.getElementById("section"+i.toString())
        var box = proj_sec.getBoundingClientRect();
        // selected div and fetched its DOMrect values 
        centre_half=(rect.left+(rect.right-rect.left))/2
        // centre half is the y coordinate to split the viewport into two parts
        // checking sections location below
        var title = proj_sec.children[0] //title
        var client = proj_sec.children[1] //client
        if (box.left>centre_half && box.left>centre_half){
            title.style.transform="rotate(180deg)"
            title.style.transform+="translate(0%,-50%)"
            title.style.textAlign="left"
            client.style.textAlign="left" //remove hypen in attribute name, capitalize next letter
            client.style.transform="rotate(180deg)"
            client.style.transform+="translate(0%,100%)"
        }
        else {
            title.style.transform="rotate(0deg)"
            title.style.transform+="translate(0%,-50%)"
            title.style.textAlign="right"
            client.style.textAlign="right" //remove hypen in attribute name, capitalize next letter
            client.style.transform="rotate(0deg)" //use += for adding attributes to the transform
            client.style.transform+="translate(0%,0%)"
        }
    }
}

//Event Listeners ---------------X
window.addEventListener("resize", display);

window.addEventListener("scroll", mirror_project_deatil_alignment);

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
fetch_project_details();
mirror_project_deatil_alignment();