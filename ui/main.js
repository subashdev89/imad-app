console.log('Loaded!');
var img = document.getElementById('madi');
var marginleft = 0;
function marginRight(){
    marginleft = marginleft + 1;
    img.style.marginleft = marginleft + 'px';
    }
    img.onclick = function(){
      var interval = setInterval(marginRight, 20);  
    };
    