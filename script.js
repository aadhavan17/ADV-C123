function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    
    canvas = createCanvas(450, 450)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, model_loaded); 
    poseNet.on('pose', gotPoses)
}

function model_loaded()
{
    console.log("model is loaded")
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}