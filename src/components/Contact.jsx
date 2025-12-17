import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // Feedback message

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    
    const SERVICE_ID = "service_urwmjjk";
    const TEMPLATE_ID = "template_2vkjgbb";
    const PUBLIC_KEY = "gY7yiMT4q8D-RMZyP";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          e.target.reset();
          setTimeout(() => setStatus(""), 5000); // Clear message after 5s
      }, (error) => {
          console.log(error.text);
          setStatus("Failed to send. Please try again.");
      });
  };

  return (
    <section className="contact" id="contact" data-aos="fade-down">
      <div className="main-text">
        <p className='get'>GET IN TOUCH</p>
        <h2>Let's build something</h2>
        <p className="sub-text">
          A well-built product is not just a design and code, it's a solution that attracts users, keeps them engaged, and turns them into loyal customers.
        </p>
      </div>

      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" name="user_name" placeholder="Enter your name" required />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="email" name="user_email" placeholder="Enter your email" required />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" cols="30" rows="10" placeholder="Tell me more about your needs..." required></textarea>
          </div>

          <div className="form-btn">
            <button type="submit" className="btn">Send Message</button>
          </div>
          
          {/* Status Message */}
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
