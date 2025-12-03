import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Globe, Target, Users, Shield, TrendingUp } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import Organogram from "@/components/Organogram";

const About = () => {
	const values = [
		{
			icon: Shield,
			title: "Integrity",
			description:
				"Operating with transparency and honesty in every transaction",
		},
		{
			icon: TrendingUp,
			title: "Efficiency",
			description:
				"Optimizing processes and delivering results with excellence",
		},
		{
			icon: Users,
			title: "Customer Satisfaction",
			description:
				"Exceeding expectations and building lasting relationships",
		},
		{
			icon: Award,
			title: "Innovation",
			description: "Embracing new technologies and sustainable practices",
		},
		{
			icon: Globe,
			title: "Sustainability",
			description: "Creating long-term value for all stakeholders",
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
							About{" "}
							<span className="text-primary">SMCH Nexus</span>
						</h1>
						<p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
							A dynamic multi-sector enterprise connecting global
							markets through innovation, integrity, and
							sustainable business practices
						</p>
					</TextReveal>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-20 bg-secondary/30">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<TextReveal>
							<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
								Our <span className="text-primary">Story</span>
							</h2>
							<p className="text-lg text-foreground/80 leading-relaxed mb-4">
								Established in 2007 in Dhaka by three visionary
								entrepreneurs, SMCH Nexus Trading Limited
								emerged from a vision to bridge global markets
								and create sustainable business opportunities
								across continents.
							</p>
							<p className="text-lg text-foreground/80 leading-relaxed mb-4">
								What started as a focused trading operation has
								evolved into a technology-driven, diversified
								enterprise spanning international trade,
								construction, hospitality, agriculture, and
								industrial equipment rental. Our growth reflects
								our commitment to excellence and our ability to
								adapt to evolving market dynamics.
							</p>
							<p className="text-lg text-foreground/80 leading-relaxed">
								Today, with 18+ years of experience, we operate
								globally with 5,795+ skilled professionals,
								delivering international-standard services
								across multiple sectors.
							</p>
						</TextReveal>

						<TextReveal delay={0.2}>
							<div className="bg-gradient-primary rounded-2xl p-12 shadow-elegant">
								<h3 className="text-3xl font-serif font-bold mb-6">
									Our Mission
								</h3>
								<p className="text-lg text-foreground/90 leading-relaxed mb-8">
									To contribute to national economic
									development, employment generation, and
									technological advancement by delivering
									high-quality products, world-class services,
									and comprehensive technical solutions.
								</p>
								<h3 className="text-3xl font-serif font-bold mb-6">
									Our Vision
								</h3>
								<p className="text-lg text-foreground/90 leading-relaxed">
									To become one of Bangladesh's leading
									diversified business organizations and
									establish a strong, trusted, and sustainable
									presence in the global marketplace through
									continuous innovation, operational
									excellence, and long-term growth.
								</p>
							</div>
						</TextReveal>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
							Our <span className="text-primary">Values</span>
						</h2>
					</TextReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 group"
							>
								<div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
									<value.icon className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-2xl font-semibold mb-3">
									{value.title}
								</h3>
								<p className="text-foreground/70 leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-gradient-primary">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
						{[
							{ value: "82+", label: "Countries Reached" },
							{ value: "1,215+", label: "Equipment Units" },
							{ value: "18+", label: "Years Experience" },
							{ value: "5,795+", label: "Skilled Professionals" },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="text-center"
							>
								<div className="text-5xl md:text-6xl font-bold text-primary mb-3 font-serif">
									{stat.value}
								</div>
								<div className="text-foreground/70 text-lg font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Organizational Structure Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
							Organizational{" "}
							<span className="text-primary">Structure</span>
						</h2>
					</TextReveal>
					<Organogram />
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default About;
