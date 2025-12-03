import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Globe, Shield, TrendingUp, Users } from "lucide-react";

const StrengthsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const strengths = [
		{
			icon: Award,
			title: "18+ Years Experience",
			description: "Industry-leading expertise since 2007",
		},
		{
			icon: Users,
			title: "5,795+ Professionals",
			description: "Skilled workforce across all sectors",
		},
		{
			icon: Globe,
			title: "International Standards",
			description: "World-class quality in every service",
		},
		{
			icon: Clock,
			title: "On-Time Delivery",
			description: "Reliable project completion",
		},
		{
			icon: TrendingUp,
			title: "Global Network",
			description: "Strong local and international partnerships",
		},
		{
			icon: Shield,
			title: "Ethics & Trust",
			description: "Transparency in all operations",
		},
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

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
						Our Strengths
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Why Choose{" "}
						<span className="text-primary">SMCH Nexus</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{strengths.map((strength, index) => (
						<motion.div
							key={strength.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 group text-center"
						>
							<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
								<strength.icon className="w-8 h-8 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-3">
								{strength.title}
							</h3>
							<p className="text-foreground/70 leading-relaxed">
								{strength.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default StrengthsSection;
