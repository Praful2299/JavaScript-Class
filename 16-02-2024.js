function task(){
    let name=document.getElementById('name').value
    let mail=document.getElementById('email').value
    let contact=document.getElementById('contact').value
    let address= document.getElementById('address').value
    let dob=document.getElementById('dob').value
    let pass=document.getElementById('password').value
    let cpass=document.getElementById('cpassword').value

    if (name=="" || mail=="" || contact=="" || address=="" || dob=="" || pass=="" || cpass==""){
        alert("Please fill the empty fields")
        return false;
    }
    else if(!(mail.match(/[@]/))){
        alert("Please enter valid email id")
        return false;
    }
    else if(isNaN(contact)){
        alert("Please input valid number")
        return false;
    }
    else if(contact.length>10 || contact.length<10){
        alert("Please enter valid number")
        return false;
    }
    else if(!(pass.match(/[!@#$%^&*_+-]/))){
        alert("Please include special character to make password strong")
        return false;
    }
    else if(pass!=cpass){
        alert("Please match password")
        return false;
    }
}