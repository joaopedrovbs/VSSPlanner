// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// var serial = require()
var c = document.getElementById("fieldC");
var ctx = c.getContext("2d");

var widthP = 1125;
var heightP = 975;

var widthCm = 150;
var heightCm = 130;

var ratioPxCm = widthP/widthCm;

ctx.canvas.width  = widthP;
ctx.canvas.height = heightP;

var xCenter = widthP / 2;
var yCenter = heightP / 2;

function drawField() {

ctx.beginPath();

// Draw Center
ctx.arc(xCenter,yCenter,(20*ratioPxCm),0,2*Math.PI);

// Draw Central Line'
ctx.moveTo(xCenter,0);
ctx.lineTo(xCenter,heightP);

//Draw Right side goal area
ctx.moveTo(widthP,30*ratioPxCm);
ctx.lineTo((widthP)-(15*ratioPxCm),30*ratioPxCm);
ctx.lineTo((widthP)-(15*ratioPxCm),(30*ratioPxCm)+(70*ratioPxCm));
ctx.lineTo(widthP,(30*ratioPxCm)+(70*ratioPxCm));

//Draw Left side goal area
ctx.moveTo(0,30*ratioPxCm);
ctx.lineTo((15*ratioPxCm),30*ratioPxCm);
ctx.lineTo((15*ratioPxCm),(30*ratioPxCm)+(70*ratioPxCm));
ctx.lineTo(0,(30*ratioPxCm)+(70*ratioPxCm));

//Draw bottom-left +
ctx.moveTo(37.5*ratioPxCm,(heightP)-(21*ratioPxCm));
ctx.lineTo(37.5*ratioPxCm,(heightP)-(29*ratioPxCm));
ctx.moveTo(33.5*ratioPxCm,(heightP)-(25*ratioPxCm));
ctx.lineTo(41.5*ratioPxCm,(heightP)-(25*ratioPxCm));
//Draw center-left +
ctx.moveTo(37.5*ratioPxCm,(yCenter)-(4*ratioPxCm));
ctx.lineTo(37.5*ratioPxCm,(yCenter)+(4*ratioPxCm));
ctx.moveTo(33.5*ratioPxCm,yCenter);
ctx.lineTo(41.5*ratioPxCm,yCenter);
//Draw top-left +
ctx.moveTo(37.5*ratioPxCm,(21*ratioPxCm));
ctx.lineTo(37.5*ratioPxCm,(29*ratioPxCm));
ctx.moveTo(33.5*ratioPxCm,(25*ratioPxCm));
ctx.lineTo(41.5*ratioPxCm,(25*ratioPxCm));
//Draw bottom-right +
ctx.moveTo((widthP)-(37.5*ratioPxCm),(heightP)-(21*ratioPxCm));
ctx.lineTo((widthP)-(37.5*ratioPxCm),(heightP)-(29*ratioPxCm));
ctx.moveTo((widthP)-(33.5*ratioPxCm),(heightP)-(25*ratioPxCm));
ctx.lineTo((widthP)-(41.5*ratioPxCm),(heightP)-(25*ratioPxCm));
//Draw center-right +
ctx.moveTo((widthP)-(37.5*ratioPxCm),(yCenter)-(4*ratioPxCm));
ctx.lineTo((widthP)-(37.5*ratioPxCm),(yCenter)+(4*ratioPxCm));
ctx.moveTo((widthP)-(33.5*ratioPxCm),yCenter);
ctx.lineTo((widthP)-(41.5*ratioPxCm),yCenter);
//Draw top-right +
ctx.moveTo((widthP)-(37.5*ratioPxCm),(21*ratioPxCm));
ctx.lineTo((widthP)-(37.5*ratioPxCm),(29*ratioPxCm));
ctx.moveTo((widthP)-(33.5*ratioPxCm),(25*ratioPxCm));
ctx.lineTo((widthP)-(41.5*ratioPxCm),(25*ratioPxCm));

ctx.strokeStyle="white";
ctx.lineWidth=0.5*ratioPxCm;
ctx.stroke();
}
drawField();
