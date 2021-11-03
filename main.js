var war="";
var array=[];
function preload(){

}
function setup(){
    canvas=createCanvas(680,780);
    canvas.center();
    video=createCapture();
    video.hide();
}
function draw(){
   image(video,0,0,680,780);
   if(war !=""){
       od.dectect(video,gotresult);
       for(i=0;i<array.length;i++){
           document.getElementById("b1").innerHTML="status:-objects detected";
           document.getElementById("b2").innerHTML="status:- no of objects detected are "+array.length;
       }
   }
}
function start(){
    od=ml5.objectDetector('cocossd',ml)
    document.getElementById("b1").innerHTML="status:-detecting objects ";
}
function ml(){
    console.log("model loaded");
    war=true;
}
function gr(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        array=results
    }
}