let bar=document.querySelector(".bar");
let sidebar=document.querySelector(".sidebar");

bar.addEventListener('click',(e)=>{
    e.preventDefault();
    bar.style.display="none";
    sidebar.style.transform="translateX(0%)";

    
})
document.addEventListener('mouseup',(e)=>{
    if(!(sidebar.contains(e.target)))
        {
            bar.style.display="block";
            sidebar.style.transform="translateX(-100%)"   
        }
})