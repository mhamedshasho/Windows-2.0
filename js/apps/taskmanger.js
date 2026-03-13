function openTaskManager(){
createWindow(
"Task Manager",
"taskmanager",
`<ul id="taskList"></ul>`
);
let tasks=document.querySelectorAll(".window");
let list=document.getElementById("taskList");
tasks.forEach(t=>{
let li=document.createElement("li");
li.innerText=t.id;
list.appendChild(li);
});
}

