import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

export const Footer = () => {
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
		<footer className="col-8 d-flex flex-column vh-100 mx-auto text-center" id="contact">
			<form
				className="d-flex flex-column my-auto p-5"
				ref={form}
				onSubmit={onSubmit}
			>
				<div className="input-cont d-flex flex-column m-auto">
					<h2>Contact Me</h2>
					<div>
						<input
							className="input"
							maxLength="100"
							name='from_name'
							placeholder='Name'
							required
							type='text'
							value={toSend.from_name}
							onChange={handleChange}
						/>
						<input
							className="input"
							maxLength="200"
							name='reply_to'
							placeholder='Email'
							required
							type='email'
							value={toSend.reply_to}
							onChange={handleChange}
						/>
					</div>
					<input
						className="input"
						maxLength="200"
						name='subject'
						placeholder='Subject'
						required
						type='text'
						value={toSend.subject}
						onChange={handleChange}
					/>
					<textarea
						className="input"
						name='message'
						placeholder='Message'
						required
						value={toSend.message}
						onChange={handleChange}
					/>
					<button 
						className="send-btn mx-auto fs-5 px-4 rounded-0" 
						type='submit'
					>
						SEND
					</button>
				</div>
			</form>
			<p className="footer-text m-0 py-4">© Mateo Aguilar 2021</p>
		</footer>
	);
};