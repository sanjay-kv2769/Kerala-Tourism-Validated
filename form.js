// LOGIN PAGE

let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");




function isEmail(){
    if(email.value.trim()==""){
        alert("Fields cannot be empty!");
        email.style.border="2px solid red";
        return false;
    }
        
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
        if(regexp.test(email.value)){
            return validate();
        }
        else{
            error.innerHTML = "Invalid Email!";
            error.style.color = "red";
            return false;
        }
    function validate(){
        if(email.value.trim()==""){
            alert("Fields cannot be empty!");
            email.style.border="2px solid red";
            return false;
        }
        else if(pwd.value.trim()==""){
            alert("Fields cannot be empty!");
            pwd.style.border="2px solid red";
            return false;
        }
        else{
            alert("Logged In Successfully");
            return true;
        }
    }
        
        
}





// SIGNUP PAGE


let email2 = document.getElementById("email2");
let number2 = document.getElementById("number2");
let pwd2 = document.getElementById("pwd2");

let error2 = document.getElementById("error2");

let error3 = document.getElementById("error3");
var data = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/




const indicator = document.querySelector(".indicator");
const input = document.getElementById("pwd2");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".textpassmt");
const showBtn = document.querySelector(".showBtn");
var data1 = /[a-zA-Z]/;
var data2 = /\d+/;
var data3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;








function isEmail2(){
    if(email2.value.trim()==""){
        alert("Fields cannot be empty!");
        email2.style.border="2px solid red";
        return false;
    }
        
        let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
            if(regexp.test(email2.value)){
            return validate2();
            }
            else{
                error2.innerHTML = "Invalid Email!";
                error2.style.color = "red";
                return false;
            }
    function validate2(){   
        if(number2.value.trim()==""){
            alert("Fields cannot be empty!");
            number2.style.border="2px solid red";
            return false;
        }
        else if(!number2.value.match(data))
        {
            error3.innerHTML = "Mobile No. Invalid!";
            error3.style.color = "red";
            return false;
        }
        else{
            return validate3();
        }

    }
    function validate3(){
        if(pwd2.value.trim() != ""){
            indicator.style.display = "block";
            indicator.style.display = "flex";
            return validate4();
            }
            else{
                indicator.style.display = "none";
                pwd2.style.border="2px solid red";
                alert("Fields cannot be empty!");
                return false;
            }
        }
    }
function validate4(){   
            if(input.value.length <= 3 && (input.value.match(data1) || input.value.match(data2) || input.value.match(data3)))no=1;
            if(input.value.length >= 6 && ((input.value.match(data1) && input.value.match(data2)) || (input.value.match(data3))))no=2;
            if(input.value.length >= 6 && input.value.match(data1) && input.value.match(data2) && input.value.match(data3))no=3;
            if(no==1){
                weak.classList.add("active");
                text.style.display = "block";
                text.textContent = "Your password is too week";
                text.classList.add("weak");
                return false;
                }
                if(no==2){
                medium.classList.add("active");
                text.textContent = "Your password is medium";
                text.classList.add("medium");
                return false;
                }
                else{
                 medium.classList.remove("active");
                 text.classList.remove("medium");
                 }
                if(no==3){
                    weak.classList.add("active");
                    medium.classList.add("active");
                    strong.classList.add("active");
                    text.textContent = "Your password is strong";
                    text.classList.add("strong");
                    return true;
                }
                else{
                strong.classList.remove("active");
                text.classList.remove("strong");
                }
                showBtn.style.display = "block";
                showBtn.onclick = function(){
                if(input.type == "password"){
                        input.type = "password";
                        showBtn.textContent = "HIDE";
                        showBtn.style.color = "#23ad5c";
                    }
                    else{
                    input.type = "password";
                    showBtn.textContent = "SHOW";
                    showBtn.style.color = "#000";
                    }
                }
                
                    
}


function validate5(){
    alert("Logged In Successfully");
}












