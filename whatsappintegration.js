 
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("wf-form-Contact-Form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      let name = document.getElementById("FirstName").value.trim();
      let message = document.getElementById("Message-3").value.trim();
      
      if (!name || !message) {
        alert("Please enter your name and message before submitting.");
        return;
      }

      let fullMessage = `Hello, my name is ${name}. ${message}`;
      let encodedMessage = encodeURIComponent(fullMessage);

      // Select a phone number (you can modify this logic if needed)
      let phoneNumber = "+917034071444"; // Default to India number

      // Construct the WhatsApp URL
      let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappURL, "_blank");
    });
  });
 
