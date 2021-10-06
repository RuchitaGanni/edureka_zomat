var Add = ()=>{
    var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    var out = Number(a)+Number(b);
    var mydiv = document.getElementById('result');
    
     mydiv.style.float="right";

    document.getElementById('result').value =`${out}`;
}
var Sub = ()=>{
    var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    var out = Number(a)-Number(b);
    var mydiv = document.getElementById('result');
    
     mydiv.style.float="right";

    document.getElementById('result').value =`${out}`;
}
var Multy = ()=>{
    var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    var out = Number(a)*Number(b);
    var mydiv = document.getElementById('result');
    
     mydiv.style.float="right";

    document.getElementById('result').value =`${out}`;
}
var Divide = ()=>{
    var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    var out = Number(a)/Number(b);
    var mydiv = document.getElementById('result');
    
     mydiv.style.float="right";

    document.getElementById('result').value =`${out}`;
}