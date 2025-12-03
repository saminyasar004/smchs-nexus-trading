import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/careers" element={<Careers />} />
						<Route
							path="/privacy-policy"
							element={<PrivacyPolicy />}
						/>
						<Route
							path="/terms-of-service"
							element={<TermsOfService />}
						/>
						<Route
							path="/cookie-policy"
							element={<CookiePolicy />}
						/>
						<Route path="/compliance" element={<Compliance />} />
						<Route
							path="/services/:slug"
							element={<ServiceDetail />}
						/>
						{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
