import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Target, Users } from "lucide-react";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const features = [
		{
			icon: Target,
			title: "Strategic Vision",
			description:
				"Forward-thinking approach to global trade and business development",
		},
		{
			icon: Shield,
			title: "Trusted Partner",
			description:
				"Built on integrity, transparency, and long-term relationships",
		},
		{
			icon: Award,
			title: "Excellence Driven",
			description:
				"Commitment to quality and exceptional service delivery",
		},
		{
			icon: Users,
			title: "Global Network",
			description: "Strong partnerships across continents and industries",
		},
	];

	return (
		<section
			id="about"
			className="py-24 bg-secondary/30 relative overflow-hidden"
		>
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
						About SMCH Nexus
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Connecting{" "}
						<span className="text-primary">Global Markets</span>
					</h2>
					<p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
						SMCH Nexus Trading Limited is a dynamic multi-sector
						enterprise operating at the intersection of
						international trade, construction, hospitality, and
						agriculture. With over a decade of experience, we've
						built a reputation for excellence and sustainable
						business growth.
					</p>
				</motion.div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300 group"
						>
							<div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<feature.icon className="w-7 h-7 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-3">
								{feature.title}
							</h3>
							<p className="text-foreground/70 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				{/* Mission Statement */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant"
				>
					<h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
						Our Mission
					</h3>
					<p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
						To facilitate sustainable international trade, deliver
						exceptional construction projects, provide world-class
						hospitality experiences, and promote agricultural
						innovation while creating lasting value for our
						partners, clients, and communities worldwide.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
