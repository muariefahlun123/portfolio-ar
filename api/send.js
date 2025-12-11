import nodemailer from "nodemailer";
import formidable from "formidable";

// Config Vercel
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // UPDATE PENTING: Paksa simpan file di folder /tmp
  const form = new formidable.IncomingForm({
    uploadDir: "/tmp", // Wajib untuk Vercel Serverless
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // Batas file 10MB
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("❌ Error Formidable:", err);
      return res.status(500).json({ error: "Gagal memproses file upload." });
    }

    try {
      // Helper untuk ambil data array/string
      const getField = (f) => (Array.isArray(f) ? f[0] : f);
      const getFile = (f) => (Array.isArray(f) ? f[0] : f);

      const senderName = getField(fields.name) || "Anonymous";
      const senderEmail = getField(fields.email);
      const subject = getField(fields.subject) || "No Subject";
      const message = getField(fields.message) || "No Message";
      
      // Ambil file attachment (jika ada)
      const attachmentFile = files.attachment ? getFile(files.attachment) : null;

      // Debugging: Cek apakah Env Var terbaca (Jangan print password!)
      if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
        throw new Error("MAIL_USER atau MAIL_PASS belum disetting di Vercel!");
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS, 
        },
      });

      const mailOptions = {
        from: `"${senderName}" <${process.env.MAIL_USER}>`,
        replyTo: senderEmail,
        to: process.env.MAIL_USER,
        subject: `New Contact: ${subject}`,
        text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
        attachments: attachmentFile ? [
          {
            filename: attachmentFile.originalFilename,
            path: attachmentFile.filepath,
          },
        ] : [],
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });

    } catch (error) {
      console.error("❌ Error Send Mail:", error);
      // Kirim pesan error asli ke frontend untuk debugging
      return res.status(500).json({ error: error.message });
    }
  });
}