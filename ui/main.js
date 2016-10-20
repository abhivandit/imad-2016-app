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




var submit=document.getElementById('submit');
submit.onclick=function(){
        var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
           var names=request.responseText;//vvi
           
           names=JSON.parse(names);//vvi
           var list='';
           for(var i=0;i < names.length ;i++){
               list+='<li>'+names[i]+'</li>';
               
           }
             var klist=document.getElementById('mylist');
             klist.innerHTML=list;
     
            }
        }
    };
 
 
    var namek=document.getElementById('name');//were using ajax cz kb tk lega input uske lye kch nhi pta
    var name=namek.value;
   /* var list="";
    list=document.getElementById('mylist');
    list.innerHTML='<li>'+name+'</li>';*/
    request.open('GET','http://abhivandit.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
   
   
    
    
};
