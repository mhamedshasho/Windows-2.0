function openTerminal(){
createWindow(
"Terminal",
"terminal",
`<input id="cmd" placeholder="command"><div id="terminalOutput"></div>`
);
let cmd=document.getElementById("cmd");
cmd.onkeydown=e=>{
if(e.key==="Enter")runCommand(cmd.value);
}
}
function runCommand(c){
let out=document.getElementById("terminalOutput");
if(c==="help")out.innerHTML+="<p>help date clear</p>";
else if(c==="date")out.innerHTML+="<p>"+new Date()+"</p>";
else if(c==="clear")out.innerHTML="";
else out.innerHTML+="<p>unknown command</p>";
}

