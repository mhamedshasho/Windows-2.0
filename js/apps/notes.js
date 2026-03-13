function openNotes(){
createWindow(
"Notes",
"notes",
`<textarea id="noteArea" style="width:100%;height:200px;"></textarea>`
);

let note=document.getElementById("noteArea");
note.value=localStorage.getItem("note")||"";

note.oninput=()=>{
localStorage.setItem("note",note.value);
}
}

