import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { scrollY } = useScroll();
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
	const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Services", href: "/services" },
		{ label: "Contact", href: "/contact" },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<motion.header
			style={{
				opacity: headerOpacity,
				backdropFilter: `blur(${headerBlur}px)`,
			}}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 shadow-elegant"
					: "bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link to="/">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="flex items-center space-x-3"
						>
							<img
								src={logo}
								alt="SMCH Nexus"
								className="h-12 max-w-full"
							/>
						</motion.div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<Link key={item.label} to={item.href}>
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
										location.pathname === item.href
											? "text-primary"
											: ""
									}`}
								>
									{item.label}
								</motion.div>
							</Link>
						))}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link to="/contact">
								<Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
									Get in Touch
								</Button>
							</Link>
						</motion.div>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-foreground"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X size={24} />
						) : (
							<Menu size={24} />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden mt-4 pb-4 space-y-4"
					>
						{navItems.map((item) => (
							<Link
								key={item.label}
								to={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className={`block w-full text-left text-foreground hover:text-primary transition-colors duration-300 py-2 ${
									location.pathname === item.href
										? "text-primary"
										: ""
								}`}
							>
								{item.label}
							</Link>
						))}
						<Link
							to="/contact"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
								Get in Touch
							</Button>
						</Link>
					</motion.div>
				)}
			</nav>
		</motion.header>
	);
};

export default Header;
