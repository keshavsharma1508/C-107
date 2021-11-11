//https://teachablemachine.withgoogle.com/models/HkOaav7Vi/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HkOaav7Vi/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function getResults(error,results){
    console.log("gotResult");
}