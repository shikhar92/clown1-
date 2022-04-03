function setup(){

c1=createCanvas(400,300);
c1.center();
v1=createCapture(VIDEO);
v1.hide();

pn=ml5.poseNet(v1, modelLoaded)
pn.on('pose',gotPoses)

}

nosex=0;
nosey=0;

function gotPoses(results){

if(results.length > 0)
{

nosex=results[0].pose.nose.x-130;
nosey=results[0].pose.nose.y-135;

console.log("nosex= "+nosex)
console.log("nosey= "+nosey)

}

}


function modelLoaded(){

console.log("model is loaded");

}
function draw(){

image(v1,0,0,400,300);
image(cn,nosex,nosey,30,30)


}

function takephoto(){

save("joker.png");

}

function preload()
{

cn=loadImage('https://i.postimg.cc/SNWGcHhN/clownnose.png')

}