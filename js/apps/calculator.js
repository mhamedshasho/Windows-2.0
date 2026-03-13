function openCalculator(){
createWindow(
"Calculator",
"calculator",
`
<input type="text" id="calcInput" style="width:100%; font-size:18px;" placeholder="0">
<div id="calcButtons">
<button onclick="calcPress('1')">1</button>
<button onclick="calcPress('2')">2</button>
<button onclick="calcPress('3')">3</button>
<button onclick="calcPress('+')">+</button>
<br>
<button onclick="calcPress('4')">4</button>
<button onclick="calcPress('5')">5</button>
<button onclick="calcPress('6')">6</button>
<button onclick="calcPress('-')">-</button>
<br>
<button onclick="calcPress('7')">7</button>
<button onclick="calcPress('8')">8</button>
<button onclick="calcPress('9')">9</button>
<button onclick="calcPress('*')">*</button>
<br>
<button onclick="calcPress('0')">0</button>
<button onclick="calcPress('.')">.</button>
<button onclick="calcPress('=')">=</button>
<button onclick="calcPress('/')">/</button>
</div>
`
);

window.calcInput="";
}

function calcPress(v){
let input=document.getElementById("calcInput");
if(v==="="){
try{input.value=eval(input.value);}catch{input.value="Error";}
}else{
input.value+=v;
}
}

