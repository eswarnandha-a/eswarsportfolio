import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


const GlassForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Prepare template parameters with additional context
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      // Additional helpful info
      timestamp: new Date().toLocaleString(),
      user_agent: navigator.userAgent.substring(0, 100) // First 100 chars for context
    };

    console.log('Sending email with params:', templateParams); // Debug log

    // 1️⃣ Send message to you
    emailjs.send(
      'service_mqx6mdd',   // Your EmailJS service ID
      'template_l8qc4gk',  // Template ID for receiving message
      templateParams,
      'xovb8DpxDw8-pEpBA'  // Your public key
    )
    .then((response) => {
      console.log('✅ Main email sent successfully:', response);
      
      // 2️⃣ Send auto-reply to visitor (optional - don't fail if this fails)
      return emailjs.send(
        'service_mqx6mdd',   // Same service ID
        'template_qxzxnu7', // Template ID for auto-reply
        {
          to_name: formData.name.trim(),
          to_email: formData.email.trim(),
          reply_message: `Hello ${formData.name},\n\nThank you for visiting my portfolio and reaching out! I truly appreciate all kinds of feedback — whether it’s positive or constructive. Feel free to ask me anything or share your honest thoughts, and I’ll get back to you as soon as possible.\n\nBest regards,\nEswar Anand`
        },
        'xovb8DpxDw8-pEpBA'
      )
      .catch((autoReplyError) => {
        // Don't fail the whole process if auto-reply fails
        console.warn('⚠️ Auto-reply failed (but main email was sent):', autoReplyError);
        return Promise.resolve(); // Continue with success
      });
    })
    .then(() => {
      console.log('✅ Email process completed successfully');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('❌ Main email failed:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        text: error.text,
        name: error.name
      });
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="glass-form-container">
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        
        {submitStatus === 'success' && (
          <div className="form-message success">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="form-message error">
            Something went wrong. Please try again or email me directly at eswaranand1999@gmail.com
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="glass-input"
            placeholder="Enter your name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="glass-input"
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="glass-textarea"
            placeholder="Enter your message"
            rows="4"
            required
            disabled={isSubmitting}
          />
        </div>

        <button 
          type="submit" 
          className="glass-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default GlassForm;
