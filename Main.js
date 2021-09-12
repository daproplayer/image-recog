 
 Webcam.set({
  width: 350,
  height: 300,
  image_format:'png',
  png_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
console.log(Webcam);
function takesnapshot() {
  
  Webcam.snap(function (anyvar) {
    
  
    document.getElementById("result").innerHTML = "<img id ='capturedimage' src = '"+anyvar+"'>";
  
  });
}

console.log(ml5.version);
classifier = ml5.imageclassifier("",modelLoaded);
function modelLoaded() {
  console.log("modelLoaded");
  console.log(classifier);
}

function check() {
  img = document.getElementById("capturedimage");
  classifier.classify(img,gotresult);
}

function gotresult(error,result) {
  if (error) {
    console.error(error);
  }
  else{
    console.log(result);
    document.getElementById("resultobjectname").innerHTML = results[0].label;
    document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}