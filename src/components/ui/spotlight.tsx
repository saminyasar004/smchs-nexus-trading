import { motion } from "framer-motion";

export const Spotlight = () => {
	return (
		<motion.div
			className="absolute inset-0 pointer-events-none"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[150px] animate-pulse" />
			<div
				className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] animate-pulse"
				style={{ animationDelay: "1s" }}
			/>
		</motion.div>
	);
};
