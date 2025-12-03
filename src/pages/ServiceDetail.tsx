import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";

const ServiceDetail = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const service = servicesData.find((s) => s.id === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!service) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-4">
						Service Not Found
					</h2>
					<Button onClick={() => navigate("/")}>Go Home</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						src={service.image}
						alt={service.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/60" />
				</div>

				<div className="container mx-auto px-4 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
							<service.icon className="w-8 h-8 text-primary" />
						</div>
						<h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
							{service.title}
						</h1>
						<p className="text-xl text-white/90 max-w-2xl mx-auto">
							{service.shortDescription}
						</p>
					</motion.div>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<Button
							variant="ghost"
							onClick={() => navigate(-1)}
							className="mb-8 hover:bg-secondary/50"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back
						</Button>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="prose prose-lg dark:prose-invert max-w-none"
						>
							{service.fullDescription
								.split("\n\n")
								.map((paragraph, idx) => (
									<p
										key={idx}
										className="text-foreground/80 leading-relaxed mb-6 text-lg"
									>
										{paragraph.trim()}
									</p>
								))}
						</motion.div>

						{/* Features List */}
						{service.features && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="mt-12 bg-secondary/30 rounded-2xl p-8 border border-border"
							>
								<h3 className="text-2xl font-serif font-bold mb-6">
									Key Features & Capabilities
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{service.features.map((feature, idx) => (
										<div
											key={idx}
											className="flex items-start space-x-3"
										>
											<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
											<span className="text-foreground/80 font-medium">
												{feature}
											</span>
										</div>
									))}
								</div>
							</motion.div>
						)}

						{/* CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="mt-16 text-center"
						>
							<h3 className="text-2xl font-bold mb-4">
								Ready to get started?
							</h3>
							<p className="text-foreground/70 mb-8">
								Contact us today to discuss your requirements
								and how we can help.
							</p>
							<Button
								size="lg"
								onClick={() => navigate("/contact")}
								className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8"
							>
								Contact Us
								<Send className="w-4 h-4 ml-2" />
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ServiceDetail;
