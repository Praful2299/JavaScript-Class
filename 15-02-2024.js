function validate(){
    let name=document.getElementById('name').value
    let contact=document.getElementById('contact').value
    let pass=document.getElementById('pass').value
    let cpass=document.getElementById('cpass').value

        if(contact.length>10 || contact.length<10 ){
            alert("Please input valid number")
            return false;
        }
    else if(name=="" || contact=="" || pass=="" || cpass==""){
        alert("Please fill the emplty field")
        return false;
    }
    else if(isNaN(contact)){
        alert("Please input valide number")
        return false;
    }
    else if(pass!=cpass){
        alert("Please re-enter password")
        return false;
    }

    else if(!(pass.match(/[!@#$%^&*+]/))){
        alert("Please enter any special symbol")
        return false;
    }
}