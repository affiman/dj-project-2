song = "";

function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}


function setup(){
canvas = createCanvas(500,600);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,500,600);
}


function play(){
 
    song.play();

}