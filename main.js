img = "";

function preload(){
    img = loadImage('clocks.avif');
}

function setup(){
    canvas = createCanvas(800 , 500);
    canvas.center();
}

function draw(){
    image(img , 0 ,0,800 ,500);
}