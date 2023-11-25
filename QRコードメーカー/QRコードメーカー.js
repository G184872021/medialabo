
/*const message=document.getElementById("mes");*/
/*const url="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=";*/
/*const qr=url+message.value;

function generate(){
    console.log(message.value);
    console.log(qr);
}*/

function generate() {
    const message = document.getElementById("mes").value.trim();
    const url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" + encodeURIComponent(message);
    const qrcodeImg = document.getElementById("qrcode");
    qrcodeImg.src = url;
    qrcodeImg.alt = message; 
}