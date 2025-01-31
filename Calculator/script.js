const buttons=document.querySelectorAll(".buttons");
const btns=document.querySelectorAll(".btn");
let input=document.querySelector(".input");

let str="";

btns.forEach(button=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerText == 'AC')
        {
            str="";
            input.value=str;
        }
       
        else if(e.target.innerText == '=')
        {
           
            try {
                str=eval(input.value);
            input.value=str;
            } catch (error) {
            
                input.value="Error";
                str="";
            }
        }
        else if (e.target.innerText == 'C') {
            str = str.substring(0, str.length);  
            input.value = str;  
        }
else{
    
    str=input.value;
    input.value=str+e.target.innerText;
}






    })
})