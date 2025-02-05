let signUpBtn = document.querySelector(".signUpBtn");
let nErr = document.querySelector(".nErr");
let emailErr = document.querySelector(".emailErr");
let pErr = document.querySelector(".pErr");
let container=document.querySelector(".container");
let display=document.querySelector(".display");
let nameValue=document.querySelector(".nameValue");
let emailValue=document.querySelector(".emailValue");

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded",()=>
{
   
    signUpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
    // Clear any previous error messages
        nErr.style.display = "none";
        emailErr.style.display = "none";
        pErr.style.display = "none";
        
    
       
        if (name === "") {
            nErr.style.display = "block";  
            var span = document.createElement('span');
            span.innerHTML = "X";
            document.querySelector('.nameinp').appendChild(span);
            return;
        }
        
        if (email === "") {
           
       
            emailErr.style.display = "block";
            var span = document.createElement('span');
            span.innerHTML = "X";
            document.querySelector('.emailinp').appendChild(span);
               return;
        }
        if(!(isValidEmail)){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       emailErr.innerHTML="Please enter a valid email";
            emailErr.style.display = "block";
            var span = document.createElement('span');
            span.innerHTML = "X";
            document.querySelector('.emailinp').appendChild(span);
            return
        }
        if (password === "") {
            pErr.style.display = "block";
            var span = document.createElement('span');
            span.innerHTML = "X";
            document.querySelector('.passwordinp').appendChild(span);
            return;
        }
        
        if (password.length < 8) {
            pErr.innerHTML = "Minimum 8 characters required";
            var span = document.createElement('span');
            span.innerHTML = "!";
            document.querySelector('.passwordinp').appendChild(span);
            return;
        }
        container.style.display="none";
        nameValue.innerHTML=name;
        emailValue.innerHTML=email;
        

       display.style.display="block";
    });
    
})
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
