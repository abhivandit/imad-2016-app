console.log('Loaded!');
var element=document.getElementById('mytext');
//element.innerHTML = 'ajhdajkhd';
var myimg=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
  
    
    myimg.style.marginLeft=marginLeft +'px';
}
myimg.onclick = function(){
var interval = setInterval(moveRight, 50);
    
};
var counter =0;
var button=document.getElementById('counter');
button.onclick = function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
    
};
