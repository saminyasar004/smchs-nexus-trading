import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
	Shield,
	CheckCircle2,
	FileCheck,
	Globe,
	Award,
	Lock,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";

const Compliance = () => {
	const standards = [
		{
			icon: Shield,
			title: "ISO 9001:2015",
			description:
				"Quality Management System certification ensuring consistent service quality",
		},
		{
			icon: Globe,
			title: "International Trade Compliance",
			description:
				"Full compliance with WTO regulations and international trade laws",
		},
		{
			icon: Lock,
			title: "Data Protection",
			description:
				"GDPR compliant data handling and privacy protection measures",
		},
		{
			icon: FileCheck,
			title: "Industry Standards",
			description:
				"Adherence to sector-specific regulations and best practices",
		},
		{
			icon: Award,
			title: "Environmental Compliance",
			description:
				"Sustainable practices aligned with international environmental standards",
		},
		{
			icon: CheckCircle2,
			title: "Financial Regulations",
			description:
				"Compliance with international financial and anti-money laundering laws",
		},
	];

	const commitments = [
		"Regular third-party audits and assessments",
		"Continuous staff training on compliance matters",
		"Transparent reporting and documentation",
		"Ethical business practices across all operations",
		"Strong corporate governance framework",
		"Regular policy reviews and updates",
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
							Compliance &{" "}
							<span className="text-primary">Standards</span>
						</h1>
						<p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed">
							Our commitment to maintaining the highest standards
							of compliance, integrity, and ethical business
							practices across all operations
						</p>
					</TextReveal>
				</div>
			</section>

			{/* Standards Section */}
			<section className="py-20 bg-secondary/30">
				<div className="container mx-auto px-4">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
							Our{" "}
							<span className="text-primary">Certifications</span>{" "}
							& Standards
						</h2>
					</TextReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{standards.map((standard, index) => (
							<motion.div
								key={standard.title}
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
									<standard.icon className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-2xl font-semibold mb-3">
									{standard.title}
								</h3>
								<p className="text-foreground/70 leading-relaxed">
									{standard.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Commitments Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 max-w-5xl">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
							Our <span className="text-primary">Commitment</span>
						</h2>
						<p className="text-xl text-foreground/80 mb-12 text-center">
							At SMCH Nexus, compliance is not just about meeting
							requirements—it's about exceeding expectations and
							building trust
						</p>
					</TextReveal>

					<div className="bg-gradient-primary rounded-2xl p-12 shadow-elegant">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{commitments.map((commitment, index) => (
								<motion.div
									key={commitment}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									className="flex items-start space-x-3"
								>
									<CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<span className="text-lg text-foreground/90">
										{commitment}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Regulatory Framework */}
			<section className="py-20 bg-secondary/30">
				<div className="container mx-auto px-4 max-w-4xl">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
							Regulatory{" "}
							<span className="text-primary">Framework</span>
						</h2>
					</TextReveal>

					<div className="space-y-8">
						<TextReveal delay={0.1}>
							<div className="bg-card border border-border rounded-xl p-8">
								<h3 className="text-2xl font-semibold mb-4">
									International Trade
								</h3>
								<p className="text-foreground/80 leading-relaxed">
									We comply with all applicable international
									trade regulations, including customs laws,
									import/export restrictions, and sanctions
									programs. Our compliance team monitors
									changes in trade regulations across all
									jurisdictions where we operate.
								</p>
							</div>
						</TextReveal>

						<TextReveal delay={0.2}>
							<div className="bg-card border border-border rounded-xl p-8">
								<h3 className="text-2xl font-semibold mb-4">
									Anti-Money Laundering (AML)
								</h3>
								<p className="text-foreground/80 leading-relaxed">
									We maintain robust AML procedures, including
									customer due diligence, transaction
									monitoring, and suspicious activity
									reporting. Our policies are regularly
									updated to reflect evolving regulatory
									requirements.
								</p>
							</div>
						</TextReveal>

						<TextReveal delay={0.3}>
							<div className="bg-card border border-border rounded-xl p-8">
								<h3 className="text-2xl font-semibold mb-4">
									Environmental Sustainability
								</h3>
								<p className="text-foreground/80 leading-relaxed">
									Our operations adhere to international
									environmental standards and local
									regulations. We are committed to minimizing
									environmental impact through sustainable
									practices and continuous improvement.
								</p>
							</div>
						</TextReveal>

						<TextReveal delay={0.4}>
							<div className="bg-card border border-border rounded-xl p-8">
								<h3 className="text-2xl font-semibold mb-4">
									Labor & Employment
								</h3>
								<p className="text-foreground/80 leading-relaxed">
									We uphold fair labor practices, workplace
									safety standards, and human rights
									principles across all our operations. We
									maintain compliance with local employment
									laws and international labor standards.
								</p>
							</div>
						</TextReveal>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 text-center">
					<TextReveal>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
							Questions About Our Compliance?
						</h2>
						<p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
							Our compliance team is available to address any
							questions or concerns
						</p>
						<a
							href="/contact"
							className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold shadow-glow transition-all duration-300"
						>
							Contact Compliance Team
						</a>
					</TextReveal>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Compliance;
