const nodemailer = require("nodemailer");
const formidable = require("formidable");

module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function (req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = new formidable.IncomingForm({
    uploadDir: "/tmp",
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error Formidable:", err);
      return res.status(500).json({ error: "Gagal memproses data." });
    }

    try {
      const getVal = (val) => (Array.isArray(val) ? val[0] : val);

      const senderName = getVal(fields.name) || "No Name";
      const senderEmail = getVal(fields.email);
      const subject = getVal(fields.subject) || "New Message";
      const message = getVal(fields.message) || "";
      
      // LOGIKA OPSIONAL FILE:
      // Ambil file hanya jika user menguploadnya
      let attachmentFile = null;
      if (files.attachment) {
        attachmentFile = getVal(files.attachment);
      }

      if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
        throw new Error("MAIL_USER/MAIL_PASS belum disetting");
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
        subject: `Portfolio: ${subject}`,
        text: `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
        // Jika attachmentFile ada isinya, lampirkan. Jika null, kirim array kosong.
        attachments: attachmentFile ? [
          {
            filename: attachmentFile.originalFilename,
            path: attachmentFile.filepath,
          }
        ] : [],
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });

    } catch (error) {
      console.error("Error SMTP:", error);
      return res.status(500).json({ error: error.message });
    }
  });
};