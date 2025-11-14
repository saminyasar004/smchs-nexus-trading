import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/hero-bg.jpg";

const HeroSection = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Parallax Background */}
			<motion.div style={{ y }} className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${heroImage})` }}
				/>
				<div className="absolute inset-0 bg-gradient-overlay" />
			</motion.div>

			{/* Animated Grid Overlay */}
			<div className="absolute inset-0 z-10 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			{/* Content */}
			<motion.div
				style={{ opacity }}
				className="relative z-20 container mx-auto px-4 text-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-primary/20"
				>
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-sm font-medium">
						Global Trading Excellence
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
				>
					SMCH Nexus
					<br />
					<span className="bg-gradient-gold bg-clip-text text-transparent">
						Trading Limited
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed"
				>
					Building bridges across continents through international
					trading, construction excellence, hospitality innovation,
					and sustainable agriculture
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<Button
						size="lg"
						onClick={scrollToContact}
						className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg px-8 py-6 group"
					>
						Start Your Journey
						<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-primary text-foreground hover:bg-primary/10 text-lg px-8 py-6"
						onClick={() => {
							const element = document.querySelector("#services");
							if (element)
								element.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Explore Services
					</Button>
				</motion.div>

				{/* Floating Stats */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.2 }}
					className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
				>
					{[
						{
							icon: Globe,
							label: "Countries Reached",
							value: "50+",
						},
						{
							icon: TrendingUp,
							label: "Years Experience",
							value: "15+",
						},
						{
							icon: Globe,
							label: "Active Projects",
							value: "200+",
						},
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 1.4 + index * 0.1,
							}}
							className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:shadow-glow transition-all duration-300"
						>
							<stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
							<div className="text-3xl font-bold text-primary mb-2">
								{stat.value}
							</div>
							<div className="text-sm text-foreground/80">
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
				>
					<motion.div className="w-1 h-2 bg-primary rounded-full" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
