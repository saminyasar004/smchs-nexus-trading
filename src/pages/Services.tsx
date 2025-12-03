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
	Wrench,
	Tractor,
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
			title: "Trading",
			description:
				"Comprehensive sourcing, procurement, distribution, and product supply solutions connecting businesses with quality products from global markets.",
			image: globalTradeImg,
			features: [
				"Product Sourcing & Global Supply",
				"Distribution Management",
				"Quality Assurance",
				"Vendor Management",
				"Market Intelligence",
				"Supply Chain Optimization",
			],
		},
		{
			icon: TrendingUp,
			title: "Import–Export",
			description:
				"End-to-end international trade operations including sourcing, export, and import management with comprehensive logistics and customs support.",
			image: globalTradeImg,
			features: [
				"International Trade Management",
				"Customs Clearance & Documentation",
				"Shipping & Logistics",
				"Export Management",
				"Import Operations",
				"Trade Compliance",
			],
		},
		{
			icon: Building2,
			title: "Construction",
			description:
				"Government and private sector construction projects including roads, bridges, buildings, and industrial construction works with commitment to quality and timely delivery.",
			image: constructionImg,
			features: [
				"Road Construction",
				"Bridge Development",
				"Building Projects",
				"Industrial Construction",
				"Project Management",
				"Quality Control",
			],
		},
		{
			icon: Hotel,
			title: "Hotel & Tourism",
			description:
				"Corporate travel, tourism solutions, hospitality management, and customized travel services delivering exceptional experiences.",
			image: hospitalityImg,
			features: [
				"Corporate Travel Solutions",
				"Tourism Management",
				"Hospitality Services",
				"Customized Travel Packages",
				"Event Management",
				"Guest Services",
			],
		},
		{
			icon: Tractor,
			title: "Agricultural & Agro Equipment",
			description:
				"Sales and rental of agricultural machinery with integrated farming solutions. Our fleet of 285+ modern agro machines supports efficient and sustainable farming.",
			image: agricultureImg,
			features: [
				"Agricultural Machinery Sales",
				"Equipment Rental Services",
				"285+ Modern Agro Machines",
				"Integrated Farming Solutions",
				"Technical Support",
				"Maintenance Services",
			],
		},
		{
			icon: Wrench,
			title: "Industrial & Construction Equipment Rental",
			description:
				"Industry-leading rental provider with 1,215+ small, medium, and large industrial and construction machinery units. Our commitment to quality and operational excellence ensures the right equipment at the right time.",
			image: constructionImg,
			features: [
				"1,215+ Equipment Units",
				"Small to Large Machinery",
				"Industrial Equipment",
				"Construction Machinery",
				"On-Time Delivery",
				"Technical Support & Maintenance",
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
