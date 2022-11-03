//load bag
var bag=[];
var whereBag=0;

var inBag=0;

var lister='';

var listTitle='<p>Items in Your Bag:';
var theList='';

function myRoom(){
var ppp=0;
for(pp=0;pp<bag.length;pp++){
if(bag[pp][0]=='Tent'){
ppp=ppp+1;
}
if(bag[pp][0]=='sleeping bag'){
ppp=ppp+1;
}
if(bag[pp][0]=='matches'){
ppp=ppp+1
}
}
if(ppp>2){
inBag=1;
}
loc=[0,0];
lister.innerHTML='';
levelOne(ctx,cc);
}

function quickDraw(uu,vv,aaa,bbb){
for (let i=0; i<uu.length;i++){
for (let j=0; j<vv[i].length;j++){
console.log(i)
console.log(j)
console.log(uu[i])
console.log(vv[i][j][0])
console.log(vv[i][j][1])
drawIt(ctx,w/50,uu[i],vv[i][j][1]+aaa,vv[i][j][0]+bbb)
}
}
}

function drawTent(){

for (let i=0; i<tentColor.length;i++){
for (let j=0; j<tent[i].length;j++){
console.log(i)
console.log(j)
console.log(tentColor[i])
console.log(tent[i][j][0])
console.log(tent[i][j][1])
drawIt(ctx,w/55,tentColor[i],tent[i][j][1],tent[i][j][0]+3)
}
}

console.log('draw tent')


}

function drawSleepingBag(){
console.log('draw sleeping bag now!')
for (let i=0; i<sleepingbagColor.length;i++){
for (let j=0; j<sleepingbag[i].length;j++){
console.log(i)
console.log(j)
console.log(sleepingbagColor[i])
console.log(sleepingbag[i][j][0])
console.log(sleepingbag[i][j][1])
drawIt(ctx,w/50,sleepingbagColor[i],sleepingbag[i][j][1]+5,sleepingbag[i][j][0]+7)
}
}

}

function drawTeddyBear(){
console.log('draw teddy bear')
for (let i=0; i<teddyBearColor.length;i++){
for (let j=0; j<teddyBear[i].length;j++){
console.log(i)
console.log(j)
console.log(teddyBearColor[i])
console.log(teddyBear[i][j][0])
console.log(teddyBear[i][j][1])
drawIt(ctx,w/50,teddyBearColor[i],teddyBear[i][j][1]+6,teddyBear[i][j][0]+2)
}
}

}

function drawMatches(){
console.log('draw matches')
quickDraw(matchesColor,matches,6,15)
}

function drawCompass(){
quickDraw(compassColor,compass,9,10)
}

function drawSocks(){
quickDraw(socksColor,socks,6,6)
}

function drawRope(){
quickDraw(ropeColor,rope,3,3)
}

function drawMap(){
for (let i=0; i<mapColor.length;i++){
for (let j=0; j<map[i].length;j++){
drawIt(ctx,w/40,mapColor[i],map[i][j][1],map[i][j][0])
}
}
//quickDraw(mapColor,map,4,4)
}

function drawClothes(){
for (let i=0; i<foldedlaundryColor.length;i++){
for (let j=0; j<foldedlaundry[i].length;j++){

drawIt(ctx,w/25,foldedlaundryColor[i],foldedlaundry[i][j][1]+6,foldedlaundry[i][j][0]+6)
}
}

}

function drawPillow(){
console.log('draw pillow')

quickDraw(pillowColor,pillow,9,9)
}

function moreBag(){
whereBag=(whereBag+1)%10;
loadBag(ctx,cc);
}

function lessBag(){
if(whereBag!=0){
whereBag=(whereBag-1);
}
else{
whereBag=9;
}
loadBag(ctx,cc);
}

function addToBag(){
var blue=true;
if(whereBag==0){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='Tent'){
blue=false;
}
}
}
if(blue){
bag.push(['Tent',5]);
}
}
if(whereBag==1){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='sleeping bag'){
blue=false;
}
}
}
if(blue){
bag.push(['sleeping bag',2]);
}
}
if(whereBag==2){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='teddy bear'){
blue=false;
}
}
}
if(blue){
bag.push(['teddy bear',2]);
}
}
if(whereBag==3){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='pillow'){
blue=false;
}
}
}
if(blue){
bag.push(['pillow',1]);
}
}
if(whereBag==4){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='matches'){
blue=false;
}
}
}
if(blue){
bag.push(['matches',0.5]);
}
}
if(whereBag==5){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='compass'){
blue=false;
}
}
}
if(blue){
bag.push(['compass',1.0]);
}
}
if(whereBag==6){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='socks'){
blue=false;
}
}
}
if(blue){
bag.push(['socks',0.2]);
}
}
if(whereBag==7){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='clothes'){
blue=false;
}
}
}
if(blue){
bag.push(['clothes',1.0]);
}
}
if(whereBag==8){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='rope'){
blue=false;
}
}
}
if(blue){
bag.push(['rope',1.2]);
}
}
if(whereBag==9){
for(pp=0;pp<bag.length;pp++){
if(blue){
if(bag[pp][0]=='map'){
blue=false;
}
}
}
if(blue){
bag.push(['map',0.1]);
}
}


loadBag(ctx,cc);
}

function removeFromBag(){
let justRealQuick=[];
for(pp=0;pp<bag.length;pp++){
if(whereBag==0){
if(bag[pp][0]!='Tent'){
justRealQuick.push(bag[pp])
}
}
if(whereBag==1){
if(bag[pp][0]!='sleeping bag'){
justRealQuick.push(bag[pp])
}
}

if(whereBag==2){
if(bag[pp][0]!='teddy bear'){
justRealQuick.push(bag[pp])
}
}

if(whereBag==3){
if(bag[pp][0]!='pillow'){
justRealQuick.push(bag[pp])
}
}

if(whereBag==4){
if(bag[pp][0]!='matches'){
justRealQuick.push(bag[pp])
}
}
if(whereBag==5){
if(bag[pp][0]!='compass'){
justRealQuick.push(bag[pp])
}
}

if(whereBag==6){
if(bag[pp][0]!='socks'){
justRealQuick.push(bag[pp])
}
}

if(whereBag==7){
if(bag[pp][0]!='clothes'){
justRealQuick.push(bag[pp])
}
}
if(whereBag==8){
if(bag[pp][0]!='rope'){
justRealQuick.push(bag[pp])
}
}
if(whereBag==9){
if(bag[pp][0]!='map'){
justRealQuick.push(bag[pp])
}
}


}
bag=justRealQuick;
loadBag(ctx,cc);
}

function loadBag(ctx,cc){
inRoom=0;
loc=[0,0];
const newDiv = document.getElementById("dummy");

let hinter='';
if(scoutAt[3]==0){
hinter='<p style="color:red;">(hint: you can only carry 1/4 your weight)</p>';
}

let descrip='';
if(whereBag==0){
descrip='5lbs Tent';
}
if(whereBag==1){
descrip='2lbs sleeping bag';
}
if(whereBag==2){
descrip='2lbs teddy bear';
}
if(whereBag==3){
descrip='1lbs pillow'
}
if(whereBag==4){
descrip='0.5lbs matches';
}
if(whereBag==5){
descrip='1.0lbs compass';
}
if(whereBag==6){
descrip='0.2lbs socks'
}
if(whereBag==7){
descrip='1.2lbs clothes'
}
if(whereBag==8){
descrip='1.1lbs rope'
}
if(whereBag==9){
descrip='0.1lbs map'
}

newDiv.innerHTML='<h1>Level One: Pack Your Bag</h1>'+descrip+'<p><button onClick="lessBag()" style="width:50%">Previous Item</button><button onClick="moreBag()" style="width:50%">Next Item</button></p><p><button onClick="addToBag()" style="width:50%">Add to Bag</button><button onClick="removeFromBag()" style="width:50%">Remove from Bag</button></p><p><button onClick="myRoom()" style="width:100%">Back to My Room</button>'+hinter;

const divElement = document.querySelector(".box");
   
const elemHeight = divElement.clientHeight;

const ccc = document.getElementById("canvasHolder");

ccc.style.width='100%';
ccc.style.position='absolute';
cc.style.width='50%';
cc.style.align='right';

lister=document.getElementById('items');

lister.style.width='50%';
lister.style.align='left';

theList='';
for(pp=0;pp<bag.length;pp++){
theList=theList+'<p>'+bag[pp][0]+' '+bag[pp][1]+'lbs'+'</p>';
}

if(scoutAt[3]==0){
let totalweight=0;
for(pp=0;pp<bag.length;pp++){
totalweight=totalweight+bag[pp][1]
}
theList=theList+'<p style="color:red">Total Weight: '+totalweight+' lbs</p>'
}
lister.innerHTML=listTitle+theList;





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

//clear the board
ctx.clearRect(0, 0, cc.width, cc.height);

drawRoomFloor();

//drawScout();

if(whereBag==0){
drawTent();
}
if(whereBag==1){
drawSleepingBag();
}
if(whereBag==2){
drawTeddyBear();
}
if(whereBag==3){
drawPillow();
}
if(whereBag==4){
drawMatches();
}
if(whereBag==5){
drawCompass();
}
if(whereBag==6){
drawSocks();
}
if(whereBag==7){
drawClothes();
}
if(whereBag==8){
drawRope();
}
if(whereBag==9){
drawMap();
}

}