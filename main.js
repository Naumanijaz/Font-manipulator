function draw(){
background("grey")
fill("pink")
stroke("pink")
text("Nauman",nosex,nosey)
textSize(difference)
}
function setup(){
video=createCapture(VIDEO)
video.size(550,500)
canvas=createCanvas(550,455)
canvas.position(560,60)
poseNet=ml5.poseNet(video,modelLoaded)
}
function preload(){

}
function modelLoaded(){
    console.log("poseNet is inialized")
    poseNet.on("pose",gotposes)
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
         nosex=results[0].pose.nose.x
         nosey=results[0].pose.nose.y
         rightwristx=results[0].pose.rightWrist.x
         leftwristx=results[0].pose.leftWrist.x
         difference=floor(leftwristx - rightwristx)
        document.getElementById("text_size").innerHTML="size of the text is "+difference
  }
}
var nosex=0
var nosey=0
var rightwristx=0
var leftwristx=0
var difference=0