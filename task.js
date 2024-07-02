let val= document.getElementById('quant');
let troll= document.getElementById('trolly');
let pric=document.getElementById('price');

let v=0;
let p=500;

function inc(){
    v++;
    val.innerHTML=v;
    troll.innerHTML=v;
    pric.innerHTML=v*p;
}

function dec(){
    if(v>0){
        v--;
        val.innerHTML=v;
        troll.innerHTML=v;
        pric.innerHTML=v*p;
    }
    
}









