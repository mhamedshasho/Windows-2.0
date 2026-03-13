function openMusic(){
createWindow(
"Music Player",
"music",
`<audio id="audioPlayer" controls style="width:100%;">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`
);
}

