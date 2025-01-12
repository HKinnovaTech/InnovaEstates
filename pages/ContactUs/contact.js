
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("mHQkNQDZqoJbi8tJd");
  
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Access the submit button to manage its state
      const submitButton = document.querySelector("#submit-button");
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
  
      const toName = document.getElementById("name").value;
      const email = document.getElementById("Email").value;
      const message = document.getElementById("message").value;
      const subject = document.getElementById("subject").value;
  
      emailjs
        .send("service_sasxov2", "template_iut5kie", {
          name: toName,
          email: email,
          message: message,
          subject: subject
        })
        .then(
          () => {
            alert("Message sent successfully!");
            event.target.reset(); // Reset the form after successful submission
          },
          (error) => {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again later.");
          }
        )
        .finally(() => {
          submitButton.textContent = "Submit";
          submitButton.disabled = false;
        });
    });
  });
  