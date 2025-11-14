import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
	Briefcase,
	Users,
	TrendingUp,
	Heart,
	Globe,
	Award,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";

const Careers = () => {
	const benefits = [
		{
			icon: TrendingUp,
			title: "Career Growth",
			description: "Continuous learning and advancement opportunities",
		},
		{
			icon: Globe,
			title: "Global Exposure",
			description: "Work on international projects across 50+ countries",
		},
		{
			icon: Heart,
			title: "Work-Life Balance",
			description: "Flexible working arrangements and wellness programs",
		},
		{
			icon: Award,
			title: "Competitive Package",
			description: "Industry-leading compensation and benefits",
		},
		{
			icon: Users,
			title: "Collaborative Culture",
			description: "Work with diverse, talented teams",
		},
		{
			icon: Briefcase,
			title: "Impactful Work",
			description: "Contribute to meaningful projects worldwide",
		},
	];

	const openings = [
		{
			title: "International Trade Specialist",
			department: "Trading",
			location: "Global Trade Center",
			type: "Full-time",
		},
		{
			title: "Construction Project Manager",
			department: "Construction",
			location: "Multiple Locations",
			type: "Full-time",
		},
		{
			title: "Hospitality Operations Manager",
			department: "Hospitality",
			location: "Various",
			type: "Full-time",
		},
		{
			title: "Agricultural Business Analyst",
			department: "Agriculture",
			location: "Regional Office",
			type: "Full-time",
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
							Join Our <span className="text-primary">Team</span>
						</h1>
						<p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
							Build your career with a global leader in
							international trading, construction, hospitality,
							and agriculture
						</p>
					</TextReveal>
				</div>
			</section>

			{/* Why Join Us */}
			<section className="py-20 bg-secondary/30">
				<div className="container mx-auto px-4">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
							Why <span className="text-primary">SMCH Nexus</span>
							?
						</h2>
					</TextReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
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
									<benefit.icon className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-2xl font-semibold mb-3">
									{benefit.title}
								</h3>
								<p className="text-foreground/70 leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
							Open <span className="text-primary">Positions</span>
						</h2>
						<p className="text-xl text-foreground/80 mb-16 text-center">
							Explore exciting opportunities to grow your career
							with us
						</p>
					</TextReveal>

					<div className="max-w-4xl mx-auto space-y-6">
						{openings.map((job, index) => (
							<motion.div
								key={job.title}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300 group"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div className="flex-1">
										<h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
											{job.title}
										</h3>
										<div className="flex flex-wrap gap-4 text-sm text-foreground/70">
											<span className="flex items-center gap-1">
												<Briefcase className="w-4 h-4" />
												{job.department}
											</span>
											<span className="flex items-center gap-1">
												<Globe className="w-4 h-4" />
												{job.location}
											</span>
											<span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
												{job.type}
											</span>
										</div>
									</div>
									<a
										href="/contact"
										className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
									>
										Apply Now
									</a>
								</div>
							</motion.div>
						))}
					</div>

					<TextReveal delay={0.4}>
						<div className="mt-12 text-center">
							<p className="text-foreground/70 mb-4">
								Don't see a position that matches your skills?
							</p>
							<a
								href="/contact"
								className="inline-block text-primary hover:underline font-semibold"
							>
								Send us your CV anyway →
							</a>
						</div>
					</TextReveal>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Careers;
