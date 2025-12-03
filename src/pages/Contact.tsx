import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";

const Contact = () => {
	const contactInfo = [
		{
			icon: Mail,
			label: "Email Us",
			value: "info@smchnexus.com",
			href: "mailto:info@smchnexus.com",
		},
		{
			icon: Phone,
			label: "Call Us",
			value: "+880 2-41060883/5",
			href: "tel:+880241060883",
		},
		{
			icon: MapPin,
			label: "Registered Office",
			value: "8th Floor, Sahera Tropical Center, 218, Dr. Kudrat-e-Khoda road, Dhaka-1205",
			href: "https://maps.google.com/?q=8th+Floor+Sahera+Tropical+Center+Dhaka",
		},
		{
			icon: Clock,
			label: "Business Hours",
			value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
			href: "#",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="pt-32 pb-20 relative overflow-hidden">
				<Spotlight />
				<div className="container mx-auto px-4 relative z-10">
					<TextReveal>
						<h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">
							Get in <span className="text-primary">Touch</span>
						</h1>
						<p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
							Ready to explore opportunities? Let's discuss how we
							can help your business grow globally
						</p>
					</TextReveal>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="bg-card border border-border rounded-2xl p-8 shadow-elegant"
						>
							<h2 className="text-3xl font-serif font-bold mb-6">
								Send us a Message
							</h2>
							<form className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium mb-2">
											First Name *
										</label>
										<Input
											placeholder="John"
											className="bg-background/50"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-2">
											Last Name *
										</label>
										<Input
											placeholder="Doe"
											className="bg-background/50"
											required
										/>
									</div>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Email *
									</label>
									<Input
										type="email"
										placeholder="john@example.com"
										className="bg-background/50"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Phone Number
									</label>
									<Input
										type="tel"
										placeholder="+1 (555) 123-4567"
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
										Subject *
									</label>
									<Input
										placeholder="How can we help you?"
										className="bg-background/50"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Message *
									</label>
									<Textarea
										placeholder="Tell us about your project or inquiry..."
										rows={6}
										className="bg-background/50 resize-none"
										required
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
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="space-y-8"
						>
							<div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant">
								<h2 className="text-3xl font-serif font-bold mb-6">
									Contact Information
								</h2>
								<p className="text-foreground/80 leading-relaxed mb-8">
									Whether you're looking to expand your
									business internationally, need construction
									expertise, or want to explore partnership
									opportunities, our team is here to help.
								</p>

								<div className="space-y-6">
									{contactInfo.map((info) => (
										<a
											key={info.label}
											href={info.href}
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
										</a>
									))}
								</div>
							</div>

							<div className="bg-card border border-border rounded-2xl p-8">
								<h3 className="text-2xl font-serif font-bold mb-4">
									Office Locations
								</h3>
								<div className="space-y-4 text-foreground/80">
									<div>
										<h4 className="font-semibold mb-1">
											Headquarters
										</h4>
										<p className="text-sm">
											Dhaka, Bangladesh
											<br />
											(Provide your address for update)
										</p>
									</div>
									<div>
										<h4 className="font-semibold mb-1">
											Global Presence
										</h4>
										<p className="text-sm">
											Operating in 82+ Countries Worldwide
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Contact;
