function openPaint(){
createWindow(
"Paint",
"paint",
`<canvas id="paintCanvas" style="border:1px solid white;width:100%;height:300px;"></canvas>
<br><input type="color" id="paintColor" value="#ffffff">`
);

let canvas=document.getElementById("paintCanvas");
canvas.width=360;
canvas.height=300;
let ctx=canvas.getContext("2d");
let painting=false;

canvas.onmousedown=()=>painting=true;
canvas.onmouseup=()=>painting=false;
canvas.onmousemove=function(e){
if(painting){
ctx.fillStyle=document.getElementById("paintColor").value;
ctx.fillRect(e.offsetX,e.offsetY,4,4);
}
};
}

