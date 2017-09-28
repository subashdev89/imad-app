console.log('Loaded!');
var img=document.getelementbyid('madi');
var ml=0;
function moveright(){
    ml=ml+2;
    img.style.ml=ml+'px';
    }
    img.onclick=function(){
        var interval=setinterval(moveright,10);
    };