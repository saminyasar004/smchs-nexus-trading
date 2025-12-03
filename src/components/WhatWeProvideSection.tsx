import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
	Package,
	TrendingUp,
	Building2,
	Hotel,
	Tractor,
	Wrench,
	Headphones,
	Ship,
} from "lucide-react";

const WhatWeProvideSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const services = [
		{
			icon: Package,
			title: "Product Sourcing & Global Supply",
		},
		{
			icon: TrendingUp,
			title: "International Trade Management",
		},
		{
			icon: Building2,
			title: "Government & Private Construction Services",
		},
		{
			icon: Hotel,
			title: "Hotel & Corporate Tourism Solutions",
		},
		{
			icon: Tractor,
			title: "Agricultural Machinery Sales & Rental",
		},
		{
			icon: Wrench,
			title: "Industrial & Construction Equipment Rental Services",
		},
		{
			icon: Headphones,
			title: "Technical Support & After-Sales Solutions",
		},
		{
			icon: Ship,
			title: "Shipping, Logistics & Customs Documentation",
		},
	];

	return (
		<section className="py-24 bg-secondary/30 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
						backgroundSize: "40px 40px",
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
						What We Provide
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Comprehensive{" "}
						<span className="text-primary">Solutions</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-card border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 group text-center"
						>
							<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
								<service.icon className="w-7 h-7 text-primary" />
							</div>
							<h3 className="text-base font-semibold leading-tight">
								{service.title}
							</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatWeProvideSection;
