import React from "react";
import logoImg from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import footerTopBg from "../assets/footer-top-bg.jpg";
import footerBottomBg from "../assets/footer-bottom-bg.jpg";
const Footer = () => {
	return (
		<>
			<div className="pt-20 py-14 bg-cover bg-no-repeat px-4" style={{ backgroundImage: `url(${footerTopBg})` }}>
				<div className="container max-w-7xl mx-auto flex lg:gap-24 gap-14 items-center flex-col lg:flex-row">
					<div className="lg:flex-auto w-full">
						<img src={logoImg} alt="website Logo" />
						<h4 className="text-5xl pt-7 pb-5">Espresso Emporium</h4>
						<p className="pb-8">
							Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share
							with your best companion.
						</p>
						<div className="flex gap-5 mb-8">
							<Link>
								<FaFacebook size={30} />
							</Link>
							<Link>
								<FaTwitter size={30} />
							</Link>
							<Link>
								<FaInstagram size={30} />
							</Link>
							<Link>
								<FaLinkedin size={30} />
							</Link>
						</div>
						<div>
							<h3 className="text-5xl pt-7 pb-5">Get in Touch</h3>
							<div className="flex flex-col gap-4 text-xl">
								<div className="flex gap-4 items-center">
									<IoIosCall size={24} /> +88 01533 333 333
								</div>
								<div className="flex gap-4 items-center">
									<FaEnvelope /> info@gmail.com
								</div>
								<div className="flex gap-4 items-center">
									<IoLocationSharp /> 72, Wall street, King Road, Dhaka
								</div>
							</div>
						</div>
					</div>
					<div className="lg:basis-[503px] w-full">
						<h3 className="text-5xl mb-7">Connect with Us</h3>
						<form className="fieldset flex gap-4 flex-col">
							<input type="text" className="input w-full" placeholder="Name" />
							<input type="email" className="input w-full" placeholder="Email" />
							<textarea className="textarea w-full" placeholder="Message"></textarea>
							<button className="btn btn-neutral max-w-40 bg-transparent text-c331a15 border-c331a15 rounded-full shadow-none font-rancho text-2xl">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
			<div
				className="bg-no-repeat bg-cover flex justify-center text-center px-4"
				style={{ backgroundImage: `url(${footerBottomBg})` }}
			>
				<p className="font-rancho text-xl text-white mb-0 py-4">Copyright Espresso Emporium ! All Rights Reserved</p>
			</div>
		</>
	);
};

export default Footer;
