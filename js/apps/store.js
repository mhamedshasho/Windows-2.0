function openStore(){
createWindow(
"App Store",
"store",
`<div id="storeList"></div>`
);

let apps=[
{name:"Notes",app:"notes"},
{name:"Calculator",app:"calculator"},
{name:"Browser",app:"browser"},
{name:"Files",app:"files"},
{name:"Paint",app:"paint"},
{name:"Terminal",app:"terminal"},
{name:"Task Manager",app:"taskmanager"},
{name:"Music",app:"music"}
];

let storeList=document.getElementById("storeList");
apps.forEach(a=>{
let btn=document.createElement("button");
btn.innerText="Install "+a.name;
btn.onclick=()=>openApp(a.app);
storeList.appendChild(btn);
});
}

