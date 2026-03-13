function openFiles(){
createWindow(
"Files",
"files",
`<div id="fileList"></div><input id="newFile" placeholder="File name"><button onclick="addFile()">Add File</button>`
);

renderFiles();
}

function renderFiles(){
let list=document.getElementById("fileList");
list.innerHTML="";
fileSystem.documents.forEach(f=>{
let div=document.createElement("div");
div.innerText=f;
list.appendChild(div);
});
}

function addFile(){
let name=document.getElementById("newFile").value;
if(name){
createFile(name,"documents");
renderFiles();
document.getElementById("newFile").value="";
}
}

