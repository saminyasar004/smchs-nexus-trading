import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TextReveal } from "@/components/ui/text-reveal";

const PrivacyPolicy = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<section className="pt-32 pb-20">
				<div className="container mx-auto px-4 max-w-4xl">
					<TextReveal>
						<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
							Privacy <span className="text-primary">Policy</span>
						</h1>
						<p className="text-foreground/70 mb-8">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</TextReveal>

					<div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
						<TextReveal delay={0.1}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									1. Introduction
								</h2>
								<p className="leading-relaxed">
									SMCH Nexus Trading Limited ("we," "our," or
									"us") is committed to protecting your
									privacy. This Privacy Policy explains how we
									collect, use, disclose, and safeguard your
									information when you visit our website or
									use our services.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.2}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									2. Information We Collect
								</h2>
								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Personal Information
								</h3>
								<p className="leading-relaxed mb-4">
									We may collect personal information that you
									voluntarily provide to us, including:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Name and contact information (email
										address, phone number, mailing address)
									</li>
									<li>Company information and job title</li>
									<li>
										Business requirements and project
										details
									</li>
									<li>Payment and billing information</li>
									<li>Communication preferences</li>
								</ul>

								<h3 className="text-2xl font-semibold mb-3 mt-6 text-foreground">
									Automatically Collected Information
								</h3>
								<p className="leading-relaxed mb-4">
									When you visit our website, we automatically
									collect certain information, including:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>IP address and browser type</li>
									<li>
										Operating system and device information
									</li>
									<li>
										Pages viewed and time spent on pages
									</li>
									<li>Referring website addresses</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.3}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									3. How We Use Your Information
								</h2>
								<p className="leading-relaxed mb-4">
									We use the information we collect to:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Provide and maintain our services</li>
									<li>
										Process transactions and send related
										information
									</li>
									<li>
										Respond to inquiries and provide
										customer support
									</li>
									<li>
										Send marketing communications (with your
										consent)
									</li>
									<li>Improve our website and services</li>
									<li>Comply with legal obligations</li>
									<li>
										Detect and prevent fraud or security
										issues
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.4}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									4. Information Sharing
								</h2>
								<p className="leading-relaxed mb-4">
									We may share your information with:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Service Providers:</strong>{" "}
										Third-party vendors who perform services
										on our behalf
									</li>
									<li>
										<strong>Business Partners:</strong>{" "}
										Partners involved in delivering services
										you request
									</li>
									<li>
										<strong>Legal Requirements:</strong>{" "}
										When required by law or to protect our
										rights
									</li>
									<li>
										<strong>Business Transfers:</strong> In
										connection with mergers, acquisitions,
										or asset sales
									</li>
								</ul>
								<p className="leading-relaxed mt-4">
									We do not sell your personal information to
									third parties.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.5}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									5. Data Security
								</h2>
								<p className="leading-relaxed">
									We implement appropriate technical and
									organizational measures to protect your
									personal information. However, no method of
									transmission over the Internet or electronic
									storage is 100% secure. While we strive to
									use commercially acceptable means to protect
									your information, we cannot guarantee its
									absolute security.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.6}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									6. Your Rights
								</h2>
								<p className="leading-relaxed mb-4">
									Depending on your location, you may have the
									following rights:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										Access and receive a copy of your
										personal information
									</li>
									<li>
										Rectify inaccurate or incomplete
										information
									</li>
									<li>
										Request deletion of your personal
										information
									</li>
									<li>
										Object to or restrict processing of your
										information
									</li>
									<li>Data portability</li>
									<li>Withdraw consent at any time</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.7}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									7. Cookies and Tracking
								</h2>
								<p className="leading-relaxed">
									We use cookies and similar tracking
									technologies to enhance your experience on
									our website. You can control cookies through
									your browser settings. Please see our Cookie
									Policy for more information.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.8}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									8. International Data Transfers
								</h2>
								<p className="leading-relaxed">
									Your information may be transferred to and
									processed in countries other than your
									country of residence. We ensure appropriate
									safeguards are in place to protect your
									information in accordance with this Privacy
									Policy.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.9}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									9. Children's Privacy
								</h2>
								<p className="leading-relaxed">
									Our services are not directed to children
									under 16. We do not knowingly collect
									personal information from children under 16.
									If you believe we have collected such
									information, please contact us immediately.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.0}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									10. Changes to This Policy
								</h2>
								<p className="leading-relaxed">
									We may update this Privacy Policy from time
									to time. We will notify you of any changes
									by posting the new Privacy Policy on this
									page and updating the "Last updated" date.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.1}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									11. Contact Us
								</h2>
								<p className="leading-relaxed">
									If you have any questions about this Privacy
									Policy, please contact us at:
								</p>
								<div className="mt-4 p-6 bg-secondary/30 rounded-lg">
									<p className="font-semibold">
										SMCH Nexus Trading Limited
									</p>
									<p>Email: privacy@smchnexus.com</p>
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

export default PrivacyPolicy;
