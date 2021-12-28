Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimg(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JDw6WDVVN/model.json',modelloaded);
function modelloaded(){
    console.log("Your Model is successfully loaded");
}
function check(){
    D=document.getElementById("img");
    Classifier.classify(D,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log("Error");
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";

    }
}