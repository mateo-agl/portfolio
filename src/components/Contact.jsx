import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
    const form = useRef();
    const [toSend, setToSend] = useState({ from_name: '', to_name: '', message: '', reply_to: '' });
  
    const onSubmit = e => {
      e.preventDefault();
      emailjs.send(
        'service_osecgz9',
        'template_hugptro',
        toSend,
        'user_LJGGYMoZAiXX9QAcZO4cw'
      )
        .then(() => window.alert("Mail sent"))
        .catch(() => window.alert("Failed to send mail"));
    };
  
    const handleChange = e => setToSend({ ...toSend, [e.target.name]: e.target.value });
    return (
      <section 
        id="contact" 
        className="row py-6">
        <h2>Contact Me</h2><hr/>
        <div className="col-sm-8 col-lg-6 mx-auto">
          <form ref={form} className="d-flex flex-column p-5 border rounded-0 shadow" onSubmit={onSubmit}>
            <input
              type='text'
              className="form-control rounded-0 my-2"
              name='from_name'
              placeholder='Name'
              value={toSend.from_name}
              onChange={handleChange}
              maxLength="100"
              required/>
            <input
              type='email'
              className="form-control rounded-0 my-2"
              name='reply_to'
              placeholder='Email'
              value={toSend.reply_to}
              onChange={handleChange}
              maxLength="200"
              required/>
            <input
              type='text'
              className="form-control rounded-0 my-2"
              name='subject'
              placeholder='Subject'
              value={toSend.subject}
              onChange={handleChange}
              maxLength="200"
              required/>
            <textarea
              className="form-control rounded-0 my-2"
              name='message'
              placeholder='Message'
              value={toSend.message}
              onChange={handleChange}
              required/>
            <button 
            type='submit' 
            className="btn btn-primary mx-auto rounded-0">
              Send
            </button>
          </form>
        </div>
      </section>
    )
  }