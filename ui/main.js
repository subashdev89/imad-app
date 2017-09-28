console.log('Loaded!');
var img=document.getElementById('madi');
var marginleft=0;
function moveright(){
    marginleft=marginleft+2;
    img.style.ml=ml+'px';
    }
    img.onclick=function(){
        var interval=setInterval(moveright,10);
    };