noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://www.freeiconspng.com/uploads/real-mustache-png-14.png');

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    }
    
}
function draw() {
    image(video,0,0,300,300);
    image(clown_nose , noseX+5, noseY+5 ,50,50);

}

function take_snapshot(){
    save('ClownImage.png');
}

