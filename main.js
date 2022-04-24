function take_Snapshot() {
    save("student_name.png");
}

function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(255, 255, 255)
    stroke(0, 128, 0)
    circle(120, 35, 70)
    fill(255, 255, 255)
    stroke(0, 125, 0)
    circle(120, 105, 70)
    fill(0, 0, 0)
    stroke(0, 128, 0)
    circle(120, 35, 30)
    fill(0, 0, 0)
    stroke(0, 125, 0)
    circle(120, 105, 30)

}