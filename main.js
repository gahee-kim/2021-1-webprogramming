dom = document.getElementById("myCanvas");
// for mobile devices
dom.ontouchstart = startDrawing;
dom.ontouchmove = keepDrawing;
dom.ontouchend = stopDrawing;
// for desktop PC
dom.onmousedown = startDrawing;
dom.onmousemove = keepDrawing;
dom.onmouseup = stopDrawing;