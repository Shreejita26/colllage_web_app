var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
if(Content=="take my selfie"){
    console.log("taking selfie----");
    speak();
}
   
}
 function speak() {
   
   speak_data="Taking your selfie in 5 seconds";
   var utterThis= new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);

    setTimeout(function(){
        img_id=selfie1;
take_snapshot();
save();
    },5000);

    setTimeout(function(){
        speak_data="Taking your selfie in 6 seconds";
        img_id=selfie2;
        take_snapshot();
        save();

    },6000);

    setTimeout(function(){
        speak_data="taking your selfie in 7 seconds";
        img_id=selfie3;
        take_snapshot();
        save();
    },7000);
}
Webcam.set({
    width:360,
    height:250,
    Image_format:'jpeg',
    png_quality:91
     });
function take_snapshot(){
     console.log(img_id);

     Webcam.snap(function(data_uri){
        if(img_id=selfie1){
            document.getElementById("result1").innerHTML="<img  id='selfie1'src="+data_uri+"/>";


        }
        if(img_id=selfie2){
            document.getElementById("result2").innerHTML="<img  id='selfie2'src="+data_uri+"/>";
        }
        if(img_id=selfie3){
            document.getElementById("result3").innerHTML="<img  id='selfie3'src="+data_uri+"/>";
        }

     });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
 }