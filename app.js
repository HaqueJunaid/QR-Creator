var qrcode = new QRCode("qrcode", "www.google.com");
let eText = document.querySelector("#searchArea");
function search() {

    eText.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            qrcode.makeCode(e.target.value)
        }
    })
}
search();