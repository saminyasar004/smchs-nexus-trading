import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, TrendingUp, Users } from "lucide-react";

const LeadershipSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const leaders = [
		{
			name: "Md. Hasan Khan (HK)",
			title: "Chairman",
			description:
				"A visionary business leader renowned for his strategic foresight, financial intelligence, and exceptional decision-making capabilities. His extensive experience in petroleum, infrastructure development, industrial machinery, and modern development sectors has transformed SMCH Nexus Trading Limited into a resilient, future-focused corporate enterprise.",
			responsibilities: [
				"Corporate governance and strategic policy",
				"Long-term investment planning",
				"International business expansion",
				"Compliance, transparency, and organizational ethics",
			],
		},
		{
			name: "Abdul Mohaimen",
			title: "Chief Executive Officer (CEO)",
			description:
				"A dynamic, analytical, and results-driven corporate executive with strong professional experience in international development agencies, donor organizations, commercial sectors, and tourism industries. His leadership ensures efficient, smooth, and globally competitive day-to-day operations.",
			responsibilities: [
				"Operational leadership and daily management",
				"Strategic planning and implementation",
				"Project execution, monitoring, and evaluation",
				"Market analysis and opportunity identification",
				"International client management and corporate negotiations",
			],
		},
		{
			name: "Saiful Islam",
			title: "Managing Director (MD)",
			description:
				"An innovative and forward-thinking business leader specializing in strategic planning, global partnerships, and business expansion. Having traveled to 82 countries, he possesses deep insights into international markets and cross-border business dynamics.",
			responsibilities: [
				"Corporate strategy and organizational direction",
				"Market research and sectoral analysis",
				"Business networking and global partnerships",
				"Project supervision and strategic guidance",
				"Brand development and corporate reputation management",
			],
		},
	];

	return (
		<section
			id="leadership"
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
						Leadership Profiles
					</motion.span>
					<h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
						Meet Our{" "}
						<span className="text-primary">Leadership Team</span>
					</h2>
					<p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
						Guided by a unified vision to build a world-class,
						innovation-driven, and sustainable corporate institution
					</p>
				</motion.div>

				{/* Leadership Cards */}
				<div className="space-y-12 max-w-6xl mx-auto">
					{leaders.map((leader, index) => (
						<motion.div
							key={leader.name}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-glow transition-all duration-300"
						>
							<div className="flex flex-col md:flex-row gap-6">
								<div className="flex-1">
									<h3 className="text-3xl font-serif font-bold mb-2">
										{leader.name}
									</h3>
									<p className="text-primary text-lg font-semibold mb-4">
										{leader.title}
									</p>
									<p className="text-foreground/80 leading-relaxed mb-6">
										{leader.description}
									</p>
									<div>
										<h4 className="text-lg font-semibold mb-3">
											Key Responsibilities:
										</h4>
										<ul className="space-y-2">
											{leader.responsibilities.map(
												(resp, idx) => (
													<li
														key={idx}
														className="flex items-start space-x-2"
													>
														<span className="text-primary mt-1.5">
															•
														</span>
														<span className="text-foreground/70">
															{resp}
														</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Leadership Philosophy */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant mt-16"
				>
					<h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
						Our Leadership Philosophy
					</h3>
					<p className="text-lg text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8">
						The Chairman, CEO, and Managing Director jointly guide
						SMCH Nexus Trading Limited with a unified vision to
						build a world-class, innovation-driven, and sustainable
						corporate institution.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{[
							"Globally competitive corporate development",
							"Innovation, transparency, and ethical governance",
							"Future-ready, technology-driven solutions",
							"Employment creation and human capital development",
							"Enhanced local and international brand value",
							"Long-term sustainability and global impact",
						].map((principle, idx) => (
							<div
								key={idx}
								className="flex items-start space-x-2 text-left"
							>
								<span className="text-primary mt-1">•</span>
								<span className="text-foreground/80">
									{principle}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default LeadershipSection;
