function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let whatsappMessage = `Name : ${name}%0A` + `Email : ${email}%0A` + `Message : ${message}`;
    let whatsappURL = `https:wa.me/916386702707?text=${whatsappMessage}`
    window.open(whatsappURL, "_blank");
}

function openDonateModal() {
    document.getElementById("donateModal").style.display = "block";
}
 
function closeDonateModal() {
    document.getElementById("donateModal").style.display = "none";
}

function copyUPI() {
    navigator.clipboard.writeText("yourupi@paytm");
    alert("UPI ID Copied!");
}