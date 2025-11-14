import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
	children: ReactNode;
	delay?: number;
}

export const TextReveal = ({ children, delay = 0 }: TextRevealProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, delay }}
		>
			{children}
		</motion.div>
	);
};
