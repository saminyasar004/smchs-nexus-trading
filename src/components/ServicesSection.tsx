import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Ship, Building2, Hotel, Sprout, TrendingUp } from "lucide-react";
import constructionImg from "/construction.jpg";
import hospitalityImg from "/hospitality.jpg";
import agricultureImg from "/agriculture.jpg";
import globalTradeImg from "/global-trade.jpg";

const ServicesSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const services = [
		{
			icon: Ship,
			title: "International Trading",
			description:
				"Comprehensive import-export solutions connecting global markets with efficiency and reliability",
			image: globalTradeImg,
			features: [
				"Import & Export Services",
				"Customs Clearance",
				"Supply Chain Management",
				"Trade Consultation",
			],
		},
		{
			icon: Building2,
			title: "Construction Projects",
			description:
				"Delivering world-class infrastructure and building solutions with precision and quality",
			image: constructionImg,
			features: [
				"Commercial Development",
				"Infrastructure Projects",
				"Project Management",
				"Quality Assurance",
			],
		},
		{
			icon: Hotel,
			title: "Hospitality & Tourism",
			description:
				"Creating memorable experiences through premium hospitality and tourism services",
			image: hospitalityImg,
			features: [
				"Hotel Management",
				"Tourism Development",
				"Event Planning",
				"Guest Services",
			],
		},
		{
			icon: Sprout,
			title: "Agricultural Ventures",
			description:
				"Sustainable agriculture and agribusiness solutions for modern food systems",
			image: agricultureImg,
			features: [
				"Crop Production",
				"Agribusiness",
				"Supply Chain",
				"Sustainable Practices",
			],
		},
	];

	return (
		<section id="services" className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

			<div ref={ref} className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.6 }}
						className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
					>
						Our Services
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Diversified{" "}
						<span className="text-primary">Excellence</span>
					</h2>
					<p className="text-xl text-foreground/80 max-w-3xl mx-auto">
						From global trading to sustainable agriculture, we
						deliver comprehensive solutions across multiple sectors
					</p>
				</motion.div>

				<div className="space-y-32">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 80 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className={`flex flex-col ${
								index % 2 === 0
									? "lg:flex-row"
									: "lg:flex-row-reverse"
							} gap-12 items-center`}
						>
							{/* Image */}
							<motion.div
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
								className="lg:w-1/2 relative group"
							>
								<div className="relative overflow-hidden rounded-2xl shadow-elegant">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-overlay opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
								</div>
								<div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
									<service.icon className="w-12 h-12 text-primary" />
								</div>
							</motion.div>

							{/* Content */}
							<div className="lg:w-1/2 space-y-6">
								<motion.div
									initial={{
										opacity: 0,
										x: index % 2 === 0 ? -50 : 50,
									}}
									animate={
										isInView ? { opacity: 1, x: 0 } : {}
									}
									transition={{
										duration: 0.8,
										delay: index * 0.2 + 0.2,
									}}
								>
									<h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
										{service.title}
									</h3>
									<p className="text-lg text-foreground/80 leading-relaxed mb-6">
										{service.description}
									</p>
									<div className="grid grid-cols-2 gap-4">
										{service.features.map(
											(feature, featureIndex) => (
												<motion.div
													key={feature}
													initial={{
														opacity: 0,
														y: 20,
													}}
													animate={
														isInView
															? {
																	opacity: 1,
																	y: 0,
															  }
															: {}
													}
													transition={{
														duration: 0.5,
														delay:
															index * 0.2 +
															0.4 +
															featureIndex * 0.1,
													}}
													className="flex items-center space-x-2 text-foreground/70"
												>
													<TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
													<span className="text-sm">
														{feature}
													</span>
												</motion.div>
											)
										)}
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
