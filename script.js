const qrText=document.getElementById('qr-text');
const generate=document.getElementById('generate');
const download=document.getElementById('download');
const sizes=document.getElementById('sizes');
let size=sizes.value;
const qrContainer=document.querySelector('.qr-body');


generate.addEventListener('click',(e)=>{
    e.preventDefault();
qrText.value.length>0?generateQrCode():alert("Enter the text or URL to generate the QR Code");
})

sizes.addEventListener('change',(e)=>{
    e.preventDefault();
    size=e.target.value;
    qrText.value.length>0?generateQrCode():alert("Enter the text or URL to generate the QR Code");
})



function generateQrCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,
        {
text:qrText.value,
height:size,
width:size,
colorLight:"#fff",
colorDark:"#000",
        }

    )
}