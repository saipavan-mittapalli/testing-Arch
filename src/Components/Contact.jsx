import React from 'react';
// import { useState } from 'react';
import '../Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "41c03f16-3b7f-4d5e-b723-af371398a522");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    if (data.success) {
        setResult("Sent Successfully");
        event.target.reset(); // Optional: Clears the input fields too

        // --- The 7-Second Reset Logic ---
        setTimeout(() => {
            setResult("");
        }, 12000); 
        
    } else {
        setResult("Error!");
        setTimeout(() => setResult(""), 5000);
    }
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="label">Get in Touch</span>
        <h2 className="section-title">From sketches to structures. <br/> <br/> <span> Let’s talk.</span></h2>
      </div>

      <div className="contact-container">
        {/* Inquiry Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={onSubmit} className="inquiry-form">
                <div className="form-group">
                <input type="text" placeholder="Your Name*" required name='name'/>
                </div>
                <div className="form-group">
                <input type="text" placeholder="Your Phone number*" required name='phone number'/>
                </div>
                <div className="form-group">
                <select required name='project-type'>
                    <option value="">Project Type*</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="interior">3D Modeling</option>
                    <option value="sketch">2D Sketching</option>
                </select>
                </div>
                <div className="form-group">
                <textarea name='message' placeholder="Tell us about your vision (Optional)" rows="5"></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`cta-button ${result === "Sent Successfully" ? "btn-success" : "cta-solid"}`}
                  disabled={result === "Sent Successfully"}
                >
                  {result === "Sent Successfully" ? "Sent Successfully" : "Send Message"}
                </button>
          </form>
        </div>

        {/* Map & Location */}
        <div className="contact-map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58117.09510460787!2d79.57289790147853!3d17.96001863040801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1774319741369!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '4px' }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
        </div>
      </div>

      {/* Instagram Integration Label */}
      <div className="insta-footer">
        <p>Follow our process on Instagram</p>
        <a href="https://www.instagram.com/prunitharchitects" target="_blank" rel="noreferrer">
          @prunitharchitects
        </a>
      </div>
    </section>
  );
};

export default Contact;