//Data
var w=window.innerWidth-25;
var h=window.innerHeight-25;


console.log(h)
var moov=0;
var loc=[w/100,h/20];
var helpoop=h;

//scout attributes 
//entries:
//0-skin tone
//1-hair color
//2-hair style
//3-level
//4-pants
var scoutAt=[0,0,0,0,0];

//colors for easy use
let peach='#FFE5B4';
let redBrown='#d3572f';
let leafGreen='#64e864';
let peachShadow='#DE7E5D';
let kBrown='#C0AD8C';
let shadowWhite='#808080';
let darkKBrown='#a88c60';
let pinker='#FFC0CB';
const floorColor='#D2B04C';
const plankColor='black';

//wood grain
var woodGrain=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//get random numbers for wood grain
for(g=0;g<36;g++){
woodGrain[g]=Math.random();
//console.log(woodGrain[g]);

}



//Basic Draw Function
function drawIt(ctx,sw,color,x,y){
//sw= width of a block
//x and y are are my block locations 
//color is a color


ctx.fillStyle=color;
ctx.fillRect(x*sw,y*sw,sw,sw);

}


//Girl Scout


//Face
const faceColor=[peachShadow,peach,'black','black','black'];
const scoutFace=[
//skinShadow
[
[10,3],[11,3],
[9,4],
[7,5],[8,5],
[5,6],[6,6],
[5,7],
[6,8],
[7,9],[8,9],[11,9]
],
//skin
[
[10,4],[11,4],[12,4],
[10,5],[11,5],[13,5],
[7,6],[8,6],[10,6],[11,6],[13,6],
[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],
[7,8],[8,8],[9,8],[12,8],
[9,9],[10,9]
],
//eyes
[
[9,5],[12,5],
[9,6],[12,6]
],
//mouth
[
[10,8],[11,8]
],
//chin
[
[14,5],
[4,6],[14,6],
[4,7],[14,7],
[5,8],[13,8],
[6,9],[12,9],
[7,10],[8,10],[9,10],[10,10],[11,10]
]
];

//Hair
const hairColor=['black','purple'];
//hair type 0
const scoutHair=[
//main hair
[
[7,0],[8,0],[9,0],[10,0],[11,0],
[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],
[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],
[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[12,3],[13,3],
[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[13,4],
[4,5],[5,5],[6,5],[7,5],[8,5],
[4,5],[5,5],[6,5],
[2,6],[3,6],
[1,7],[2,7],[3,7],[4,7],
[1,8],[2,8],[3,8],
[0,9],[1,9],[2,9],
[0,10],[1,10],
[0,11]
],
//hair tie
[
[3,5],[4,6]
]
];
//hair type 1 (short)
const scoutHair1=[
//main hair
[
[7,0],[8,0],[9,0],[10,0],[11,0],
[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],
[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],
[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[12,3],[13,3],
[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[13,4],
[4,5],[5,5],[6,5],[7,5],[8,5],
[4,5],[5,5],[6,5]
],
//hair tie
[
[]
]
];

//hair type 2 (bun)
const scoutHair2=[
//main hair
[
[7,0],[8,0],[9,0],[10,0],[11,0],
[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],
[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],
[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[12,3],[13,3],
[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[13,4],
[4,5],[5,5],[6,5],[7,5],[8,5],
[4,5],[5,5],[6,5],
[2,2],[3,2],
[1,3],[2,3],
[1,4],[2,4],
[1,5],[2,5],
[2,6],[3,6]
],
//hair tie
[
[3,5],[4,6]
]
];

//body
const boodyColor=['black',kBrown,darkKBrown,shadowWhite,shadowWhite];
const scoutBody=[
//black
[
[6,11],[12,11],
[5,12],[13,12],
[4,13],[14,13],
[4,14],[10,14],[14,14],
[4,15],[14,15],
[4,16],[10,16],[14,16],
[4,17],[14,17],
[4,18],[10,18],[14,18],
[4,19],[14,19],
[4,20],[10,20],[14,20],
[10,21],
[5,22],[6,22],[7,22],[8,22],[9,22],[10,22],[11,22],[12,22],[13,22],
[5,23],[6,23],[7,23],[8,23],[9,23],[10,23],[11,23],[12,23],[13,23],
[4,24],[5,24],[6,24],[7,24],[8,24],[9,24],[10,24],[11,24],[12,24],[13,24],[14,24],
[3,25],[4,25],[5,25],[6,25],[7,25],[8,25],[9,25],[10,25],[11,25],[12,25],[13,25],[14,25],[15,25]
],

//kBrown
[
[5,13],[6,13],[7,13],[12,13],
[5,14],[6,14],[7,14],[8,14],[11,14],[12,14],
[5,15],[6,15],[7,15],[8,15],[9,15],[10,15],[11,15],[12,15],
[5,16],[7,16],[8,16],[9,16],[11,16],[12,16],
[5,17],[7,17],[8,17],[9,17],[10,17],[11,17],[12,17],
[5,18],[6,18],[8,18],[9,18],[11,18],[12,18],
[6,19],[7,19],[9,19],[10,19],[11,19],[12,19],
[5,20],[6,20],[7,20],[8,20],[9,20],[11,20],[12,20]
],
//shadow kBrown
[
[6,12],[7,12],[12,12],
[8,13],[11,13],[13,13],
[8,14],[9,14],[13,14],
[13,15],
[6,16],[13,16],
[6,17],[13,17],
[7,18],[13,18],
[5,19],[8,19],[13,19],
[5,20],[6,20],[11,20],[12,20],[13,20],
[5,21],[6,21],[7,21],[8,21],[9,21],[11,21],[13,21],[12,21],
],
//white
[
[8,11],[9,11],[10,11],[9,12],[10,12]
],
//shadowWhite
[
[7,11],[11,11],[8,12],[11,12],[9,13],[10,13]
]
];
const scoutBody1=[
//black
[
[6,11],[12,11],
[5,12],[13,12],
[4,13],[14,13],
[4,14],[10,14],[14,14],
[4,15],[14,15],
[4,16],[10,16],[14,16],
[4,17],[14,17],
[4,18],[10,18],[14,18],
[4,19],[14,19],
[4,20],[10,20],[14,20],
[10,21],
[5,22],[6,22],[7,22],[8,22],[9,22],[10,22],[11,22],[12,22],[13,22],
[5,23],[6,23],[7,23],[8,23],[9,23],[10,23],[11,23],[12,23],[13,23],
[5,24],[6,24],[7,24],[8,24],[9,24],[10,24],[11,24],[12,24],[13,24],
[5,25],[6,25],[7,25],[8,25],[9,25],[10,25],[11,25],[12,25],[13,25]
],

//kBrown
[
[5,13],[6,13],[7,13],[12,13],
[5,14],[6,14],[7,14],[8,14],[11,14],[12,14],
[5,15],[6,15],[7,15],[8,15],[9,15],[10,15],[11,15],[12,15],
[5,16],[7,16],[8,16],[9,16],[11,16],[12,16],
[5,17],[7,17],[8,17],[9,17],[10,17],[11,17],[12,17],
[5,18],[6,18],[8,18],[9,18],[11,18],[12,18],
[6,19],[7,19],[9,19],[10,19],[11,19],[12,19],
[5,20],[6,20],[7,20],[8,20],[9,20],[11,20],[12,20]
],
//shadow kBrown
[
[6,12],[7,12],[12,12],
[8,13],[11,13],[13,13],
[8,14],[9,14],[13,14],
[13,15],
[6,16],[13,16],
[6,17],[13,17],
[7,18],[13,18],
[5,19],[8,19],[13,19],
[5,20],[6,20],[11,20],[12,20],[13,20],
[5,21],[6,21],[7,21],[8,21],[9,21],[11,21],[13,21],[12,21],
],
//white
[
[8,11],[9,11],[10,11],[9,12],[10,12]
],
//shadowWhite
[
[7,11],[11,11],[8,12],[11,12],[9,13],[10,13]
]
];


//Badges
const badgesColor=['red','blue','green'];
const badges=[
//red
[
[7,17]
],
//blue
[
[12,14]
],
//green
[
[5,15]
]
];
const badges1=[
//red
[
[7,17],[12,18]
],
//blue
[
[12,14],[8,18]
],
//green
[
[5,15],[8,15]
]
];
const badges2=[
//red
[
[7,17],[12,18],[7,13]
],
//blue
[
[12,14],[8,18],[12,16]
],
//green
[
[5,15],[8,15],[11,12]
]
];

//Arms

//left arm
const armColor=['black',peach,peachShadow,shadowWhite];
const leftArm=[
[
[5,14],
[5,15],
[5,16],
[5,17],
[5,18],
[4,19],[5,19],
[3,20],[5,20],
[3,21],
[4,22],[5,22]
],
[
[4,20]
],
[
[4,21],[5,21]
],
[
[4,13],
[4,15],
[4,18],
[5,13],
[4,14],
[4,16],
[4,17]
]
];

//right arm
const rightArm=[
[
[13,13],
[13,14],
[13,15],
[13,16],
[13,17],
[13,18],
[13,19],[15,19],
[15,20],[13,20],
[15,21],
[14,22],[13,22]
],
[
[14,20]
],
[
[14,21],[13,21]
],
[
[14,13],
[14,14],
[14,15],
[14,16],
[14,17],
[14,18]
]
];


//Legs
const legColor=['black',peach,peachShadow];

//left leg
const leftLeg=[
[
[5,26],[8.26],
[5,27],[8.27],
[5,28],[6,28],[7,28],[8.28],
[6,29],[7,29],[8.29],
],
[
[6,27],[7,27]
],
[
[6,26],[7,26]
]
];

//right leg
const rightLeg=[
[
[10,26],[13,26],
[10,27],[13,27],
[10,28],[11,28],[12,28],[13,28],
[11,29],[12,29],[13,29],
],
[
[11,27],[12,27]
],
[
[11,26],[12,26]
]
];


//draw floor
function drawRoomFloor(){
//draw the floor
ctx.fillStyle=floorColor;
ctx.fillRect(0,0,w,helpoop);

//draw wood grain
ctx.beginPath();
ctx.lineWidth='1';
ctx.strokeStyle='white';
ctx.moveTo(0,5);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
woodGrain[g*6]*w,
woodGrain[g*6+1]*helpoop,
woodGrain[g*6+2]*w,
woodGrain[g*6+3]*helpoop,
woodGrain[g*6+4]*w,
woodGrain[g*6+5]*helpoop
);
}
ctx.moveTo(w,5*helpoop/6);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
woodGrain[g*6]*w,
Math.floor(woodGrain[g*6+1]*helpoop-5*helpoop/6)%Math.floor(helpoop),
woodGrain[g*6+2]*w,
woodGrain[g*6+3]*helpoop-5*helpoop/6,
woodGrain[g*6+4]*w,
woodGrain[g*6+5]*helpoop-5*helpoop/6
);
}
ctx.moveTo(w,helpoop/6);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
Math.floor(woodGrain[g*6]*w+w/8)%Math.floor(w),
woodGrain[g*6+1]*helpoop-3*helpoop/6,
woodGrain[g*6+2]*w+w/8,
woodGrain[g*6+3]*helpoop-3*helpoop/6,
woodGrain[g*6+4]*w+w/8,
woodGrain[g*6+5]*helpoop-3*helpoop/6
);
}
ctx.moveTo(w/2,helpoop);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
woodGrain[g*6]*w,
Math.floor(woodGrain[g*6+1]*helpoop+5*helpoop/6)%Math.floor(helpoop),
woodGrain[g*6+2]*w,
woodGrain[g*6+3]*helpoop+5*helpoop/6,
woodGrain[g*6+4]*w,
(woodGrain[g*6+5]*helpoop+5*helpoop/6)
);
}
ctx.moveTo(w,helpoop);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
woodGrain[g*6]*w,
Math.floor(woodGrain[g*6+1]*helpoop+5*helpoop/6)%Math.floor(helpoop),
woodGrain[g*6+2]*w,
woodGrain[g*6+3]*helpoop+4*helpoop/6,
woodGrain[g*6+4]*w,
(woodGrain[g*6+5]*helpoop+2*helpoop/6)
);
}
ctx.moveTo(0,helpoop/2);
for(g=0;g<6;g++){
ctx.bezierCurveTo(
woodGrain[g*6]*w/4,
Math.floor(woodGrain[g*6+1]*helpoop+5*helpoop/6)%Math.floor(helpoop),
woodGrain[g*6+2]*w/6,
woodGrain[g*6+3]*helpoop+4*helpoop/5,
woodGrain[g*6+4]*w/2,
(woodGrain[g*6+5]*helpoop+2*helpoop/4)
);
}
ctx.stroke();

//wood planks
ctx.beginPath();
ctx.lineWidth='1';
ctx.strokeStyle=plankColor;
for(qq=0;qq<19;qq++){
ctx.moveTo(0,(qq+1)*helpoop/20);
ctx.lineTo(w,(qq+1)*helpoop/20);
}
for(qq=0;qq<5;qq++){
ctx.moveTo((qq+1)*w/6,0);
ctx.lineTo((qq+1)*w/6,(qq+1)*helpoop/20);
}
for(qq=0;qq<5;qq++){
ctx.moveTo(w-(qq+1)*w/6+w/20,6*helpoop/20);
ctx.lineTo(w-(qq+1)*w/6+w/20,(qq+7)*helpoop/20);
}
for(qq=0;qq<5;qq++){
ctx.moveTo((qq+1)*w/6-w/25,12*helpoop/20);
ctx.lineTo((qq+1)*w/6-w/25,(qq+13)*helpoop/20);
}
ctx.moveTo(w-w/30,16*helpoop/20);
ctx.lineTo(w-w/30,helpoop);

ctx.moveTo(w-w/25,10*helpoop/20);
ctx.lineTo(w-w/25,12*helpoop/20);

ctx.moveTo(w/30,16*helpoop/20);
ctx.lineTo(w/30,helpoop);

ctx.moveTo(w/25,10*helpoop/20);
ctx.lineTo(w/25,12*helpoop/20);

ctx.moveTo(w-w/30,8*helpoop/20);
ctx.lineTo(w-w/30,10*helpoop/20);

ctx.moveTo(w-w/25,5*helpoop/20);
ctx.lineTo(w-w/25,7*helpoop/20);

ctx.moveTo(w/2,8*helpoop/20);
ctx.lineTo(w/2,10*helpoop/20);

ctx.moveTo(w/2,helpoop-3*helpoop/20);
ctx.lineTo(w/2,helpoop);

ctx.moveTo(w/2,4*helpoop/20);
ctx.lineTo(w/2,6*helpoop/20);

ctx.moveTo(w/6,2*helpoop/20);
ctx.lineTo(w/6,8*helpoop/20);
ctx.stroke();

}


//draw Scout
function drawScout(){
//hair color
if(scoutAt[1]==0){
hairColor[0]='black';
}
if(scoutAt[1]==1){
hairColor[0]='#faf0be';
}
if(scoutAt[1]==2){
hairColor[0]='#5A3825';
}
if(scoutAt[1]==3){
hairColor[0]='blue';
}

//face color
if (scoutAt[0]==0){
faceColor[1]=peach;
faceColor[0]=peachShadow;
}
if (scoutAt[0]==1){
faceColor[1]='#B06C49';
faceColor[0]='#743D2B';
}

//arm color
if (scoutAt[0]==0){
armColor[1]=peach;
armColor[2]=peachShadow;
}
if (scoutAt[0]==1){
armColor[1]='#B06C49';
armColor[2]='#743D2B';
}

//leg color
if (scoutAt[0]==0){
legColor[1]=peach;
legColor[2]=peachShadow;
}
if (scoutAt[0]==1){
legColor[1]='#B06C49';
legColor[2]='#743D2B';
}

q=w/5;


let a=1;
let b=0;

if(moov==0){
a=moov;
b=1;
}

//draw legs
for (let i=0; i<legColor.length;i++){
for (let j=0; j<leftLeg[i].length;j++){
drawIt(ctx,w/150,legColor[i],leftLeg[i][j][0]+loc[0],leftLeg[i][j][1]-a+loc[1])
}
}
for (let i=0; i<legColor.length;i++){
for (let j=0; j<rightLeg[i].length;j++){
drawIt(ctx,q/30,legColor[i],rightLeg[i][j][0]+loc[0],rightLeg[i][j][1]-b+loc[1])
}
}


//draw body
if(scoutAt[4]==0){
for (let i=0; i<boodyColor.length;i++){
for (let j=0; j<scoutBody[i].length;j++){
drawIt(ctx,q/30,boodyColor[i],scoutBody[i][j][0]+loc[0],scoutBody[i][j][1]+loc[1]);
}
}
}
if(scoutAt[4]==1){
for (let i=0; i<boodyColor.length;i++){
for (let j=0; j<scoutBody1[i].length;j++){
drawIt(ctx,q/30,boodyColor[i],scoutBody1[i][j][0]+loc[0],scoutBody1[i][j][1]+loc[1]);
}
}
}

//draw face
for (let i=0; i<faceColor.length;i++){
for (let j=0; j<scoutFace[i].length;j++){
drawIt(ctx,q/30,faceColor[i],scoutFace[i][j][0]+loc[0],scoutFace[i][j][1]+moov+loc[1])
}
}

//hair style
if(scoutAt[2]==0){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair[i][j][0]+loc[0],scoutHair[i][j][1]+moov+loc[1])
}
}
}
if(scoutAt[2]==1){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair1[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair1[i][j][0]+loc[0],scoutHair1[i][j][1]+moov+loc[1])
}
}
}
if(scoutAt[2]==2){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair2[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair2[i][j][0]+loc[0],scoutHair2[i][j][1]+moov+loc[1])
}
}
}

//badges
if(scoutAt[3]==0){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges[i][j][0]+loc[0],badges[i][j][1]+loc[1])
}
}
}
if(scoutAt[3]==1){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges1[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges1[i][j][0]+loc[0],badges1[i][j][1]+loc[1])
}
}
}
if(scoutAt[3]==2){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges2[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges2[i][j][0]+loc[0],badges2[i][j][1]+loc[1])
}
}
}

//arms
for (let i=0; i<armColor.length;i++){
for (let j=0; j<leftArm[i].length;j++){
drawIt(ctx,q/30,armColor[i],leftArm[i][j][0]+loc[0],leftArm[i][j][1]-b+loc[1])
}
}
for (let i=0; i<armColor.length;i++){
for (let j=0; j<rightArm[i].length;j++){
drawIt(ctx,q/30,armColor[i],rightArm[i][j][0]+loc[0],rightArm[i][j][1]-a+loc[1])
}
}


if(moov==0){
moov=1;
}
else{
moov=0;
}
//animate=setTimeout(theScout,500);
}



//draw world
function drawWorld(){

console.log('loc[0]')
console.log(loc[0]-16*w/150)
console.log('trying to hit')
console.log(w-12*w/150)
if((loc[0]+16)*w/150+2*w/150>=w-12*w/150 && loc[1]<=30*w/150){
chickenDinner(ctx,cc);
console.log('winner')
}

//clear the board
ctx.clearRect(0, 0, cc.width, cc.height);

//draw floor
drawRoomFloor();



ctx.fillStyle='red';
ctx.fillRect(w-12*w/150,0,12*w/150,30*w/150)
ctx.fillStyle='yellow';
ctx.fillRect(w-12*w/150,15*w/150,2*w/150,2*w/150)



//draw the girl scout
drawScout();

}



// getting things going
function getStarted(att){

scoutAt=att;

cc.width=w;
cc.height=h;

drawWorld();
}


//delay
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
function theMoves(bb){
var howManyMoves=bb.length;
//console.log(howManyMoves)
if(howManyMoves!=0){
delay(1000).then(() => theNudge(bb));
}
}
function theNudge(bb){
bb[0]();
theMoves(arrayFix(bb))
}
function arrayFix(aaa){
var bbb=[];
for(i=0;i<aaa.length;i++){
if(i!=0){
bbb.push(aaa[i]);
}
}
return bbb;
}



//move up
function moveUp(){
loc=[loc[0],loc[1]-16];
drawWorld();
}


//move right
function moveRight(){
loc=[loc[0]+16,loc[1]];
drawWorld();
}

//move down
function moveDown(){
loc=[loc[0],loc[1]+16];
drawWorld();
}


//move left
function moveLeft(){
loc=[loc[0]-16,loc[1]];
drawWorld();
}


//winner
function chickenDinner(ctx,cc){
var cc=document.getElementById('all');
all.innerHTML='<h1>Winner!</h1>';
}



