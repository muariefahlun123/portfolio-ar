document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector("#contact-form");
    const responseMessage = document.querySelector(".ajax-response");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault(); // Mencegah reload halaman

            // 1. Ambil data form (otomatis mendeteksi input text & file)
            const formData = new FormData(e.target);

            // 2. Atur UI Tombol (Loading State)
            const submitBtn = e.target.querySelector(".submit-btn");
            const originalBtnContent = submitBtn.innerHTML; // Simpan icon & text asli
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            // 3. Bersihkan pesan error/sukses sebelumnya
            if (responseMessage) {
                responseMessage.classList.remove("success", "error");
                responseMessage.style.display = "none";
                responseMessage.innerText = "";
            }

            try {
                // 4. Kirim request ke Vercel Serverless Function
                const res = await fetch("/api/send", {
                    method: "POST",
                    body: formData
                    // Catatan: Jangan set header 'Content-Type' secara manual saat pakai FormData.
                    // Browser akan otomatis mengaturnya untuk multipart/form-data.
                });

                const result = await res.json();

                if (res.ok && result.success) {
                    // --- SUKSES ---
                    if (responseMessage) {
                        responseMessage.classList.add("success");
                        responseMessage.innerText = "Message and file sent successfully!";
                        responseMessage.style.display = "block";
                    } else {
                        alert("Message sent successfully!");
                    }
                    e.target.reset(); // Kosongkan form
                } else {
                    // --- GAGAL DARI API ---
                    throw new Error(result.error || "Failed to send message.");
                }

            } catch (err) {
                // --- ERROR JARINGAN / SERVER ---
                console.error(err);
                if (responseMessage) {
                    responseMessage.classList.add("error");
                    responseMessage.innerText = "Error: " + err.message;
                    responseMessage.style.display = "block";
                } else {
                    alert("Error: " + err.message);
                }
            } finally {
                // 5. Kembalikan tombol ke kondisi semula
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }
        });
    }
});