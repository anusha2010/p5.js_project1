function preload(){

}

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(550,200);
    vid=createCapture(VIDEO);
    vid.hide();
}

color="";

function draw(){
    image(vid,0,0,600,600);
    tint(color);
}
function filter_color(){
    color=document.getElementById("enter_colour").value;
}
function take_snapshot(){
    Save("students_image.png");
}