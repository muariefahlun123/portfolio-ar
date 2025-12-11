document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector("#contact-form");
    const responseMessage = document.querySelector(".ajax-response");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const submitBtn = e.target.querySelector(".submit-btn");
            const originalBtnText = submitBtn.innerHTML;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            if(responseMessage) responseMessage.style.display = 'none';

            const formData = new FormData(e.target);

            try {
                // Arahkan ke API Vercel
                const res = await fetch("/api/send", {
                    method: "POST",
                    body: formData
                });

                const result = await res.json();

                if (res.ok && result.success) {
                    if(responseMessage) {
                        responseMessage.innerText = "Message sent successfully!";
                        responseMessage.className = "ajax-response success"; // Pakai class CSS hijau
                        responseMessage.style.display = 'block';
                    } else {
                        alert("Success!");
                    }
                    e.target.reset();
                } else {
                    throw new Error(result.error || "Failed to send.");
                }
            } catch (err) {
                console.error(err);
                if(responseMessage) {
                    responseMessage.innerText = "Error: " + err.message;
                    responseMessage.className = "ajax-response error"; // Pakai class CSS merah
                    responseMessage.style.display = 'block';
                } else {
                    alert("Error: " + err.message);
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }
});