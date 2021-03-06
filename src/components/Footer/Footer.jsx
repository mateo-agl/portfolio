import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Links } from "../Links/Links";
import "./footer.styles.css";

export const Footer = () => {
	const form = useRef();
	const [toSend, setToSend] = useState({ from_name: "", subject: "", message: "", reply_to: "" });
  
	const onSubmit = e => {
		e.preventDefault();
		emailjs.send(
			"service_osecgz9",
			"template_hugptro",
			toSend,
			"user_LJGGYMoZAiXX9QAcZO4cw"
		)
		.then(
			() => 
			Swal.fire({
				icon: "success",
				title: "Message sent",
				showConfirmButton: false,
				timer: 1500,
				background: "#023047",
				color: "#8ECAE6"
			})
		)
		.catch(
			() => 
			Swal.fire({
				icon: "error",
				title: "Failed to send message",
				text: "please use the mail below the form",
				showConfirmButton: false,
				timer: 3000,
				background: "#023047",
				color: "#8ECAE6"
			})
		);
	};
	
	const handleChange = e => setToSend({ ...toSend, [e.target.name]: e.target.value });
	return (
		<footer
			className="reveal col-xxl-8 col-xsm-12 d-flex flex-column vh-100 mx-auto text-center"
			id="contacto"
		>
			<form
				className="d-flex flex-column my-auto"
				ref={form}
				onSubmit={onSubmit}
			>
				<div className="input-cont col-auto m-auto border rounded">
					<h2>Contactame</h2>
					<div className="input-group">
						<div className="mb-2 mx-2">
							<input
								className="input border rounded p-2"
								maxLength="100"
								name="from_name"
								placeholder="Nombre"
								required
								type="text"
								value={toSend.from_name}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-2 mx-2">
							<input
								className="input border rounded p-2"
								maxLength="200"
								name="reply_to"
								placeholder="Email"
								required
								type="email"
								value={toSend.reply_to}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="mb-2 mx-2">
						<input
							className="input border rounded p-2"
							maxLength="200"
							name="subject"
							placeholder="Asunto"
							required
							type="text"
							value={toSend.subject}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-2 mx-2">
						<textarea
							className="input border rounded p-2"
							name="message"
							placeholder="Mensaje"
							required
							value={toSend.message}
							onChange={handleChange}
						/>
					</div>
					<button 
						className="btn-theme mx-auto px-4 rounded" 
						type="submit"
					>
						Enviar
					</button>
				</div>
			</form>
			<Links linksClass="footer-links mx-auto"/>
			<a
				className="mail mx-auto"
				href="mailto:aguilarmateo.1604@gmail.com"
			>
				aguilarmateo.1604@gmail.com
			</a>
			<p className="footer-text m-0 py-4">Desarrollado por Mateo Aguilar</p>
		</footer>
	);
};