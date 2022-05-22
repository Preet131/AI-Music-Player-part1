song1 = "";
song2 = "";


function preload() {
    song1 = loadSound("song1.mp3"); // song name = Deewana kar raha hai
    song2 = loadSound("song2.mp3");// song name = Heat Waves

}
function setup() {
    canvas = createCanvas(600, 400);
    background('white');
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 600, 400);

}

