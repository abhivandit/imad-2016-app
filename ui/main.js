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
    request.onReadyStateChange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.state==200){
                var counter=request.responseText;
                 var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        
        
    };
  //  counter=counter+1;
  request.open('GET','http://abhivandit.imad.hasura-app.io/counter',true);
  request.send(null);
   
    
};
