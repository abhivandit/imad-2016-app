console.log('Loaded!');
var element=document.getElementById('mytext');
element.innerHTML = 'ajhdajkhd';
var myimg=document.getElementById('madi');
var marginLeft=0;
function moveLeft(){
    
    myimg.style.marginLeft=(marginleft + 10)+'px';
}
myimg.onclick = function(){
var interval=setInterval(moveLeft,10);
    
};
