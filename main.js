console.log("This is a message from Snehasis - 'We all are human'");
song1 = "";
song2 = "";
var rightWristX=0;
var rightWristY=0;
var leftWristX=0;
var leftWristY=0;
function preload(){
 song1 = loadSound("music.mp3");
 song2 = loadSound("music2.mp3");
}
function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + " Right Wrist Y = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
console.log("Left Wrist X = " + leftWristX + " left Wrist Y = " + leftWristY);
        
    }
    else{
        console.error("*_* *-* *_* Try again. Houston, we have a problem! Try Again *_* *-* *_*")
    }
}
function draw(){
    image(video,0,0,600,500)
}