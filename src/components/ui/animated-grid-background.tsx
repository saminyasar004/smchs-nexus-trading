import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AnimatedGridBackground = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0 animate-pulse"
					style={{
						backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			{/* Animated dots */}
			{[...Array(20)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-primary rounded-full"
					initial={{
						x: Math.random() * window.innerWidth,
						y: Math.random() * window.innerHeight,
						opacity: 0,
					}}
					animate={{
						y: [null, Math.random() * window.innerHeight],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: Math.random() * 10 + 10,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
};
