import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// Matikan body parser bawaan Vercel agar formidable bisa bekerja
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // 1. Validasi Method: Hanya izinkan POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = new formidable.IncomingForm();

  // 2. Parse Form Data
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(500).json({ error: "Error parsing form data" });
    }

    try {
      // PERBAIKAN PENTING UNTUK FORMIDABLE V3:
      // Formidable v3 mengembalikan data dalam bentuk Array (['value']).
      // Kita perlu mengambil elemen pertama [0] agar menjadi string.
      const senderName = Array.isArray(fields.name) ? fields.name[0] : fields.name;
      const senderEmail = Array.isArray(fields.email) ? fields.email[0] : fields.email;
      const emailSubject = Array.isArray(fields.subject) ? fields.subject[0] : fields.subject;
      const emailMessage = Array.isArray(fields.message) ? fields.message[0] : fields.message;
      
      // Ambil file (jika ada)
      const uploadedFile = files.attachment ? (Array.isArray(files.attachment) ? files.attachment[0] : files.attachment) : null;

      // 3. Konfigurasi Transporter (Gmail)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      // 4. Konfigurasi Email
      const mailOptions = {
        // PENTING: 'from' HARUS email kamu sendiri agar tidak diblokir Gmail (Policy SPF/DKIM)
        from: `"${senderName}" <${process.env.MAIL_USER}>`, 
        
        // Email tujuan (ke diri sendiri)
        to: process.env.MAIL_USER, 
        
        // Jika kamu klik reply di inbox, akan membalas ke email pengirim (tamu)
        replyTo: senderEmail, 
        
        subject: `Portfolio Contact: ${emailSubject}`,
        
        // Isi pesan diformat agar rapi
        text: `You have a new message from your portfolio website.\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${emailMessage}`,
        
        // Lampiran file (Attachment)
        attachments: uploadedFile
          ? [
              {
                filename: uploadedFile.originalFilename,
                path: uploadedFile.filepath, // Gunakan path/filepath langsung
              },
            ]
          : [],
      };

      // 5. Kirim Email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true });

    } catch (error) {
      console.error("Email sending error:", error);
      return res.status(500).json({ error: error.message || "Failed to send email" });
    }
  });
}