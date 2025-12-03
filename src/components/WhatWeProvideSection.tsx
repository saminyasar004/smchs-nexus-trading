import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";

const WhatWeProvideSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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
					{servicesData.map((service, index) => (
						<Link
							key={service.id}
							to={`/services/${service.id}`}
							className="block"
						>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="group relative h-64 overflow-hidden rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300"
							>
								{/* Background Image */}
								<div className="absolute inset-0">
									<img
										src={service.image}
										alt={service.title}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
								</div>

								{/* Icon at Corner */}
								<div className="absolute top-4 right-4 z-10">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
										<service.icon className="h-6 w-6 text-white group-hover:text-primary transition-colors duration-300" />
									</div>
								</div>

								{/* Content */}
								<div className="absolute inset-0 flex items-end p-6">
									<h3 className="text-lg font-bold text-white leading-tight group-hover:underline transition-colors duration-300">
										{service.title}
									</h3>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatWeProvideSection;
