import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TextReveal } from "@/components/ui/text-reveal";

const CookiePolicy = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<section className="pt-32 pb-20">
				<div className="container mx-auto px-4 max-w-4xl">
					<TextReveal>
						<h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
							Cookie <span className="text-primary">Policy</span>
						</h1>
						<p className="text-foreground/70 mb-8">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</TextReveal>

					<div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
						<TextReveal delay={0.1}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									1. What Are Cookies?
								</h2>
								<p className="leading-relaxed">
									Cookies are small text files that are placed
									on your device when you visit our website.
									They help us provide you with a better
									experience by remembering your preferences
									and understanding how you use our site.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.2}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									2. Types of Cookies We Use
								</h2>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Essential Cookies
								</h3>
								<p className="leading-relaxed mb-4">
									These cookies are necessary for the website
									to function properly. They enable basic
									functions like page navigation and access to
									secure areas of the website.
								</p>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Performance Cookies
								</h3>
								<p className="leading-relaxed mb-4">
									These cookies collect information about how
									visitors use our website, such as which
									pages are visited most often. This helps us
									improve our website's performance.
								</p>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Functionality Cookies
								</h3>
								<p className="leading-relaxed mb-4">
									These cookies allow our website to remember
									choices you make and provide enhanced
									features. They may be used to remember your
									language preference or region.
								</p>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Targeting/Advertising Cookies
								</h3>
								<p className="leading-relaxed">
									These cookies are used to deliver
									advertisements that are relevant to you and
									your interests. They also help limit the
									number of times you see an advertisement.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.3}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									3. How We Use Cookies
								</h2>
								<p className="leading-relaxed mb-4">
									We use cookies to:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Keep you signed in to your account</li>
									<li>
										Understand and improve how you use our
										website
									</li>
									<li>Personalize your experience</li>
									<li>
										Remember your preferences and settings
									</li>
									<li>
										Analyze site performance and traffic
									</li>
									<li>Deliver relevant advertisements</li>
									<li>Prevent fraud and enhance security</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.4}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									4. Third-Party Cookies
								</h2>
								<p className="leading-relaxed">
									We may also use third-party cookies from
									trusted partners to help us analyze website
									usage and provide advertising services.
									These third parties have their own privacy
									policies and we have no control over their
									cookies.
								</p>
								<p className="leading-relaxed mt-4">
									Third-party services we may use include:
								</p>
								<ul className="list-disc pl-6 space-y-2 mt-2">
									<li>
										Google Analytics for website analytics
									</li>
									<li>
										Social media platforms for sharing
										features
									</li>
									<li>
										Advertising networks for targeted
										advertising
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.5}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									5. Managing Cookies
								</h2>
								<p className="leading-relaxed mb-4">
									You have the right to decide whether to
									accept or reject cookies. You can exercise
									your cookie preferences through:
								</p>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Browser Settings
								</h3>
								<p className="leading-relaxed mb-4">
									Most web browsers allow you to control
									cookies through their settings. You can set
									your browser to refuse cookies or delete
									certain cookies.
								</p>

								<h3 className="text-2xl font-semibold mb-3 text-foreground">
									Cookie Preference Center
								</h3>
								<p className="leading-relaxed">
									We provide a cookie preference center where
									you can review and adjust your cookie
									preferences at any time.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.6}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									6. Impact of Disabling Cookies
								</h2>
								<p className="leading-relaxed">
									If you choose to disable cookies, some
									features of our website may not function
									properly. You may not be able to access
									certain areas of our site, and your
									experience may be less personalized.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.7}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									7. Cookie Retention
								</h2>
								<p className="leading-relaxed mb-4">
									Cookies may be:
								</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>
										<strong>Session Cookies:</strong>{" "}
										Temporary cookies that expire when you
										close your browser
									</li>
									<li>
										<strong>Persistent Cookies:</strong>{" "}
										Remain on your device for a set period
										or until you delete them
									</li>
								</ul>
							</section>
						</TextReveal>

						<TextReveal delay={0.8}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									8. Updates to This Policy
								</h2>
								<p className="leading-relaxed">
									We may update this Cookie Policy from time
									to time to reflect changes in our practices
									or legal requirements. We will notify you of
									any significant changes by posting the new
									policy on this page.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={0.9}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									9. More Information
								</h2>
								<p className="leading-relaxed">
									For more information about how we use
									cookies and your data, please refer to our
									Privacy Policy. If you have questions about
									our use of cookies, please contact us.
								</p>
							</section>
						</TextReveal>

						<TextReveal delay={1.0}>
							<section>
								<h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
									10. Contact Us
								</h2>
								<p className="leading-relaxed">
									If you have any questions about our Cookie
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

export default CookiePolicy;
