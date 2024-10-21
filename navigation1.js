const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
generatebtn = document.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.Value;
    if(!qrinput)return;
    generatebtn.innerHTML = "Generating QR Code...";
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate QR Code";
    });
    
});
qrinput.addEventListener("keyup", () => {
    if(!qrinput.Value){
        wrapper.classList.remove("active");
    }

});