//Level One (pack your bag)

var loc=[0,0];
var moov=0;

var inRoom=0;



const floorColor='#D2B04C';
const plankColor='black';

var helpoop=0;




//WASD
function moveLeft(){
if (loc[0]-w/150>0){
loc=[loc[0]-w/150,loc[1]];
}
else{
loc=[0,loc[1]];
}
drawWorld(ctx);


}

function moveRight(){
if ((loc[0]+16)*w/150+2*w/150<w){
loc=[loc[0]+w/150,loc[1]];
}
if(inRoom==1){
drawWorld(ctx);
}
console.log(loc[0]/w)
}

function moveUp(){
if (loc[1]-w/150>w/150){
loc=[loc[0],loc[1]-w/150];
}
else{
loc=[loc[0],0]
}
drawWorld(ctx);

}

function moveDown(){
if ((loc[1]+30)*w/150+20*w/150< h){
loc=[loc[0],loc[1]+w/150];
}

drawWorld(ctx);
//console.log(loc[1]/helpoop)
}

//Listen for WASD
document.addEventListener('keypress', function(e) {
    var code = e.which || e.keyCode;
    //console.log(code);
    if (code == '119') {
        // Up
        
        if(inRoom==1){
        moveUp();
        }
    }
    else if (code == '115') {
        // Down
        if(inRoom==1){
        moveDown();
        }
    }
    else if (code == '97') {
       // Left
       if(inRoom==1){
       moveLeft();
       }
    }
    else if (code == '100') {
       // Right
       console.log(inRoom)
       if(inRoom==1){
       moveRight();
       }
    }
})

function drawBackPack(){
for (let i=0; i<backColor.length;i++){
for (let j=0; j<backPack[i].length;j++){
drawIt(ctx,w/150,backColor[i],backPack[i][j][0]+.1466*w,backPack[i][j][1]+.102*helpoop)
}
}

}

function drawScout(){
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

function drawBed(){
for (let i=0; i<bedColor.length;i++){
for (let j=0; j<bed[i].length;j++){
drawIt(ctx,w/100,bedColor[i],bed[i][j][1],bed[i][j][0])
}
}
}

function drawBasket(){
for (let i=0; i<basketColor.length;i++){
for (let j=0; j<basket[i].length;j++){
drawIt(ctx,w/200,basketColor[i],basket[i][j][1]+cc.width/100,basket[i][j][0]+1.5*cc.height/10)
}
}

}

function drawRoomLaundry(){
for (let i=0; i<foldedlaundryColor.length;i++){
for (let j=0; j<foldedlaundry[i].length;j++){
drawIt(ctx,w/200,foldedlaundryColor[i],foldedlaundry[i][j][1]+3*cc.width/100,foldedlaundry[i][j][0]+1.6*cc.height/10)
}
}

}

function drawRoomTeddy(){
for (let i=0; i<teddyBearColor.length;i++){
for (let j=0; j<teddyBear[i].length;j++){
drawIt(ctx,w/200,teddyBearColor[i],teddyBear[i][j][1]+10*cc.width/100,teddyBear[i][j][0]+cc.height/10)
}
}

}

function drawWorld(){



//clear the board
ctx.clearRect(0, 0, cc.width, cc.height);

//draw floor
drawRoomFloor();


//draw door
ctx.fillStyle='red';
ctx.fillRect(w-12*w/150,0,12*w/150,30*w/150)
ctx.fillStyle='yellow';
ctx.fillRect(w-12*w/150,15*w/150,2*w/150,2*w/150)

//draw bed
drawBed();


//draw laundry basket
drawBasket();

//draw laundry
drawRoomLaundry();

//draw teddy
drawRoomTeddy();

//draw backpack
drawBackPack();



//draw the girl scout
drawScout();

if(loc[0]>=.135*w && loc[1]>=.06*helpoop){
loadBag(ctx,cc);
}
if((loc[0]+16)*w/150+2*w/150>=w-12*w/150 && loc[1]<=30*w/150){
console.log('go outside')
}
}


function levelOne(ctx,cc){
inRoom=1;
const newDiv = document.getElementById("dummy");

let hinter='';
if(scoutAt[3]==0 && inBag==0){
hinter='<p style="color:red;">(hint: walk to the bag)</p>';
}
if(scoutAt[3]==0 && inBag==1){
hinter='<p style="color:red;">(hint: go to the door!)</p>';
}

newDiv.innerHTML='<h1>Level One: Pack Your Bag</h1>'+hinter;

const divElement = document.querySelector(".box");
   
const eleHeight = divElement.clientHeight;

const ccc = document.getElementById("canvasHolder");

ccc.style.width='100%';
ccc.style.position='absolute';

var cc=document.getElementById('myCanvas');
var ctx = cc.getContext("2d");
cc.style.width='100%';
cc.style.margin='auto';
cc.style.display='block';
cc.style.padding='auto';

cc.width=w;
cc.height=h-eleHeight;
if(w>926){
cc.width=925;
w=925;
}

var minner=h-eleHeight;
helpoop=h-eleHeight;
if(w<h-eleHeight){
minner=w;
console.log('minner is w')
}

console.log(w);
console.log(minner);

drawWorld();



}
