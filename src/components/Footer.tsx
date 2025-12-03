import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		Company: [
			{ label: "About Us", href: "/about" },
			{ label: "Our Services", href: "/services" },
			{ label: "Careers", href: "/careers" },
			{ label: "Contact", href: "/contact" },
		],
		Services: [
			{ label: "International Trading", href: "/services" },
			{ label: "Construction", href: "/services" },
			{ label: "Hospitality", href: "/services" },
			{ label: "Agriculture", href: "/services" },
		],
		Legal: [
			{ label: "Privacy Policy", href: "/privacy-policy" },
			{ label: "Terms of Service", href: "/terms-of-service" },
			{ label: "Cookie Policy", href: "/cookie-policy" },
			{ label: "Compliance", href: "/compliance" },
		],
	};

	const socialLinks = [
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Twitter, href: "#", label: "Twitter" },
		{ icon: Facebook, href: "#", label: "Facebook" },
	];

	return (
		<footer className="bg-gradient-primary border-t border-primary/20">
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<img
								src={logo}
								alt="SMCH Nexus"
								className="h-16 w-auto mb-6"
							/>
							<p className="text-foreground/70 mb-6 leading-relaxed">
								Building bridges across continents through
								international trading, construction excellence,
								hospitality innovation, and sustainable
								agriculture.
							</p>
							<div className="flex space-x-4">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										aria-label={social.label}
										className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
									>
										<social.icon className="w-5 h-5" />
									</a>
								))}
							</div>
						</motion.div>
					</div>

					{/* Links Sections */}
					{Object.entries(footerLinks).map(
						([title, links], index) => (
							<motion.div
								key={title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
							>
								<h3 className="text-lg font-semibold mb-4 text-primary">
									{title}
								</h3>
								<ul className="space-y-3">
									{links.map((link) => (
										<li key={link.label}>
											<Link
												to={link.href}
												className="text-foreground/70 hover:text-primary transition-colors duration-300"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</motion.div>
						)
					)}
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
					className="border-t border-primary/20 pt-8"
				>
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-foreground/60 text-sm">
							© {currentYear} SMCH Nexus Trading Limited. All
							rights reserved.
						</p>
						<div className="flex flex-wrap gap-6 text-sm">
							<Link
								to="/privacy-policy"
								className="text-foreground/60 hover:text-primary transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms-of-service"
								className="text-foreground/60 hover:text-primary transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								to="/cookie-policy"
								className="text-foreground/60 hover:text-primary transition-colors"
							>
								Cookie Settings
							</Link>
						</div>
					</div>
				</motion.div>

				{/* Under Construction Message */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-8 pt-4 border-t border-primary/10 text-center"
				>
					<p className="text-sm text-foreground/50 flex items-center justify-center gap-2">
						<span>🚧</span>
						This website is currently under construction. We are
						working hard to bring you the best experience.
						<span>🚧</span>
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
