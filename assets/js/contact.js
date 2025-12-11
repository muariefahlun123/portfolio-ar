document.querySelector("#contact-form").addEventListener("submit", async e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // tombol loading
    const submitBtn = e.target.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    try {
        const res = await fetch("/api/send", {
            method: "POST",
            body: formData
        });

        const result = await res.json();

        if (result.success) {
            alert("File and message sent successfully!");
            e.target.reset();
        } else {
            alert("Failed to send message: " + result.error);
        }

    } catch (err) {
        alert("Error sending message: " + err.message);
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Message";
});