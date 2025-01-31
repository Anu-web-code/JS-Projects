let number=document.getElementById("Number");
let convert=document.getElementById("convert");
let ans=document.querySelector(".Answer");
// let selectOpt=document.querySelectorAll("select")[0].value;
   
document.querySelectorAll("button")[0].addEventListener("click",(e)=>{
    
    let input=number.value;
    let selectOpt = document.querySelectorAll("select")[0].value; 
    if(selectOpt === "Decimal to Binary")
           {
             let bin=parseInt(input).toString(2);
            ans.innerHTML=`Answer: ${bin}`
           }
           else if(selectOpt === "Decimal to Octal")
              {
                
                let oct=parseInt(input).toString(8);
                ans.innerHTML=`Answer: ${oct}`
              }
             else if(selectOpt === "Decimal to Hexa-Decimal")
              {
                
                let hex=parseInt(input).toString(16);
                 ans.innerHTML=`Answer: ${hex}`
              }
              else if(selectOpt === "Binary to Decimal")
            {
                let bn=parseInt(input,2);
              ans.innerHTML=`Answer: ${bn}`
            }
              else if(selectOpt === "Hexa-Decimal to Decimal")
            {
                let hn=parseInt(input,16);
                ans.innerHTML=`Answer: ${hn}`
            }
              else if(selectOpt === "Octal to Decimal")
            {
                let on=parseInt(input,8);
               ans.innerHTML=`Answer: ${on}`
            }
              else if(selectOpt === "Binary to Hexa-Decimal")
            {
                let on=parseInt(input,2);
                 ans.innerHTML=`Answer: ${on}`
            }
              else if(selectOpt === "Hexa-Decimal to Binary")
            {
                let on=parseInt(input,16);
              ans.innerHTML=`Answer: ${on}`
            }
            else if(selectOpt === "Binary to Octal")
            {
                let on=parseInt(input,8);
                 ans.innerHTML=`Answer: ${on}`
            }
            
})

document.querySelectorAll("button")[1].addEventListener("click",(e)=>{
    
    e.preventDefault();
   number.value=" ";
   ans.innerHTML=`Answer: `;
})














// document.querySelectorAll("select")[0].addEventListener("change",(e)=>{
 
//     let type=e.target.value;
//     let input=number.value;

   
//   if(type === "Decimal to Binary")
//   {
    
//     let bin=parseInt(input).toString(2);
//     console.log(bin);
//   }
//  else if(type === "Decimal to Octal")
//   {
    
//     let oct=parseInt(input).toString(8);
//     console.log(oct);
//   }
//  else if(type === "Decimal to Hexa-Decimal")
//   {
    
//     let hex=parseInt(input).toString(16);
//     console.log(hex);
//   }
//   else if(type === "Binary to Decimal")
// {
//     let bn=parseInt(input,2);
//     console.log(bn);
// }
//   else if(type === "Hexa-Decimal to Decimal")
// {
//     let hn=parseInt(input,16);
//     console.log(hn);
// }
//   else if(type === "Octal to Decimal")
// {
//     let on=parseInt(input,8);
//     console.log(on);
// }
//   else if(type === "Binary to Hexa-Decimal")
// {
//     let on=parseInt(input,16);
//     console.log(on);
// }
//   else if(type === "Hexa-Decimal to Binary")
// {
//     let on=parseInt(input,2);
//     console.log(on);
// }


// })
    

// let n=225;
// console.log(n.toString(8));
// console.log(n.toString(2));
// console.log(n.toString(16));