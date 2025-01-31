const addBtn=document.querySelector(".addBtn");
const textInput=document.querySelector(".textInput");
const toDoList=document.querySelector(".toDoList");

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(textInput.value === "")
    {
        alert("Enter something!");
        return;
    }
    else{   
        let li=document.createElement("li");
        li.innerHTML=textInput.value.trim();
        let span=document.createElement("span");
        span.innerHTML="x";
        toDoList.appendChild(li);
        li.appendChild(span);

        span.addEventListener("click",(e)=>{
            e.preventDefault();
            toDoList.removeChild(li);
        })
        li.addEventListener("click",(e)=>{
            e.preventDefault();
            li.style.textDecoration="line-through";
            li.style.textDecorationColor="Green";
            li.style.textDecorationThickness="0.2rem";
            li.removeChild(span);
        })
    }
    textInput.value="";
    
})