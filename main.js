function setup(){
    video = createCapture(VIDEO);
video.size = (500, 500);
video.position(50,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

canvas = createCanvas(500, 500);
canvas.position(700,150);
}

function modelLoaded(){
    console.log('poseNet is initialized');
    
    }
    
    function gotPoses(results){
        if(results.length > 0){
    console.log(results);
        }
    }