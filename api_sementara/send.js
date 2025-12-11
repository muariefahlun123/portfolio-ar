import nodemailer from "nodemailer";
import formidable from "formidable";

// PENTING: Matikan body parser agar formidable bisa membaca file
export const config = {
    api: {
    bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
    if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ error: "Error parsing form data" });
    }

    try {
      // PENTING: Formidable v3 mengembalikan Array. Ambil index [0].
      // Gunakan operator '||' untuk jaga-jaga jika datanya string biasa.
        const getField = (field) => Array.isArray(field) ? field[0] : field;
        const getFile = (file) => Array.isArray(file) ? file[0] : file;

        const senderName = getField(fields.name);
        const senderEmail = getField(fields.email);
        const subject = getField(fields.subject);
        const message = getField(fields.message);
        const attachment = files.attachment ? getFile(files.attachment) : null;

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS, // Pastikan ini APP PASSWORD, bukan password login gmail
            },
        });

        const mailOptions = {
        from: `"${senderName}" <${process.env.MAIL_USER}>`, // Kirim dari diri sendiri agar tidak masuk spam
        replyTo: senderEmail, // Agar saat klik reply, membalas ke pengirim
        to: process.env.MAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
        attachments: attachment ? [{
            filename: attachment.originalFilename,
            path: attachment.filepath
            }] : []
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });

    } catch (error) {
        console.error("Email error:", error);
        return res.status(500).json({ error: error.message });
    }
    });
}