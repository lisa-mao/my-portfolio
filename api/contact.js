// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: 'Vul alle velden in.' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <contact@lisamao.nl>',
            to: ['email.lisamao@gmail.com'],
            reply_to: email,
            subject: 'Nieuw bericht via Portfolio',
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #333;">Nieuw bericht ontvangen</h2>
                    <p><strong>Van:</strong> ${email}</p>
                    <p><strong>Bericht:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: 'Kon de e-mail niet verzenden.' });
    }
}