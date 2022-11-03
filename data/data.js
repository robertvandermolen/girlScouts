var theData=[1,2,3];
var theNames=['cookies','calendars','beanies'];
var w=400;
var h=400;

function randomColor(){
var a=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
var c=Math.floor(Math.random() * 256);
var theColor='rgb('+a.toString()+','+b.toString()+','+c.toString()+')'
return theColor
}

function drawData(){
// draw the data here!

var maxum=Math.max(... theData);
var howMany=theData.length;

//size calculations
var startX=w/25;
var endX=w-w/100;
var bottomY=h-h/15;
var topY=h/50;
var lengthX=endX-startX;
var lengthY=bottomY-topY;
var widthX=lengthX/howMany;
var widthY=lengthY/maxum;


// draw axis
ctx.beginPath();
ctx.moveTo(startX, bottomY);
ctx.lineTo(startX, topY);
ctx.moveTo(startX,bottomY);
ctx.lineTo(endX,bottomY);
ctx.stroke();


//draw data
for(i=0;i<howMany;i++){
//draw bars
ctx.fillStyle=randomColor();
ctx.fillRect(startX+i*widthX,bottomY,widthX,-theData[i]*widthY)
//draw numbers on line
ctx.fillStyle='black';
ctx.font = "10px Arial";
ctx.textAlign='start';
ctx.fillText(theData[i],0,bottomY-theData[i]*widthY);
//name of categories
ctx.textAlign='center';
ctx.fillText(theNames[i],(2*startX+(2*i+1)*widthX)/2,h);
}

}


