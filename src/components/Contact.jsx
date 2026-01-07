import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Modular CSS
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Envoi en cours...');


        emailjs.sendForm('service_17u4ziq', 'template_977ov45', form.current, 'M7nH5FcHyBT73TqgG')
            .then((result) => {
                console.log(result.text);
                setStatus('Message envoyé avec succès !');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('Échec de l\'envoi. Veuillez réessayer.');
            });
    };

    return (
        <SectionWrapper id="contact" className="section contact">
            <h2 className="section-title">Contactez-moi</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: '#8892b0' }}>
                Je suis actuellement à la recherche de nouvelles opportunités. Mon inbox est toujours ouvert. Que vous ayez une question ou juste envie de dire bonjour, je ferai de mon mieux pour vous répondre !
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>
                    Nom
                    <input type="text" name="user_name" required placeholder="" />
                </label>
                <label>
                    Email
                    <input type="email" name="user_email" required placeholder="" />
                </label>
                <label>
                    Message
                    <textarea name="message" required rows="5" />
                </label>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                >
                    Envoyer
                </motion.button>
                {status && <p className="status-message">{status}</p>}
            </form>
        </SectionWrapper>
    );
};

export default Contact;
