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

var button=document.getElementById('counter');
button.onclick = function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
                var k=request.responseText;
                 var span=document.getElementById('count');
                span.innerHTML=k.toString();
            }
        }
        
        
    };
  //  counter=counter+1;
  request.open('GET','http://abhivandit.imad.hasura-app.io/counter',true);
  request.send(null);
   
    
};
