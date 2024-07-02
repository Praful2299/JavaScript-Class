var a = parseInt(prompt("Enter your age: "))
if(a>=18){
    let b= prompt("Are you indian?(yes or no)")
    if(b=="yes"){
        console.log("Eligible for voting")
    }
    else{
        console.log("Voting Not allowed")
    }
}
else{
    console.log("Voting not allowed")
}