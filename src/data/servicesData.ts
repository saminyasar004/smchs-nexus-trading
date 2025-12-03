import {
	Package,
	TrendingUp,
	Building2,
	Hotel,
	Tractor,
	Wrench,
	Headphones,
	Ship,
} from "lucide-react";

import ProductSourcingImg from "/product-sourcing-and-global-supply.jpg";
import InternationalTradeImg from "/international-trade-management.jpg";
import GovernmentPrivateConstructionImg from "/government-and-private-construction-service.jpg";
import HotelTourismSolutionImg from "/hotel-and-corporate-tourism-solutions.jpg";
import AgriculturalMachineryImg from "/agricultural-machinery-sales-and-rental.jpg";
import IndustryEquipmentImg from "/industrial-and-construction-equipment-rental-services.jpg";
import TechnicalSupportImg from "/technical-support-and-after-sales-solutions.jpg";
import ShippingLogisticsImg from "/shipping-logistics-and-customs-documentation.jpg";

export const servicesData = [
	{
		id: "product-sourcing-global-supply",
		title: "Product Sourcing & Global Supply",
		icon: Package,
		image: ProductSourcingImg,
		shortDescription:
			"Connecting businesses with quality products from global markets.",
		fullDescription: `
			In today's interconnected global economy, efficient product sourcing and a robust supply chain are the backbones of any successful business. At SMCH Nexus Trading Limited, we specialize in identifying, sourcing, and delivering high-quality products from trusted manufacturers and suppliers worldwide. Our extensive network spans across continents, allowing us to find the best materials and finished goods that meet your specific requirements and quality standards.

			We understand that every business has unique needs. That's why our sourcing strategy is tailored to your industry, whether it's raw materials for manufacturing, consumer goods for retail, or specialized equipment for industrial use. We handle the entire procurement process, from supplier verification and price negotiation to quality control and logistics. Our goal is to reduce your operational costs while ensuring you receive premium products on time, every time.

			By leveraging our deep market knowledge and strong relationships with global partners, we mitigate the risks associated with international trade. We navigate the complexities of cross-border transactions, ensuring compliance with all regulations and standards. With SMCH Nexus as your partner, you can focus on growing your business while we handle the intricacies of your global supply chain.
		`,
		features: [
			"Global Supplier Network Verification",
			"Strategic Procurement & Negotiation",
			"Quality Assurance & Control",
			"Cost-Effective Supply Chain Solutions",
			"Timely Delivery & Logistics Management",
		],
	},
	{
		id: "international-trade-management",
		title: "International Trade Management",
		icon: TrendingUp,
		image: InternationalTradeImg,
		shortDescription:
			"End-to-end management of your international trade operations.",
		fullDescription: `
			Navigating the complex world of international trade requires expertise, precision, and a deep understanding of global market dynamics. SMCH Nexus Trading Limited offers comprehensive international trade management services designed to streamline your import and export operations. We act as your strategic partner, guiding you through every step of the trade lifecycle, from market entry strategies to final delivery.

			Our team of experts is well-versed in international trade laws, tariffs, and trade agreements. We help you identify new market opportunities, assess risks, and develop strategies to maximize your competitive advantage. Whether you are looking to expand your export footprint or source products from new markets, we provide the insights and operational support you need to succeed.

			We handle all aspects of trade documentation, compliance, and financial transactions, ensuring a smooth and transparent process. Our proactive approach to problem-solving means we anticipate potential challenges and implement solutions before they impact your business. With our end-to-end trade management services, you can confidently expand your global reach and achieve sustainable growth.
		`,
		features: [
			"Market Entry Strategy & Research",
			"Import & Export Compliance",
			"Trade Finance Facilitation",
			"Risk Assessment & Mitigation",
			"Cross-Border Transaction Management",
		],
	},
	{
		id: "government-private-construction-services",
		title: "Government & Private Construction Services",
		icon: Building2,
		image: GovernmentPrivateConstructionImg,
		shortDescription:
			"Delivering world-class infrastructure and building projects.",
		fullDescription: `
			SMCH Nexus Trading Limited is a premier provider of construction services, catering to both government infrastructure projects and private sector developments. With a commitment to engineering excellence and sustainable building practices, we deliver projects that stand the test of time. Our portfolio includes roads, bridges, commercial buildings, and industrial facilities, all built to the highest international standards.

			We bring together a team of skilled engineers, architects, and project managers who are dedicated to precision and quality. From the initial planning and design phases to construction and final handover, we ensure every detail is meticulously executed. We utilize state-of-the-art technology and modern construction methodologies to optimize efficiency, reduce timelines, and minimize environmental impact.

			Our reputation is built on trust, transparency, and a track record of on-time delivery. We work closely with government bodies and private clients to understand their vision and translate it into reality. Whether it's a large-scale infrastructure initiative or a bespoke commercial development, SMCH Nexus has the expertise and resources to deliver exceptional results that contribute to national development and economic growth.
		`,
		features: [
			"Infrastructure Development (Roads, Bridges)",
			"Commercial & Residential Building Construction",
			"Project Management & Consultancy",
			"Sustainable & Green Building Practices",
			"Quality Control & Safety Standards",
		],
	},
	{
		id: "hotel-corporate-tourism-solutions",
		title: "Hotel & Corporate Tourism Solutions",
		icon: Hotel,
		image: HotelTourismSolutionImg,
		shortDescription:
			"Premium hospitality and customized corporate travel experiences.",
		fullDescription: `
			In the dynamic world of hospitality and tourism, creating memorable experiences is paramount. SMCH Nexus Trading Limited offers a comprehensive suite of solutions for the hotel industry and corporate travel sector. We combine local expertise with global standards to deliver services that elevate guest satisfaction and streamline corporate travel management.

			For the hospitality sector, we provide management consultancy, operational support, and staff training to help hotels achieve operational excellence. We understand the nuances of guest service and brand reputation, helping you create an environment that attracts and retains loyal customers. From boutique hotels to luxury resorts, we tailor our solutions to meet your specific business goals.

			On the corporate tourism front, we specialize in organizing seamless travel experiences for businesses. Whether it's executive retreats, international conferences, or team-building excursions, we handle every detail with professionalism and care. Our customized travel packages ensure that your team can focus on their business objectives while we take care of logistics, accommodation, and unique local experiences.
		`,
		features: [
			"Hotel Management & Operational Consultancy",
			"Corporate Travel & Event Management",
			"Customized Tour Packages",
			"Hospitality Staff Training",
			"Guest Experience Optimization",
		],
	},
	{
		id: "agricultural-machinery-sales-rental",
		title: "Agricultural Machinery Sales & Rental",
		icon: Tractor,
		image: AgriculturalMachineryImg,
		shortDescription:
			"Modernizing agriculture with advanced machinery and solutions.",
		fullDescription: `
			Agriculture is the backbone of our economy, and modernization is key to ensuring food security and sustainable growth. SMCH Nexus Trading Limited is at the forefront of agricultural innovation, providing a wide range of modern machinery for sales and rental. Our fleet of over 285 advanced agro machines includes tractors, harvesters, planters, and irrigation systems designed to boost productivity and efficiency.

			We understand the challenges faced by farmers and agribusinesses. That's why we offer flexible rental options that allow you to access top-tier equipment without the heavy upfront investment. Our sales division provides the latest models from world-renowned manufacturers, ensuring you have access to the best technology available. We believe in empowering farmers with the tools they need to maximize yields and reduce labor costs.

			Beyond equipment, we offer integrated farming solutions and expert advice on mechanization. Our team works with you to identify the right machinery for your specific crops and terrain. We are committed to transforming the agricultural landscape through technology, contributing to a more prosperous and sustainable future for the farming community.
		`,
		features: [
			"Sales of Modern Agricultural Machinery",
			"Flexible Equipment Rental Services",
			"Fleet of 285+ Advanced Machines",
			"Integrated Farming Solutions",
			"Consultation on Agricultural Mechanization",
		],
	},
	{
		id: "industrial-construction-equipment-rental",
		title: "Industrial & Construction Equipment Rental Services",
		icon: Wrench,
		image: IndustryEquipmentImg,
		shortDescription:
			"Reliable heavy equipment rental for projects of any scale.",
		fullDescription: `
			Success in industrial and construction projects depends heavily on having the right equipment at the right time. SMCH Nexus Trading Limited is a trusted industry leader in equipment rental, boasting a robust inventory of over 1,215 small, medium, and large machinery units. From excavators and cranes to generators and compressors, we have the diverse fleet to support projects of any scale and complexity.

			We pride ourselves on the reliability and performance of our equipment. Every unit in our fleet undergoes rigorous maintenance and safety checks to ensure optimal operation on your job site. We understand that downtime is costly, which is why we offer 24/7 technical support and rapid replacement services to keep your project moving forward without interruption.

			Our rental solutions are designed to be flexible and cost-effective. Whether you need equipment for a short-term job or a long-term infrastructure project, we offer competitive rates and tailored packages. Our experienced team assists you in selecting the right machinery for your specific tasks, ensuring efficiency and safety. With SMCH Nexus, you have a reliable partner powering your project's success.
		`,
		features: [
			"Diverse Fleet of 1,215+ Equipment Units",
			"Heavy Machinery for Construction & Industry",
			"Short-term & Long-term Rental Options",
			"Rigorous Maintenance & Safety Checks",
			"24/7 On-Site Support & Service",
		],
	},
	{
		id: "technical-support-after-sales-solutions",
		title: "Technical Support & After-Sales Solutions",
		icon: Headphones,
		image: TechnicalSupportImg,
		shortDescription:
			"Unwavering support to ensure your operations never stop.",
		fullDescription: `
			At SMCH Nexus Trading Limited, our relationship with clients extends far beyond the point of sale. We believe that exceptional after-sales service is the cornerstone of trust and long-term partnership. Our dedicated Technical Support & After-Sales Solutions division is committed to ensuring the longevity and optimal performance of every product and service we deliver.

			We offer comprehensive maintenance contracts, spare parts supply, and on-site repair services for all our machinery and equipment. Our team of highly trained technicians is equipped with the latest diagnostic tools and expertise to resolve issues quickly and effectively. We prioritize rapid response times to minimize downtime and ensure your business operations continue smoothly.

			We also provide training programs for your operators and staff, empowering them to use equipment safely and efficiently. Our proactive maintenance schedules help prevent breakdowns before they occur, saving you time and money in the long run. With our unwavering support, you can have total peace of mind knowing that SMCH Nexus is always by your side.
		`,
		features: [
			"Comprehensive Maintenance Contracts",
			"Rapid Response Repair Services",
			"Genuine Spare Parts Supply",
			"Operator Training & Safety Workshops",
			"24/7 Technical Helpdesk",
		],
	},
	{
		id: "shipping-logistics-customs-documentation",
		title: "Shipping, Logistics & Customs Documentation",
		icon: Ship,
		image: ShippingLogisticsImg,
		shortDescription:
			"Seamless logistics and customs solutions for global trade.",
		fullDescription: `
			Efficient logistics and smooth customs clearance are critical components of successful international trade. SMCH Nexus Trading Limited offers end-to-end shipping and logistics solutions designed to move your goods across borders with speed and reliability. We handle the complexities of global transportation, ensuring your cargo reaches its destination safely and on time.

			Our expertise in customs documentation is a key differentiator. Navigating the maze of customs regulations, tariffs, and compliance requirements can be daunting. Our experienced team manages all necessary paperwork, permits, and clearances, ensuring full compliance with local and international laws. We minimize delays and avoid costly penalties, providing you with a hassle-free trade experience.

			We leverage a global network of freight forwarders and shipping lines to offer competitive rates and flexible shipping options, including air, sea, and land freight. Whether you are shipping small parcels or bulk cargo, we provide real-time tracking and personalized service. Let us handle the logistics so you can focus on your core business.
		`,
		features: [
			"End-to-End Freight Forwarding (Air, Sea, Land)",
			"Expert Customs Clearance & Documentation",
			"Regulatory Compliance Management",
			"Real-Time Cargo Tracking",
			"Warehousing & Distribution Services",
		],
	},
];
