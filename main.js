var war="";
var array=[];
function preload(){

}
function setup(){
    canvas=createCanvas(480,480);
    canvas.center();
    video=createCapture();
    video.hide();
}
function draw(){
   image(video,0,0,480,480);
   if(war !=""){
       od.dectect(video,gotresult);
       for(i=0;i<array.length;i++){
           document.getElementById("b1").innerHTML="status:-objects detected";
           document.getElementById("b2").innerHTML="status:- no of objects detected are "+array.length;
           fill("green");
           var p=floor(array[i].confidence*100);
           text(array[i].label+" "+p+" % ",array[i].x+15,array[i].y+15);
           nofill();
           stroke("green");
           rect(array[i].x,array[i].y,array[i].width,array[i].height)
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
function gotresult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        array=results
    }
}