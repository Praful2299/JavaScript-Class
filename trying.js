let a=parseInt(prompt("Enter a number"))
let last,reverse=0,temp;
temp=a;
while(a>0){
    last=a%10;
    reverse=reverse*10+last;
    a=a/10.0
}
alert(reverse)