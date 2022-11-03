//Girl Scout JS file for fun game making


//Data
var w=window.innerWidth-25;
var h=window.innerHeight-25;

loc=[0,h/100]


var woodGrain=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//get random numbers for wood grain
for(g=0;g<36;g++){
woodGrain[g]=Math.random();
//console.log(woodGrain[g]);

}

//scout attributes 
//entries:
//0-skin tone
//1-hair color
//2-hair style
//3-level
//4-pants
var scoutAt=[0,0,0,0,0]


//for animations
var mover=0;
var slap=0;





//Start Game!
function startGame(ctx,cc){
chooseCharacter(ctx,cc);
}

var choosing=0;
var q=0;

function nexter(){
choosing=choosing+1;
chooseCharacter(ctx,cc,mover);
if(choosing>4){
clearTimeout(animate);
levelOne(ctx,cc);
//console.log('start game now!')
}
}

function beforer(){
if(choosing!=0){
choosing=choosing-1;
chooseCharacter(ctx,cc,mover);
}
}

function drawScoutFace(){
//face color
if (scoutAt[0]==0){
faceColor[1]=peach;
faceColor[0]=peachShadow;
}
if (scoutAt[0]==1){
faceColor[1]='#B06C49';
faceColor[0]='#743D2B';
}
for (let i=0; i<faceColor.length;i++){
for (let j=0; j<scoutFace[i].length;j++){
drawIt(ctx,q/30,faceColor[i],scoutFace[i][j][0]+7,scoutFace[i][j][1]+mover)
}
}
}

function drawScoutHair(){
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

//hair style
if(scoutAt[2]==0){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair[i][j][0]+7,scoutHair[i][j][1]+mover)
}
}
}

if(scoutAt[2]==1){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair1[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair1[i][j][0]+7,scoutHair1[i][j][1]+mover)
}
}
}

if(scoutAt[2]==2){
for (let i=0; i<hairColor.length;i++){
for (let j=0; j<scoutHair2[i].length;j++){
drawIt(ctx,q/30,hairColor[i],scoutHair2[i][j][0]+7,scoutHair2[i][j][1]+mover)
}
}
}
}

function drawScoutBody(){
if(scoutAt[4]==0){
for (let i=0; i<boodyColor.length;i++){
for (let j=0; j<scoutBody[i].length;j++){
drawIt(ctx,q/30,boodyColor[i],scoutBody[i][j][0]+7,scoutBody[i][j][1]);
}
}
}
if(scoutAt[4]==1){
for (let i=0; i<boodyColor.length;i++){
for (let j=0; j<scoutBody1[i].length;j++){
drawIt(ctx,q/30,boodyColor[i],scoutBody1[i][j][0]+7,scoutBody1[i][j][1]);
}
}
}
}

function drawScoutBadges(){
if(scoutAt[3]==0){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges[i][j][0]+7,badges[i][j][1])
}
}
}
if(scoutAt[3]==1){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges1[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges1[i][j][0]+7,badges1[i][j][1])
}
}
}
if(scoutAt[3]==2){
for (let i=0; i<badgesColor.length;i++){
for (let j=0; j<badges2[i].length;j++){
drawIt(ctx,q/30,badgesColor[i],badges2[i][j][0]+7,badges2[i][j][1])
}
}
}
}

function drawScoutArms(m){
if (scoutAt[0]==0){
armColor[1]=peach;
armColor[2]=peachShadow;
}
if (scoutAt[0]==1){
armColor[1]='#B06C49';
armColor[2]='#743D2B';
}

let a=0;
let b=0;

if(m==0){
a=m;
b=1;
}
if(m==1){
a=m;
b=0;
}
for (let i=0; i<armColor.length;i++){
for (let j=0; j<leftArm[i].length;j++){
drawIt(ctx,q/30,armColor[i],leftArm[i][j][0]+7,leftArm[i][j][1]-b)
}
}
for (let i=0; i<armColor.length;i++){
for (let j=0; j<rightArm[i].length;j++){
drawIt(ctx,q/30,armColor[i],rightArm[i][j][0]+7,rightArm[i][j][1]-a)
}
}
}

function drawScoutLegs(m){
if (scoutAt[0]==0){
legColor[1]=peach;
legColor[2]=peachShadow;
}
if (scoutAt[0]==1){
legColor[1]='#B06C49';
legColor[2]='#743D2B';
}

let a=0;
let b=0;

if(m==0){
a=m;
b=1;
}
if(m==1){
a=m;
b=0;
}


for (let i=0; i<legColor.length;i++){
for (let j=0; j<leftLeg[i].length;j++){
drawIt(ctx,q/30,legColor[i],leftLeg[i][j][0]+7,leftLeg[i][j][1]-a)
}
}
for (let i=0; i<legColor.length;i++){
for (let j=0; j<rightLeg[i].length;j++){
drawIt(ctx,q/30,legColor[i],rightLeg[i][j][0]+7,rightLeg[i][j][1]-b)
}
}
}


function lesser(){
if(choosing==0){
if(scoutAt[0]==1){
scoutAt[0]=0;
}
}
if(choosing==1){
if(scoutAt[1]!=0){
scoutAt[1]=scoutAt[1]-1;
}
}
if(choosing==2){
if(scoutAt[2]!=0){
scoutAt[2]=scoutAt[2]-1;
}
}
if(choosing==3){
if(scoutAt[3]!=0){
scoutAt[3]=scoutAt[3]-1;
}
}
if(choosing==4){
if(scoutAt[4]!=0){
scoutAt[4]=scoutAt[4]-1;
}
}
chooseCharacter(ctx,cc,mover);
}

function moreer(){
if(choosing==0){
if(scoutAt[0]==0){
scoutAt[0]=1;
}
}
if(choosing==1){
if(scoutAt[1]!=3){
scoutAt[1]=scoutAt[1]+1;
}
}
if(choosing==2){
if(scoutAt[2]!=2){
scoutAt[2]=scoutAt[2]+1;
}
}
if(choosing==3){
if(scoutAt[3]!=2){
scoutAt[3]=scoutAt[3]+1;
}
}
if(choosing==4){
if(scoutAt[4]!=1){
scoutAt[4]=scoutAt[4]+1;
}
}
//drawScoutFace();
//drawScoutHair();
chooseCharacter(ctx,cc,mover);
}

let animate=0;

function theScout(){
slap=1;
ctx.clearRect(0, 0, cc.width, cc.height);
drawScoutLegs(mover);
drawScoutBody();
drawScoutFace();
drawScoutHair();
drawScoutBadges();
drawScoutArms(mover);
if(mover==0){
mover=1;
}
else{
mover=0;
}
animate=setTimeout(theScout,500);
}

//First you choose your character
function chooseCharacter(ctx,cc,mover){
const newDiv = document.getElementById("dummy");
newDiv.style.align='center';

rounder='poop';
anoth='Next Attribute';
let b1=' ';
let b2=' ';
let b3=' ';
let b4=' ';
if(choosing==0){
rounder='<h1>Choose Skin Tone</h1>';
//b3='type="button" class="btn btn-secondary" ';
//b4='type="button" class="btn btn-primary" ';
}
if(choosing==1){
rounder='<h1>Choose Hair Color</h1>';
//b3='type="button" class="btn btn-primary" ';
//b4='type="button" class="btn btn-primary" ';
}
if(choosing==2){
rounder='<h1>Choose Hair Style</h1>'
//b3='type="button" class="btn btn-primary" ';
//b4='type="button" class="btn btn-primary" ';
}
if(choosing==3){
rounder='<h1>Choose Level</h1>'
//b3='type="button" class="btn btn-primary" ';
//b4='type="button" class="btn btn-primary" ';
}
if(choosing==4){
rounder='<h1>Choose Pants</h1>';
anoth='Start Game!';
//b3='type="button" class="btn btn-primary" ';
//b4='type="button" class="btn btn-success" ';
}
newDiv.innerHTML ='<p>'+rounder+'</p><p><button '+b1+'style="width:50%" onClick="lesser()">&#8592;</button><button '+b2+'style="width:50%" onClick="moreer()">&#8594;</button></p><p><button '+b3+'onClick="beforer()" style="width:50%">Previous Attribute</button><button '+b4+'onClick="nexter()" style="width:50%">'+anoth+'</button></p>'

const divElement = document.querySelector(".box");
   
const elemHeight = divElement.clientHeight;

const ccc = document.getElementById("canvasHolder");

ccc.style.width='100%';
ccc.style.position='absolute';

cc.style.margin='auto';
cc.style.display='block';
cc.style.padding='0';



if (w<h-elemHeight){
cc.width=w;
cc.height=w;
q=w;
}
else{
cc.width=h-elemHeight;
cc.height=h-elemHeight;
q=h-elemHeight;
}

if(slap==1){
clearTimeout(animate);
}


theScout();



}















