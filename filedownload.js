const fileinput = document.querySelector("input"),
downloadbtn = document.querySelector("button");

downloadbtn.addEventListener("click", e => {
    e.preventDefault();
    fetchfile(fileinput.value);
});

function fetchfile(url) {
    fetch(url).then(res =>res.blob()).then(file => {
        let temurl = URL.createObjectURL(file);
        let atag = document.createElement("a");
        atag.href = temurl;
        atag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL(temurl);
        downloadbtn.innerText = "download file";
        
    }).catch(() => {
        downloadbtn.innerText = "download file";
        alert("failed to download file!");
    });
}