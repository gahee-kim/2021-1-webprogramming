var pos = {
    drawable: false,
    x: -1,
    y: -1
};
var canvas, ctx;

var color = "black";
 
window.onload = function(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    initialize();
 
    canvas.addEventListener("mousedown", listener);
    canvas.addEventListener("mousemove", listener);
    canvas.addEventListener("mouseup", listener);
    canvas.addEventListener("mouseout", listener);
}
 
function listener(event){
    switch(event.type){
        case "mousedown":
            initDraw(event);
            break;
 
        case "mousemove":
            if(pos.drawable)
                draw(event);
            break;
 
        case "mouseout":
        case "mouseup":
            finishDraw();
            break;
    }
}

function initialize() {
    ctx.clearRect(0,0,408,550);
    ctx.beginPath();
    ctx.rect(0,0,408,550);
    ctx.strokeStyle = 'grey';
    ctx.fillStyle = "ivory";
    ctx.fill();
    ctx.lineWidth = 0.5;
    //for(i=1;i<=10;i++) {
    //    ctx.moveTo(8,i*53);
    //    ctx.lineTo(400, i*53);
    //}
    ctx.stroke();
}

function initDraw(event){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    pos.drawable = true;
    var coors = getPosition(event);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.moveTo(pos.X, pos.Y);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
}
 
function draw(event){
    var coors = getPosition(event);
    ctx.lineTo(coors.X, coors.Y);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.stroke();
}

function finishDraw(){
    pos.drawable = false;
    pos.X = -1;
    pos.Y = -1;
}
 
function getPosition(event){
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    return {X: x, Y: y};
}

function save() {
    var localStorage = window.localStorage;
    if (!localStorage) {
    // local storage is not supported by this browser.
    // do nothing
    }
    else {
    localStorage.canvas = canvas.toDataURL();
    }
}

function restore() {
    var localStorage = window.localStorage;
    if (!localStorage) {
    // local storage is not supported by this browser.
    // do nothing
    }
    else{
    var img = new Image();
    img.src = localStorage.canvas;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
    }
}

function red() { color = 'rgb(243, 46, 46)'; }
function coral() { color = 'coral'; }
function orange() { color = 'sandybrown'; }
function yellow() { color = 'gold'; }
function ygreen() { color = 'yellowgreen'; }
function green() { color = 'rgb(61, 148, 61)'; }
function skyblue() { color = 'rgb(99, 222, 238)'; }
function blue() { color = 'rgb(33, 62, 189)'; }
function rpurple() { color = 'rebeccapurple'; }
function purple() { color = 'mediumorchid'; }
function pink() { color = 'pink'; }
function white() { color = 'white'; }
function grey() { color = 'lightslategray'; }
function black() { color = 'black'; }
