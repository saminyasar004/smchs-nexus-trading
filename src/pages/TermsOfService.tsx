import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TextReveal } from "@/components/ui/text-reveal";

const TermsOfService = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<section className="pt-32 pb-20">
				<div className="container mx-auto px-4 max-w-4xl">
					<TextReveal>
						<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
							Terms of{" "}
							<span className="text-primary">Service</span>
						</h1>
						<p className="text-foreground/70 mb-8">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</TextReveal>

					<div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
						<TextReveal delay={0.1}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									1. Agreement to Terms
								</h2>
								<p className="leading-relaxed">
									By accessing or using the services of SMCH
									Nexus Trading Limited ("Company," "we,"
									"our," or "us"), you agree to be bound by
									these Terms of Service. If you disagree with
									any part of these terms, you may not access
									our services.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.2}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									2. Services
								</h2>
								<p className="leading-relaxed mb-4">
									SMCH Nexus Trading Limited provides services
									in the following sectors:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										International Trading and Import-Export
										Operations
									</li>
									<li>
										Construction Projects and Infrastructure
										Development
									</li>
									<li>Hospitality and Tourism Management</li>
									<li>
										Agricultural Ventures and Agribusiness
									</li>
								</ul>
								<p className="leading-relaxed mt-4">
									Specific terms for each service category may
									apply and will be provided separately.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.3}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									3. User Obligations
								</h2>
								<p className="leading-relaxed mb-4">
									When using our services, you agree to:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Provide accurate and complete
										information
									</li>
									<li>
										Maintain the confidentiality of your
										account credentials
									</li>
									<li>
										Comply with all applicable laws and
										regulations
									</li>
									<li>
										Not engage in fraudulent or unlawful
										activities
									</li>
									<li>
										Not interfere with the proper
										functioning of our services
									</li>
									<li>
										Respect intellectual property rights
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.4}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									4. Payment Terms
								</h2>
								<p className="leading-relaxed mb-4">
									For paid services:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Payment terms will be specified in
										individual service agreements
									</li>
									<li>
										All fees are non-refundable unless
										otherwise stated
									</li>
									<li>
										We reserve the right to modify pricing
										with advance notice
									</li>
									<li>
										Late payments may result in service
										suspension
									</li>
									<li>
										You are responsible for all applicable
										taxes
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.5}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									5. Intellectual Property
								</h2>
								<p className="leading-relaxed">
									All content, trademarks, logos, and
									intellectual property associated with our
									services are owned by or licensed to SMCH
									Nexus Trading Limited. You may not use,
									reproduce, or distribute any of our
									intellectual property without prior written
									permission.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.6}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									6. Limitation of Liability
								</h2>
								<p className="leading-relaxed">
									To the maximum extent permitted by law, SMCH
									Nexus Trading Limited shall not be liable
									for any indirect, incidental, special,
									consequential, or punitive damages resulting
									from your use of our services. Our total
									liability shall not exceed the amount paid
									by you for the specific service in question.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.7}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									7. Warranties and Disclaimers
								</h2>
								<p className="leading-relaxed mb-4">
									We strive to provide high-quality services,
									but:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Services are provided "as is" without
										warranties of any kind
									</li>
									<li>
										We do not guarantee uninterrupted or
										error-free service
									</li>
									<li>
										We are not responsible for third-party
										actions or services
									</li>
									<li>
										Results may vary based on circumstances
										beyond our control
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.8}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									8. Termination
								</h2>
								<p className="leading-relaxed">
									We reserve the right to terminate or suspend
									your access to our services at any time,
									with or without notice, for conduct that we
									believe violates these Terms of Service or
									is harmful to other users, us, or third
									parties.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.9}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									9. Confidentiality
								</h2>
								<p className="leading-relaxed">
									Both parties agree to maintain
									confidentiality of proprietary and sensitive
									information shared during the course of
									business. This obligation survives
									termination of services.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.0}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									10. Dispute Resolution
								</h2>
								<p className="leading-relaxed">
									Any disputes arising from these terms will
									be resolved through good faith negotiation.
									If negotiation fails, disputes will be
									subject to binding arbitration in accordance
									with applicable laws.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.1}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									11. Governing Law
								</h2>
								<p className="leading-relaxed">
									These Terms of Service shall be governed by
									and construed in accordance with applicable
									international trade laws and regulations.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.2}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									12. Changes to Terms
								</h2>
								<p className="leading-relaxed">
									We reserve the right to modify these terms
									at any time. We will notify users of any
									material changes. Your continued use of our
									services after such modifications
									constitutes acceptance of the updated terms.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.3}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									13. Contact Information
								</h2>
								<p className="leading-relaxed">
									For questions about these Terms of Service,
									please contact us at:
								</p>
								<div className="mt-4 p-6 bg-secondary/30 rounded-lg">
									<p className="font-semibold">
										SMCH Nexus Trading Limited
									</p>
									<p>Email: legal@smchnexus.com</p>
									<p>Phone: +1 (555) 123-4567</p>
									<p>
										Address: Global Trade Center, Business
										District
									</p>
								</div>
							</section>
						</TextReveal>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default TermsOfService;
