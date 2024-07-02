function praful(){
    let name=document.getElementById('name').value;
    let cont=document.getElementById('contact').value;
    let mail=document.getElementById('email').value;
    let password=document.getElementById('pass').value;
    let cpassword=document.getElementById('cpass').value

    if(name=="" || mail==" " || password=="" || cont=="" ||cpassword==""){
        alert("Please fill the empty fields")
        return false;
    }

    else if(isNaN(cont)){
        alert("Enter valid number")
        return false;
    }

    else if(cont.lenght>10 || cont.lenght<10){
        alert("Enter valid no.")
        return false;
    }

    else if (!(mail.match(/[@]/))){
        alert("Enter valid mail id")
        return false;
    }
    
    else if(!(password.match(/[!@#$%^*&+-]/))){
        alert("Please use atleast one special character")
        return false;
    }

    else if(password!=cpassword){
        alert("Please recheck the password")
        return false;
    }
}