import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const contactInfo = [
		{
			icon: Mail,
			label: "Email Us",
			value: "info@smchntl.com",
			href: "mailto:info@smchntl.com",
		},
		{
			icon: Phone,
			label: "Call Us",
			value: "+8802-41060883/5",
			href: "tel:+880241060883/5",
		},
		{
			icon: MapPin,
			label: "Visit Us",
			value: "8th Floor, Sahera Tropical Center, 218, Dr. Kudrat-e-Khoda road, Dhaka-1205",
			href: "#",
		},
	];

	return (
		<section
			id="contact"
			className="py-24 bg-secondary/30 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<div ref={ref} className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.6 }}
						className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
					>
						Get in Touch
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Start Your <span className="text-primary">Journey</span>{" "}
						With Us
					</h2>
					<p className="text-xl text-foreground/80 max-w-3xl mx-auto">
						Ready to explore opportunities? Let's discuss how we can
						help your business grow globally
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="bg-card border border-border rounded-2xl p-8 shadow-elegant"
					>
						<h3 className="text-2xl font-serif font-bold mb-6">
							Send us a Message
						</h3>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium mb-2">
										First Name
									</label>
									<Input
										placeholder="John"
										className="bg-background/50"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Last Name
									</label>
									<Input
										placeholder="Doe"
										className="bg-background/50"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									Email
								</label>
								<Input
									type="email"
									placeholder="john@example.com"
									className="bg-background/50"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									Company
								</label>
								<Input
									placeholder="Your Company"
									className="bg-background/50"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									Message
								</label>
								<Textarea
									placeholder="Tell us about your project or inquiry..."
									rows={5}
									className="bg-background/50 resize-none"
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow group"
								size="lg"
							>
								Send Message
								<Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="space-y-8"
					>
						<div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant">
							<h3 className="text-2xl font-serif font-bold mb-4">
								Let's Connect
							</h3>
							<p className="text-foreground/80 leading-relaxed mb-8">
								Whether you're looking to expand your business
								internationally, need construction expertise, or
								want to explore partnership opportunities, our
								team is here to help.
							</p>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<motion.a
										key={info.label}
										href={info.href}
										initial={{ opacity: 0, y: 20 }}
										animate={
											isInView ? { opacity: 1, y: 0 } : {}
										}
										transition={{
											duration: 0.6,
											delay: 0.6 + index * 0.1,
										}}
										className="flex items-start space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:shadow-glow transition-all duration-300 group"
									>
										<div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
											<info.icon className="w-6 h-6 text-primary" />
										</div>
										<div>
											<div className="text-sm text-foreground/60 mb-1">
												{info.label}
											</div>
											<div className="font-medium">
												{info.value}
											</div>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="bg-card border border-primary/20 rounded-2xl p-8 text-center"
						>
							<h4 className="text-xl font-semibold mb-3">
								Business Hours
							</h4>
							<p className="text-foreground/70">
								Monday - Friday: 9:00 AM - 6:00 PM
							</p>
							<p className="text-foreground/70">
								Saturday: 10:00 AM - 4:00 PM
							</p>
							<p className="text-foreground/70">Sunday: Closed</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
