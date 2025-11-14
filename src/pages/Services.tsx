import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
	Ship,
	Building2,
	Hotel,
	Sprout,
	TrendingUp,
	CheckCircle2,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import constructionImg from "/construction.jpg";
import hospitalityImg from "/hospitality.jpg";
import agricultureImg from "/agriculture.jpg";
import globalTradeImg from "/global-trade.jpg";

const Services = () => {
	const services = [
		{
			icon: Ship,
			title: "International Trading",
			description:
				"Comprehensive import-export solutions connecting global markets with efficiency and reliability. Our extensive network and deep market knowledge enable seamless cross-border transactions.",
			image: globalTradeImg,
			features: [
				"Import & Export Services",
				"Customs Clearance & Documentation",
				"Supply Chain Management",
				"Trade Finance Solutions",
				"Market Research & Analysis",
				"Risk Management & Compliance",
			],
		},
		{
			icon: Building2,
			title: "Construction Projects",
			description:
				"Delivering world-class infrastructure and building solutions with precision, quality, and innovation. From concept to completion, we ensure excellence at every stage.",
			image: constructionImg,
			features: [
				"Commercial Development",
				"Infrastructure Projects",
				"Residential Construction",
				"Project Management",
				"Quality Assurance & Control",
				"Sustainable Building Practices",
			],
		},
		{
			icon: Hotel,
			title: "Hospitality & Tourism",
			description:
				"Creating memorable experiences through premium hospitality and tourism services. We combine local expertise with international standards to deliver exceptional guest experiences.",
			image: hospitalityImg,
			features: [
				"Hotel Management & Operations",
				"Tourism Development",
				"Event Planning & Management",
				"Guest Experience Design",
				"Staff Training & Development",
				"Revenue Management",
			],
		},
		{
			icon: Sprout,
			title: "Agricultural Ventures",
			description:
				"Sustainable agriculture and agribusiness solutions for modern food systems. We're committed to innovation, sustainability, and food security through advanced farming practices.",
			image: agricultureImg,
			features: [
				"Commercial Crop Production",
				"Agribusiness Consulting",
				"Agricultural Supply Chain",
				"Sustainable Farming Practices",
				"Technology Integration",
				"Export & Distribution",
			],
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
							Our <span className="text-primary">Services</span>
						</h1>
						<p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
							Comprehensive solutions across multiple sectors,
							tailored to meet your business needs and drive
							sustainable growth in global markets
						</p>
					</TextReveal>
				</div>
			</section>

			{/* Services Details */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="space-y-32">
						{services.map((service, index) => (
							<div
								key={service.title}
								className="max-w-6xl mx-auto"
							>
								<motion.div
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.8 }}
									className={`flex flex-col ${
										index % 2 === 0
											? "lg:flex-row"
											: "lg:flex-row-reverse"
									} gap-12 items-center`}
								>
									{/* Image */}
									<div className="lg:w-1/2 relative group">
										<div className="relative overflow-hidden rounded-2xl shadow-elegant">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-overlay opacity-40" />
										</div>
										<div className="absolute -bottom-8 -right-8 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full p-8">
											<service.icon className="w-16 h-16 text-primary" />
										</div>
									</div>

									{/* Content */}
									<div className="lg:w-1/2 space-y-6">
										<h2 className="text-4xl md:text-5xl font-serif font-bold">
											{service.title}
										</h2>
										<p className="text-lg text-foreground/80 leading-relaxed">
											{service.description}
										</p>

										<div className="space-y-4 pt-4">
											<h3 className="text-xl font-semibold mb-4">
												Key Services Include:
											</h3>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												{service.features.map(
													(feature) => (
														<div
															key={feature}
															className="flex items-start space-x-3"
														>
															<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
															<span className="text-foreground/80">
																{feature}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-primary">
				<div className="container mx-auto px-4 text-center">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
							Let's discuss how our services can help your
							business thrive in global markets
						</p>
						<a
							href="/contact"
							className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold shadow-glow transition-all duration-300"
						>
							Contact Us Today
						</a>
					</TextReveal>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Services;
