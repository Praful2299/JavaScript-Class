var list= document.getElementById('list');
var bar= document.getElementById('bars');
var clo= document.getElementById('close');


function show(){
    list.style.display="block"
    bar.style.display="none"
    clo.style.display="block"
}

function cl(){
    list.style.display="none"
    clo.style.display="none"
    bar.style.display="block"
}