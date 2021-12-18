objects = [];
status = "";

function preload(){
video = createVideo('video.mp4');
video.hide();
}
function setup(){
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
}
function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
object_name = document.getElementById("object_name").value;

}
function modelLoaded(){
console.log("Model Loaded!");
status = true;
}
function gotResult(error,results)
{
if(error)
{
console.log(error);

}
console.log(results);
objects = results;
}
function draw(){
image(video, 0,0, 380, 380);
if(status != "")
{
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML = "status:objectsdetected";
}
}
}