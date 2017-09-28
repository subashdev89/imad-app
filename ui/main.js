console.log('Loaded!');
var img=document.getElementById('madi');
var ml=0;
function moveright(){
    ml=ml+2;
    img.style.ml=ml+'px';
    }
    img.onclick=function(){
        var interval=setInterval(moveright,10);
    };