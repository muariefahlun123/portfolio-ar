// Gunakan 'require' agar aman di semua lingkungan Node.js
const nodemailer = require("nodemailer");
const formidable = require("formidable");

// Matikan body parser bawaan Vercel
module.exports.config = {
    api: {
    bodyParser: false,
    },
};

module.exports = async function (req, res) {
  // 1. Cek Method
if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
}

// 2. Konfigurasi Formidable (Wajib folder /tmp untuk Vercel)
const form = new formidable.IncomingForm({
    uploadDir: "/tmp",
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10 MB
});

// 3. Proses Form
form.parse(req, async (err, fields, files) => {
    if (err) {
        console.error("Error Formidable:", err);
        return res.status(500).json({ error: "Gagal memproses file." });
    }

    try {
// Helper untuk menangani Array vs String dari Formidable v3
    const getVal = (val) => (Array.isArray(val) ? val[0] : val);

    const senderName = getVal(fields.name) || "No Name";
    const senderEmail = getVal(fields.email);
    const subject = getVal(fields.subject) || "New Message";
    const message = getVal(fields.message) || "";
    const attachmentFile = files.attachment ? getVal(files.attachment) : null;

// Cek Environment Variables
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
        throw new Error("MAIL_USER/MAIL_PASS belum disetting di Vercel");
    }

// 4. Setup Transporter Email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS, // App Password (tanpa spasi)
        },
    });

// 5. Setup Isi Email
    const mailOptions = {
        from: `"${senderName}" <${process.env.MAIL_USER}>`, // Kirim via diri sendiri
        replyTo: senderEmail, // Balas ke pengirim asli
        to: process.env.MAIL_USER,
        subject: `Portfolio: ${subject}`,
        text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
        attachments: attachmentFile ? [
            {
            filename: attachmentFile.originalFilename,
            path: attachmentFile.filepath,
            }
        ] : [],
    };

// 6. Kirim!
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

    } catch (error) {
        console.error("Error SMTP:", error);
        return res.status(500).json({ error: error.message });
        }
    });
};