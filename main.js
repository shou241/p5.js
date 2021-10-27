function preload()
{

}

function setup()
{
canvas=createCanvas(1000,1000);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video,0,0,1000,1000);
    circle(60, 60, 80)
    circle(940, 60, 80)
    circle(60, 940, 80)
    circle(940, 940, 80)
    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(61, 38, 910, 45);
    rect(920, 61, 45, 910)
    rect(40, 61, 45, 910)
    rect(61, 920, 910, 45);

}

function take_snapshot() {
    save("Frame.jpeg");

}
