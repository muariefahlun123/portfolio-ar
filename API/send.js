import nodemailer from "nodemailer";

export const config = {
    api: {
    bodyParser: false,
    },
};

import formidable from "formidable";
import fs from "fs";

export default function handler(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err });

    try {
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: fields.email,
        to: process.env.MAIL_USER,
        subject: fields.subject,
        text: fields.message,
        attachments: files.attachment
        ? [
            {
                filename: files.attachment.originalFilename,
                content: fs.readFileSync(files.attachment.filepath),
                },
            ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
    } catch (error) {
    res.status(500).json({ error: error.message });
        }
    });
}