function openBrowser(){
createWindow(
"Browser",
"browser",
`
<input id="url" type="text" placeholder="https://..." style="width:100%;margin-bottom:5px;">
<button onclick="loadUrl()">Go</button>
<iframe id="browserFrame" style="width:100%;height:300px;"></iframe>
`
);
}

function loadUrl(){
let url=document.getElementById("url").value;
if(!url.startsWith("http"))url="https://"+url;
document.getElementById("browserFrame").src=url;
}

