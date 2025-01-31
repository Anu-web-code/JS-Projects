let btns = document.querySelectorAll(".btns");
let color=document.getElementById("color");


document.addEventListener("DOMContentLoaded", () => {
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let text = document.querySelector(".text");
        if (e.target.innerText === "Left") {
            text.style.textAlign = "left";
        } else if (e.target.innerText === "Right") {
            text.style.textAlign = "right";
        } else if (e.target.innerText === "Center") {
            text.style.textAlign = "center";
        } else if (e.target.innerText === "B") {
            text.style.fontWeight = "900"; // or "bold"
        } else if (e.target.innerText === "I") {
            text.style.fontStyle = "italic"; // Removed the extra space
        } else if (e.target.innerText === "U") {
            text.style.textDecoration = "underline";
        }
        else if(e.target.innerText === 'Upper Case')
        {
            text.style.textTransform="uppercase";
        }
        else if(e.target.innerText === 'Lower Case')
        {
            text.style.textTransform="lowercase";
        }
     
        


// Font Size Change
document.querySelectorAll('select')[0].addEventListener('click', (e) => {
    let size = e.target.value;
    if (size === "Large") {
        text.style.fontSize = "18px";
    } else if (size === "Larger") {
        text.style.fontSize = "22px";
    } else if (size === "Small") {
        text.style.fontSize = "12px";
    } else if (size === "Smaller") {
        text.style.fontSize = "10px";
    }

 
});
//Font family change
document.querySelectorAll('select')[1].addEventListener('click', (e) => {
    let font = e.target.value;
    if (font === "Georgia") {
        text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    } else if (font === "san-serif") {
        text.style.fontFamily = "sans-serif";
    } else if (font === "Verdana") {
        text.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    } else if (font === "cursive") {
        text.style.fontFamily = "cursive";
    }
});

    });
});
    
});

document.addEventListener("DOMContentLoaded",()=>{
    let text=document.querySelector(".text"); 
    document.querySelector("#clear").addEventListener("click",()=>{
        text.value="";
    })
})
document.addEventListener("DOMContentLoaded",()=>{
    let text=document.querySelector(".text");
    let box=document.querySelector(".box");
    let textarea=document.querySelector("textarea");
    let textbox=document.querySelector(".textarea");
  
    color.addEventListener("click",()=>{
        if(box.style.backgroundColor === "white")
        {
            box.style.backgroundColor = "black";
            textarea.style.backgroundColor="black";
            text.style.color="white";
            textbox.style.border="2px solid white";
        }
        else{
            box.style.backgroundColor = "white";
            textarea.style.backgroundColor="white";
            text.style.color="black";
        }
    })
})
