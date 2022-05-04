 var canvas = document.getElementById("canvas")
 var context = canvas.getContext("2d")
 var myevent = ""
 var lastx
 var lasty
 var currentx
 var currenty

canvas.addEventListener("mousedown", my_mousedowm)

 function my_mousedowm(e){
    myevent = "mousedown"

 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e){
     currentx = e.clientX - canvas.offsetLeft
     currenty = e.clientY - canvas.offsetTop
     if(myevent == "mousedown"){
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 3;
        context.moveTo(lastx , lasty);
        context.lineTo(currentx , currenty);
        context.stroke();
     }
    lastx = currentx
    lasty = currenty
 }