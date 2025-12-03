import { motion } from "framer-motion";
import { User, Users } from "lucide-react";

const Organogram = () => {
	const chairman = {
		name: "Md. Hasan Khan (HK)",
		title: "Chairman",
		description: "Strategic Leadership & Corporate Governance",
	};

	const executives = [
		{
			name: "Abdul Mohaimen",
			title: "Chief Executive Officer (CEO)",
			description: "Operational Leadership & Daily Management",
		},
		{
			name: "Saiful Islam",
			title: "Managing Director (MD)",
			description: "Corporate Strategy & Global Partnerships",
		},
	];

	return (
		<div className="max-w-6xl mx-auto">
			{/* Chairman - Top Level */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="flex justify-center mb-12"
			>
				<div className="relative">
					<div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant border-2 border-primary/30 max-w-md">
						<div className="flex items-center justify-center mb-4">
							<div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
								<User className="w-8 h-8 text-primary" />
							</div>
						</div>
						<h3 className="text-2xl font-serif font-bold text-center mb-2">
							{chairman.name}
						</h3>
						<p className="text-primary text-center font-semibold mb-2">
							{chairman.title}
						</p>
						<p className="text-foreground/80 text-center text-sm">
							{chairman.description}
						</p>
					</div>
					{/* Connector Line Down */}
					<div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
				</div>
			</motion.div>

			{/* Horizontal Connector */}
			<div className="flex justify-center mb-12">
				<div className="relative w-full max-w-3xl">
					<div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
					<div className="absolute left-1/4 top-0 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
					<div className="absolute right-1/4 top-0 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
				</div>
			</div>

			{/* CEO and MD - Second Level */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
			>
				{executives.map((executive, index) => (
					<motion.div
						key={executive.name}
						initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
						className="relative"
					>
						<div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 h-full">
							<div className="flex items-center justify-center mb-4">
								<div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
									<Users className="w-7 h-7 text-primary" />
								</div>
							</div>
							<h3 className="text-xl font-serif font-bold text-center mb-2">
								{executive.name}
							</h3>
							<p className="text-primary text-center font-semibold mb-2">
								{executive.title}
							</p>
							<p className="text-foreground/70 text-center text-sm">
								{executive.description}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Legend */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.5 }}
				className="mt-12 text-center"
			>
				<p className="text-sm text-foreground/60 italic">
					Unified Leadership Structure for Strategic Excellence
				</p>
			</motion.div>
		</div>
	);
};

export default Organogram;
