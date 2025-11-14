import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const StatsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

	const stats = [
		{ value: 50, suffix: "+", label: "Countries Served", duration: 2 },
		{ value: 200, suffix: "+", label: "Active Projects", duration: 2.5 },
		{ value: 15, suffix: "+", label: "Years of Excellence", duration: 2 },
		{ value: 1000, suffix: "+", label: "Satisfied Clients", duration: 3 },
	];

	const [counters, setCounters] = useState(stats.map(() => 0));

	useEffect(() => {
		if (!isInView) return;

		stats.forEach((stat, index) => {
			const duration = stat.duration * 1000;
			const steps = 60;
			const stepValue = stat.value / steps;
			const stepDuration = duration / steps;

			let currentStep = 0;
			const interval = setInterval(() => {
				currentStep++;
				if (currentStep <= steps) {
					setCounters((prev) => {
						const newCounters = [...prev];
						newCounters[index] = Math.min(
							Math.round(stepValue * currentStep),
							stat.value
						);
						return newCounters;
					});
				} else {
					clearInterval(interval);
				}
			}, stepDuration);
		});
	}, [isInView]);

	return (
		<section
			ref={ref}
			className="py-24 relative overflow-hidden bg-gradient-primary"
		>
			{/* Animated Background Elements */}
			<motion.div style={{ y }} className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
			</motion.div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
						Our <span className="text-primary">Impact</span> in
						Numbers
					</h2>
					<p className="text-xl text-foreground/80 max-w-2xl mx-auto">
						Delivering measurable results and building lasting
						relationships worldwide
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="text-center group"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
							>
								<div className="text-5xl md:text-6xl font-bold text-primary mb-3 font-serif">
									{counters[index]}
									<span className="text-primary">
										{stat.suffix}
									</span>
								</div>
								<div className="text-foreground/70 text-lg font-medium">
									{stat.label}
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Decorative Line */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={isInView ? { scaleX: 1 } : {}}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="mt-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
				/>
			</div>
		</section>
	);
};

export default StatsSection;
