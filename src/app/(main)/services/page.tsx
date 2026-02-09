import {Button, Container, Flex, Grid, IconBox, Section} from "@/components/ui";
import {
	CheckCircleIcon,
	ClockIcon,
	LocationIcon,
	WaterIcon,
	TrashIcon,
	ThunderIcon,
	ToolsIcon,
	DangerIcon,
	ShieldCheckIcon,
	VerifiedIcon,
} from "@/components/icons";
import {IconProps} from "@/components/icons";
import {FC} from "react";

// Keep complex decorated stat card SVGs as images
import happyClientSVG from "@/assets/images/svg/servicesPage/happy_clients.svg";
import projectsCompletedSVG from "@/assets/images/svg/servicesPage/projects_completed.svg";
import yearsOfExpSVG from "@/assets/images/svg/servicesPage/years_of_experience.svg";
import clientSatisSVG from "@/assets/images/svg/servicesPage/client_satisfaction.svg";

interface ServiceFeature {
	Icon: FC<IconProps>;
	title: string;
}

interface Service {
	id: number;
	title: string;
	features: ServiceFeature[];
	priceRange: string;
	iconColor: string;
	bgColor: string;
}

// Icons for services
const services: Service[] = [
	{
		id: 1,
		title: "Leak Detection & Repair",
		features: [
			{Icon: ClockIcon, title: "1-2 hours"},
			{Icon: ToolsIcon, title: "emergency service"},
		],
		priceRange: "$100 - $300",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
	{
		id: 2,
		title: "Drain Cleaning",
		features: [
			{Icon: ClockIcon, title: "1-3 hours"},
			{Icon: CheckCircleIcon, title: "Clog removal"},
		],
		priceRange: "$100 - $300",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
	{
		id: 3,
		title: "Water Heater Install",
		features: [
			{Icon: ClockIcon, title: "3-5 hours"},
			{Icon: ThunderIcon, title: "Gas or Electric"},
		],
		priceRange: "$300 - $1,500",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
	{
		id: 4,
		title: "Toilet Repair / Install",
		features: [
			{Icon: ClockIcon, title: "2-3 hours"},
			{Icon: TrashIcon, title: "Disposal option"},
		],
		priceRange: "$150 - $500",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
	{
		id: 5,
		title: "Faucet & Sink Repair",
		features: [
			{Icon: ClockIcon, title: "1-2 hours"},
			{Icon: WaterIcon, title: "Leak fix"},
		],
		priceRange: "$80 - $250",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
	{
		id: 6,
		title: "Frozen Pipe Thawing",
		features: [
			{Icon: ClockIcon, title: "2-4 hours"},
			{Icon: DangerIcon, title: "Emergency"},
		],
		priceRange: "$150 - $400",
		iconColor: "#0077CC",
		bgColor: "#F59E0B",
	},
];

const features = [
	{
		id: 1,
		title: "Winter-Ready Expertise",
		description:
			"Our professionals specialize in handling frozen pipes, winter heating issues, and other cold-weather challenges unique to Alberta's harsh climate.",
		Icon: ShieldCheckIcon,
	},
	{
		id: 2,
		title: "Code Compliance",
		description:
			"All work is performed to provincial certification and regulation requirements. We ensure your plumbing meets all local codes.",
		Icon: VerifiedIcon,
	},
	{
		id: 3,
		title: "Verified Insurance",
		description:
			"Every professional on our platform carries liability insurance, giving you peace of mind and protection for your property.",
		Icon: ShieldCheckIcon,
	},
	{
		id: 4,
		title: "24/7 Emergency Response",
		description:
			"Plumbing emergencies don't wait for business hours. Find pros for burst pipes, flooding, and other emergencies any time.",
		Icon: ClockIcon,
	},
];

const costGuideData = [
	{
		service: "Service Call / Diagnostic",
		low: "$75",
		avg: "$125",
		high: "$175",
	},
	{service: "Clogged Drain Cleaning", low: "$100", avg: "$175", high: "$300"},
	{service: "Toilet Installation", low: "$150", avg: "$250", high: "$400"},
	{
		service: "Sump Pump Replacement",
		low: "$400",
		avg: "$650",
		high: "$1,000",
	},
	{
		service: "Water Heater Replacement",
		low: "$1,200",
		avg: "$1,800",
		high: "$3,000",
	},
	{
		service: "Main Sewer Line Repair",
		low: "$1,500",
		avg: "$4,000",
		high: "$8,000",
	},
];

const trustItems = [
	{title: "Licensed & insured", Icon: CheckCircleIcon},
	{title: "Same-day service available", Icon: ClockIcon},
	{title: "Local professionals", Icon: LocationIcon},
];

const clientFeatures = [
	{counter: "80+", title: "Happy Clients", Icon: happyClientSVG},
	{
		counter: "1500",
		title: "Projects Completed",
		Icon: projectsCompletedSVG,
	},
	{counter: "10+", title: "Years of Experience", Icon: yearsOfExpSVG},
	{counter: "97%", title: "Client Satisfaction", Icon: clientSatisSVG},
];

export default function Services() {
	return (
		<>
			{/* Hero Section */}
			<Section className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4 lg:px-0" bgColor="#F1F4F6">
				<Container size="xl">
					<Flex
						direction="col"
						mdDirection="row"
						align="center"
						justify="between"
						gap="lg"
					>
						{/* Left Content */}
						<div className="w-full md:w-1/2">
							<p className="text-[#0077CC] text-xs font-bold uppercase tracking-wide mb-4">
								HOME SERVICES / PLUMBING
							</p>
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1B2B] mb-4 md:mb-6 leading-tight">
								Expert Plumbing Services in Canada
							</h1>
							<p className="text-colors-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
								Connect with licensed, insured plumbers for repairs, installations, and emergency
								maintenance. Trusted
								by thousands of Albertan homeowners.
							</p>

							<Flex gap="md" className="mb-8" align="start" direction="col" justify="start" lgDirection="row">
								<Button variant="primary" size="lg" weight="semiBold">
									Request a Quote
								</Button>
								<Button variant="outline" size="lg">
									Browse Professionals
								</Button>
							</Flex>

							<Flex gap="lg" align="center" wrap>
								{trustItems.map((item, idx) => (
									<Flex key={idx} gap="sm" align="center">
										<item.Icon size="sm" className="text-[#3B82F6]"/>
										<span className="text-sm text-colors-muted">{item.title}</span>
									</Flex>
								))}
							</Flex>
						</div>

						{/* Right Stats */}
						<div className="w-full md:w-auto">
							<Grid cols={2} gap="md">
								{clientFeatures && clientFeatures.map((item, idx) => (
									<div key={idx}
											 className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
										<div className="flex justify-center items-center mb-2">
											<div className="w-19 h-19 p-1 border border-gray-200 rounded-md">
												<item.Icon className=" text-[#3B82F6]"/>
											</div>
										</div>
										<p className="text-3xl font-bold text-colors-primary mb-2">{item.counter}</p>
										<p className="text-sm text-colors-muted">{item.title}</p>
									</div>
								))}
							</Grid>
						</div>
					</Flex>
				</Container>
			</Section>

			{/* Common Plumbing Services Section */}
			<Section className="py-20 md:pb-16 px-2 md:px-4 lg:px-0" bgColor="#F7F9FB">
				<Container size="xl" className="text-start">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-[#0B1B2B] mb-4">
							Common Plumbing Services
						</h2>
						<p className="text-colors-muted max-w-2xl">
							Browse pricing estimates for frequent repairs. Final quotes may
							vary based on complexity.
						</p>
					</div>

					<Grid cols={3} gap="lg">
						{services.map((service) => (
							<div
								key={service.id}
								className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-200 transition group"
							>
								<Flex align="center" justify="between" className="mb-4">
									<IconBox
										size="lg"
										variant="rounded"
										bgColor={service.bgColor}
									>
										<WaterIcon size="xl" className="text-[#0077CC]"/>
									</IconBox>
									<span className="text-lg font-semibold text-[#0077CC]">
                    {service.priceRange}
                  </span>
								</Flex>

								<h3 className="font-semibold text-lg text-[#0B1B2B] mb-2">
									{service.title}
								</h3>
								<Flex gap="md" direction="row" align="center" justify="start"
											className="text-sm text-colors-muted mb-6">
									{service.features.map((feature, idx) => (
										<Flex key={idx} gap="none" direction="row" align="center" justify="start">
											<feature.Icon size="sm" className="text-colors-muted"/>
											<p className="mb-1">{feature.title}</p>
										</Flex>
									))}
								</Flex>

								<Button
									variant="outline"
									size="sm"
									className="w-full bg-[#F7F9FB]"
								>
									Get Quotes
								</Button>
							</div>
						))}
					</Grid>
				</Container>
			</Section>

			{/* Why Choose InstaFix Section */}
			<Section className="py-20 px-2 md:px-4 lg:px-0" bgColor="#E9F5FF">
				<Container size="xl">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-[#0B2140] mb-4">
							Why choose InstaFix for plumbing?
						</h2>
						<p className="text-colors-muted">
							We understand the unique challenges of Canadian homes and climate.
						</p>
					</div>

					<Grid cols={2} gap="lg">
						{features.map((feature) => (
							<Flex key={feature.id} gap="md" align="start">
								<Flex gap="none" align="center" justify="center">
									<IconBox variant="rounded" bgColor="#FFF" size="lg"
													 className="shadow-md flex items-center justify-center">
										<feature.Icon size="xl" className="text-[#3B82F6]"/>
									</IconBox>
								</Flex>
								<div>
									<h3 className="font-semibold text-lg text-[#0B2140] mb-2">
										{feature.title}
									</h3>
									<p className="text-sm text-colors-muted leading-relaxed">
										{feature.description}
									</p>
								</div>
							</Flex>
						))}
					</Grid>
				</Container>
			</Section>

			{/* Cost Guide Section */}
			<Section className="py-20 px-2 md:px-4 lg:px-0" bgColor="#FFFFFF">
				<Container size="xl">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-[#0B2140] mb-4">
							2024 Alberta Plumbing Cost Guide
						</h2>
						<p className="text-colors-muted">
							Average costs based on our completed projects in Edmonton and
							Calgary.
						</p>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full bg-white overflow-hidden min-w-[500px]">
							<thead>
							<tr className="bg-[#F1F4F6] border-b border-gray-200">
								<th className="py-4 px-4 text-left font-semibold text-md text-[#0B1B2B]">Service Type</th>
								<th className="py-4 px-4 text-center font-semibold text-md text-[#0B1B2B]">Low End</th>
								<th className="py-4 px-4 text-center font-semibold text-md text-[#0B1B2B]">Average Cost</th>
								<th className="py-4 px-4 text-center font-semibold text-md text-[#0B1B2B]">High End</th>
							</tr>
							</thead>
							<tbody>
							{costGuideData.map((row, idx) => (
								<tr
									key={idx}
									className={idx !== costGuideData.length - 1 ? "border-b border-gray-100" : ""}
								>
									<td className="py-4 px-6 text-sm text-[#0B2140]">{row.service}</td>
									<td className="py-4 px-6 text-sm text-colors-muted text-center">{row.low}</td>
									<td className="py-4 px-6 text-sm text-colors-muted text-center">{row.avg}</td>
									<td className="py-4 px-6 text-sm text-colors-muted text-center">{row.high}</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>

					<p className="text-xs text-colors-muted mt-4">
						* Prices are estimates only and may vary based on location, materials, and emergency status.
					</p>
				</Container>
			</Section>

			{/* CTA Section */}
			<Section className="pt-12 md:pt-20 pb-20 md:pb-44 px-2 md:px-4 lg:px-0">
				<Container size="xl"
									 className="bg-gradient-to-r from-btn-primary-from to-btn-primary-to py-12 md:py-20 px-6 sm:px-10 md:px-16 rounded-xl">
					<div className="text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Ready to fix that problem?
						</h2>
						<p className="text-white/80 mb-8 max-w-xl mx-auto">
							Post your job for free and get quotes from top-rated local plumbers
							within minutes.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
							<Button
								variant="none"
								size="lg"
								weight="semiBold"
								className="bg-white text-[#3B82F6] hover:bg-gray-100"
							>
								Get Free Quotes
							</Button>
							<Button
								variant="none"
								size="lg"
								className="border border-1 border-white text-white hover:bg-white/10 bg-white/30"
							>
								Browse Directory
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
