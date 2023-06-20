var noseX=0
var noseY=0
function preload(){

}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}
function modelLoaded() { 
    console.log('PoseNet foi inicializado'); 
}
function gotPoses(results){
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
}
function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(noseX,noseY,20)
}
function takeSnapshot(){
    save('myFilterImage.png')
}