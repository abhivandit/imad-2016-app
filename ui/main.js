console.log('Loaded!');
var element=document.getElementById('mytext');
element.innerHTML = 'ajhdajkhd';
var myimg=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
  
    
    myimg.style.marginLeft=(marginLeft + 1) +'px';
}
myimg.onclick = function(){
var interval = setInterval(moveRight, 50);
    
};
