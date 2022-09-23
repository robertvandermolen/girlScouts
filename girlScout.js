//Girl Scout JS file for fun game making

var w=window.innerWidth-40;
var h=window.innerHeight;


document.addEventListener('keypress', function(e) {
    var code = e.which || e.keyCode;
    //console.log(code);
    if (code == '119') {
        // Up
        moverUp();
    }
    else if (code == '115') {
        // Down
        moverDown();
    }
    else if (code == '97') {
       // Left
       moverLeft();
    }
    else if (code == '100') {
       // Right
       moverRight();
    }
})

function pickPic() {
let namer='';
let input = document.createElement('input');
input.type = 'file';
input.onchange = _ => {
// you can use this method to get file and perform respective operations
let files =   Array.from(input.files);
console.log(files);
namer=files[0].name;
const picky=document.createElement('img');
picky.id='image2';
picky.src=files[0].name;
picky.height='500';
picky.width='500';
var block = document.getElementById("x");
block.appendChild(picky);
};
input.click();
console.log(namer);
const boxer=document.getElementById('y');
const texter=document.createElement('div');
boxer.style.top='470px';
boxer.style.left='20px';
boxer.style.color='white';
boxer.style.position='absolute';
boxer.style.fontSize='40px';
boxer.style.backgroundColor='transparent';
boxer.innerHTML='blah...';
}



let peach='#FFE5B4';

let redBrown='#d3572f'

let leafGreen='#64e864'

var loc=[0,0];


function drawGrass(ctx,l){
ctx.fillStyle=leafGreen;
ctx.fillRect(0,0,l,l);
}

function moveLeft(ctx){
if (loc[0]>0){
loc=[loc[0]-1,loc[1]];
}
drawWorld(ctx);
console.log(loc);

}

function moveRight(ctx){
if ((loc[0]*w/300+29)*Math.floor(w/300)+w/300<w){
loc=[loc[0]+1,loc[1]];
}
drawWorld(ctx);
console.log(loc);

}

function moveUp(ctx){
if (loc[1]>0){
loc=[loc[0],loc[1]-1];
}
drawWorld(ctx);
console.log(loc);
}

function moveDown(ctx){
if ((loc[1]*w/300+29)*Math.floor(w/300)+w/300< w/2){
loc=[loc[0],loc[1]+1];
}
drawWorld(ctx);
console.log(loc);
}



function eightBit(ctx,s,color,x,y){
let smBlok=Math.floor(s/30);

ctx.fillStyle=color;
ctx.fillRect(x*smBlok,y*smBlok,smBlok,smBlok);

}

function mario(ctx,y,aa,bb){
const marBlack=[[9,3],[10,3],[11,4],[12,4],[13,3],[14,3],[15,3],[16,3],[17,4],[18,3],[19,4],[19,5],[19,6],[8,4],[8,5],[8,6],[8,7],[20,7],[7,8],[20,8],[7,9],[14,9],[15,9],[16,9],[17,9],[18,9],[20,9],[7,10],[13,10],[15,10],[17,10],[19,10],[20,10],[7,11],[12,11],[15,11],[17,11],[19,11],[7,12],[12,12],[20,12],[8,13],[14,13],[20,13],[8,14],[13,14],[14,14],[15,14],[16,14],[19,14],[20,14],[9,15],[15,15],[16,15],[17,15],[18,15],[19,15],[10,16],[11,16],[12,16],[18,16],[9,17],[13,17],[14,17],[15,17],[16,17],[17,17],[18,17],[18,15],[19,15],[20,17],[21,17],[8,18],[19,18],[22,18],[7,19],[11,19],[12,19],[13,19],[20,19],[22,19],[7,20],[10,20],[14,20],[20,20],[22,20],[1,21],[2,21],[3,21],[4,21],[5,21],[6,21],[7,21],[9,21],[15,21],[19,21],[20,21],[21,21],[0,22],[1,22],[8,22],[9,22],[15,22],[18,22],[21,22],[0,23],[9,23],[10,23],[14,23],[22,23],[0,24],[8,24],[11,24],[12,24],[13,24],[22,24],[0,25],[1,25],[7,25],[8,25],[10,25],[22,25],[1,26],[2,26],[3,26],[4,26],[5,26],[6,26],[7,26],[11,26],[15,26],[16,26],[17,26],[21,26],[22,26],[7,27],[12,27],[13,27],[14,27],[18,27],[19,27],[20,27],[21,27],[7,28],[10,28],[11,28],[8,29],[9,29]];


let lBlack=marBlack.length;

const marPeach=[[9,4],[10,4],[18,4],[9,5],[10,5],[11,5],[18,5],[9,6],[10,6],[11,6],[9,7],[10,7],[14,10],[16,10],[18,10],[13,11],[14,11],[16,11],[18,11],[13,12],[14,12],[15,12],[16,12],[17,12],[18,12],[19,12],[12,13],[13,13],[15,13],[16,13],[17,13],[18,13],[19,13],[12,14],[17,14],[18,14],[13,15],[14,15],[14,16],[15,16],[16,16],[17,16],[20,18],[21,18],[17,19],[18,19],[19,19],[21,19],[11,20],[12,20],[13,20],[16,20],[17,20],[18,20],[19,20],[21,20],[10,21],[11,21],[12,21],[13,21],[14,21],[16,21],[17,21],[18,21],[7,22],[10,22],[11,22],[12,22],[13,22],[14,22],[16,22],[17,22],[19,22],[20,22],[3,22],[4,22],[3,23],[4,23],[7,23],[8,23],[11,23],[12,23],[13,23],[21,23],[3,24],[4,24],[7,24],[9,24],[21,24],[3,25],[4,25],[9,25],[21,25],[20,26],[8,26],[9,26],[8,27],[8,28]];

let lPeach=marPeach.length;

const marRedBrown=[[13,4],[14,4],[15,4],[16,4],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[18,6],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[17,7],[18,7],[19,7],[8,8],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],[17,8],[18,8],[19,8],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[19,9],[8,10],[9,10],[10,10],[11,10],[12,10],[8,11],[9,11],[10,11],[11,11],[8,12],[9,12],[10,12],[11,12],[9,13],[10,13],[11,13],[9,14],[10,14],[11,14],[10,15],[11,15],[12,15],[13,16],[10,17],[11,17],[12,17],[9,18],[10,18],[11,18],[12,18],[13,18],[14,18],[15,18],[16,18],[17,18],[18,18],[8,19],[9,19],[10,19],[14,19],[15,19],[16,19],[8,20],[9,20],[15,20],[8,21],[2,22],[5,22],[6,22],[1,23],[2,23],[5,23],[6,23],[15,23],[16,23],[17,23],[18,23],[19,23],[20,23],[1,24],[2,24],[5,24],[6,24],[10,24],[14,24],[15,24],[16,24],[17,24],[18,24],[19,24],[20,24],[2,25],[5,25],[6,25],[11,25],[12,25],[13,25],[14,25],[15,25],[16,25],[17,25],[18,25],[19,25],[20,25],[10,26],[12,26],[13,26],[14,26],[18,26],[19,26],[9,27],[10,27],[11,27],[9,28]];

let lRedBrown=marRedBrown.length;

for (var b=0; b<lBlack; b++){
eightBit(ctx,y,'black',marBlack[b][0]+aa,marBlack[b][1]+bb);
}

for (var p=0; p<lPeach;p++){
eightBit(ctx,y,peach,marPeach[p][0]+aa,marPeach[p][1]+bb);
}

for (var r=0; r<lRedBrown; r++){
eightBit(ctx,y,redBrown,marRedBrown[r][0]+aa,marRedBrown[r][1]+bb);
}
}

function drawTree(ctx,l,aa,bb){
const treeGreen=[[4,11],[4,12],[4,13],[4,14],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[6,15],[6,16],[6,17],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[7,13],[7,14],[7,15],[7,16],[7,17],[7,18],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[8,15],[8,16],[8,17],[8,18],[8,19],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[9,13],[9,14],[9,15],[9,16],[9,17],[9,18],[9,19],[9,20],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[10,19],[10,20],[11,4],[11,4],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],[11,15],[11,16],[11,17],[11,18],[11,19],[11,20],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[12,12],[12,13],[12,14],[12,15],[12,16],[12,17],[12,18],[12,19],[13,2],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[13,13],[13,14],[13,15],[13,16],[14,2],[14,3],[14,4],[14,5],[14,6],[14,7],[14,8],[14,9],[14,10],[14,11],[14,12],[14,13],[14,14],[14,15],[14,16],[15,2],[15,3],[15,4],[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12],[15,13],[15,14],[15,15],[15,16],[16,2],[16,3],[16,4],[16,5],[16,6],[16,7],[16,8],[16,9],[16,10],[16,11],[16,12],[16,13],[16,14],[16,15],[16,16],[17,2],[17,3],[17,4],[17,5],[17,6],[17,7],[17,8],[17,9],[17,10],[17,11],[17,12],[17,13],[17,14],[17,15],[17,16],[17,17],[17,18],[17,19],[18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[18,11],[18,12],[18,13],[18,14],[18,15],[18,16],[18,17],[18,18],[18,19],[18,20],[19,3],[19,4],[19,5],[19,6],[19,7],[19,8],[19,9],[19,10],[19,11],[19,12],[19,13],[19,14],[19,15],[19,16],[19,17],[19,18],[19,19],[19,20],[20,4],[20,5],[20,6],[20,7],[20,8],[20,9],[20,10],[20,11],[20,12],[20,13],[20,14],[20,15],[20,16],[20,17],[20,18],[20,19],[20,20],[21,4],[21,5],[21,6],[21,7],[21,8],[21,9],[21,10],[21,11],[21,12],[21,13],[21,14],[21,15],[21,16],[21,17],[21,18],[21,19],[22,5],[22,6],[22,7],[22,8],[22,9],[22,10],[22,11],[22,12],[22,13],[22,14],[22,15],[22,16],[22,17],[22,18],[23,6],[23,7],[23,8],[23,9],[23,10],[23,11],[23,12],[23,13],[23,14],[23,15],[23,16],[23,17],[24,7],[24,8],[24,9],[24,10],[24,11],[24,12],[24,13],[24,14],[24,15],[24,16],[25,9],[25,10],[25,11],[25,12],[25,13],[25,14],[26,10],[26,11],[26,12],[26,13]];

let lTreeGreen=treeGreen.length;

const treeBrown=[[13,17],[13,18],[13,19],[13,20],[13,21],[13,22],[13,23],[13,24],[13,25],[13,26],[13,27],[13,28],[13,29],[14,17],[14,18],[14,19],[14,20],[14,21],[14,22],[14,23],[14,24],[14,25],[14,26],[14,27],[14,28],[14,29],[15,17],[15,18],[15,19],[15,20],[15,21],[15,22],[15,23],[15,24],[15,25],[15,26],[15,27],[15,28],[15,29],[16,17],[16,18],[16,19],[16,20],[16,21],[16,22],[16,23],[16,24],[16,25],[16,26],[16,27],[16,28],[16,29]];

let lTrunk=treeBrown.length;


for (var g=0; g<lTreeGreen; g++){
eightBit(ctx,l,'green',treeGreen[g][0]+aa,treeGreen[g][1]+bb);
}

for (var t=0; t<lTrunk; t++){
eightBit(ctx,l,'brown',treeBrown[t][0]+aa,treeBrown[t][1]+bb);
}

}

function grass(ctx,l,aa,bb){

const grassGreen=[[2,27],[2,28],[2,29],[3,28],[3,29],[4,29],[5,27],[5,28],[5,29],[6,26],[6,27],[6,28],[6,29],[7,28],[7,29],[8,27],[8,28],[8,29]];

let lGrass=grassGreen.length;

for (var ff=0; ff<lGrass; ff++){
eightBit(ctx,l,'green',grassGreen[ff][0]+aa, grassGreen[ff][1]+bb);
}


}


function bench(ctx,l,aa,bb){

const benchBrown=[[9,23],[9,24],[9,25],[9,26],[9,27],[9,28],[9,29],[10,21],[10,22],[10,23],[10,24],[10,25],[10,26],[11,21],[11,25],[11,26],[12,21],[12,22],[12,23],[12,24],[12,25],[12,26],[13,21],[13,25],[13,26],[14,21],[14,22],[14,23],[14,24],[14,25],[14,26],[15,21],[15,25],[15,26],[16,21],[16,22],[16,23],[16,24],[16,25],[16,26],[17,21],[17,25],[17,26],[18,21],[18,22],[18,23],[18,24],[18,25],[18,26],[19,21],[19,25],[19,26],[20,21],[20,22],[20,23],[20,24],[20,25],[20,26],[21,23],[21,24],[21,25],[21,26],[21,27],[21,28],[21,29]];

let lBench=benchBrown.length;


for (var e=0; e<lBench; e++){
eightBit(ctx,l,'brown',benchBrown[e][0]+aa, benchBrown[e][1]+bb);
}

}

function drawWorld(ctx){
drawGrass(ctx,w);
bench(ctx,w/5,10*w/150,10);
grass(ctx,w/5,3*w/150,20);
grass(ctx,w/5,15*w/150,40);
grass(ctx,w/5,8*w/150,10);
grass(ctx,w/5,10*w/150,30);
drawTree(ctx,w/5,5*w/150,18);
drawTree(ctx,w/5,13*w/150,6);

mario(ctx,w/10,loc[0]*w/150,loc[1]*w/150);
}


