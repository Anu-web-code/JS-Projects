const ageBtn=document.getElementById("ageBtn");
const ageDisplay=document.getElementById("ageDisplay");
const ageInput=document.getElementById("ageInput");

ageBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let inputAge=new Date(ageInput.value);
    let currentDate=new Date();

    let age=currentDate.getFullYear()-inputAge.getFullYear();
let monthDiff=currentDate.getMonth()-inputAge.getMonth();
    if(isNaN(age))
    {
        ageDisplay.textContent=`Your age can't be calculated`;
        ageDisplay.style.color='green';
        return;
    }
    if(inputAge.getFullYear()>currentDate.getFullYear())
    {
        ageDisplay.textContent=`You are not yet born!`;
        ageDisplay.style.color='green';
        return;
    }

    if(monthDiff === 0 && (inputAge.getFullYear()===currentDate.getFullYear()))
    {
        ageDisplay.textContent=`You are ${monthDiff} months old!`;
        return;
    }
    ageDisplay.textContent=`You are ${age} years old!`;
    ageDisplay.style.color='green';
})