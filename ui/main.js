console.log('Loaded!');
var img = document.getElementById('madi');
var ml = 0;
function mr(){
    ml = ml + 1;
    img.style.ml = ml + 'px';
    }
    img.onclick = function(){
      var interval = setInterval(mr, 20);  
    };
    