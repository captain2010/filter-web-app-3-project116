noseX=0;
 noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();


poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        noseX=results[0].pose.mustache.x-50;
        noseX=results[0].pose.mustache.x-50;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot(){
    save('myFilterimage.png');
}

