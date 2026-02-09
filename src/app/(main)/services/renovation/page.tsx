import Image from "next/image";
import {Badge, Button, Container, Flex, Grid, Section} from "@/components/ui";
import {CheckCircleIcon, ClockIcon, IncreaseIcon, LocationIcon, StarIcon} from "@/components/icons";
import {IconProps} from "@/components/icons";
import {FC} from "react";
import renovationHeroImage from "@/assets/images/renovation-hero.png";
import serviceImageSample from "@/assets/images/service_01.png";

const stats = [
	{value: "$75 - $85/h", label: "Average Rate"},
	{value: "4 - 8 Weeks", label: "Typical Duration"},
	{value: "1,200+", label: "Projects Completed"},
	{value: "Alberta Wide", label: "Service Coverage"},
];

interface TrustItem {
	title: string;
	Icon: FC<IconProps>;
}

const trustItems: TrustItem[] = [
	{title: "Licensed & Insured", Icon: CheckCircleIcon},
	{title: "Permit Assistance", Icon: ClockIcon},
	{title: "Local Professionals", Icon: LocationIcon},
];

const services = [
	{
		id: 1,
		title: "Basement Development",
		description: "Transform your basement into a functional living space, rental suite, or entertainment area.",
		image: serviceImageSample,
		// image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
		priceRange: "$40K-$80K+",
	},
	{
		id: 2,
		title: "Kitchen Remodel",
		description: "Complete kitchen renovations including cabinets, countertops, and appliances.",
		image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
		priceRange: "$25K-$60K+",
	},
	{
		id: 3,
		title: "Bathroom Update",
		description: "Modern bathroom renovations from simple updates to complete overhauls.",
		image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
		priceRange: "$15K-$40K+",
	},
	{
		id: 4,
		title: "Whole Home Renovation",
		description: "Comprehensive home renovations covering multiple rooms and systems.",
		image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
		priceRange: "$100K-$300K+",
	},
	{
		id: 5,
		title: "Home Additions",
		description: "Expand your living space with new rooms, extensions, or second stories.",
		image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
		priceRange: "$80K-$200K+",
	},
	{
		id: 6,
		title: "Exterior Facelift",
		description: "Update your home's curb appeal with siding, roofing, and landscaping.",
		image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
		priceRange: "$20K-$60K+",
	},
];

const featuredContractor = {
	name: "Summit Renovations",
	description: "Award-winning basement and home renovation specialists serving the Greater Calgary Area since 2010. Known for transparent pricing and strict timeline adherence.",
	image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
	features: [
		"Fully licensed and insured in Alberta",
		"5-year warranty on workmanship",
		"Prefers eco-friendly materials",
	],
};

const recentProjects = [
	{
		id: 1,
		title: "Modern Basement Suite",
		location: "Calgary, AB",
		image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
	},
	{
		id: 2,
		title: "Entertainment Basement",
		location: "Edmonton, AB",
		image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
	},
	{
		id: 3,
		title: "Kitchen Transformation",
		location: "Red Deer, AB",
		image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
	},
];

export default function RenovationCategory() {
	return (
		<>
			{/* Hero Section */}
			<Section spacing="none" className="bg-gradient-to-b from-[#B1CFFF] to-[#F7FAFB] pt-24 md:pt-36 pb-12 md:pb-16">
				<Container size="xl">
					<Flex direction="col" gap="md" align="center" justify="center" smDirection="row">
						{/* Left Section */}
						<div className="w-full md:w-1/2">
							<p className="text-[#0077CC] text-xs font-semibold uppercase tracking-wide mb-3">
								HOME SERVICES / RENOVATION
							</p>
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1B2B] mb-4 md:mb-6 leading-tight">
								Transform Your Home With Verified Experts.
							</h1>
							<p className="text-colors-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
								{`Connect with Alberta's top-rated renovation contractors for basement
								developments, kitchen remodels, additions, and complete home transformations.`}
							</p>
							<Flex direction="col" justify="center" align="center" smDirection="row" gap="sm"
										className="md:justify-start mb-6 md:mb-8">
								<Button variant="primary" size="lg" weight="semiBold" className="w-full md:w-auto">
									Start Your Project
								</Button>
								<Button variant="outline" size="lg" className="w-full md:w-auto">
									View Past Projects
								</Button>
							</Flex>
							<Flex direction="row" wrap={true} gap="md" className="md:gap-6">
								{trustItems.map((item, idx) => (
									<div key={idx} className="flex items-center gap-2">
										<item.Icon size="sm" className="text-[#3B82F6]"/>
										<span className="text-sm text-colors-muted">{item.title}</span>
									</div>
								))}
							</Flex>
						</div>
						{/* Right Section */}
						<div className="w-full md:w-1/2 relative">
							<Image src={renovationHeroImage} alt="Hero" className="rounded-xl"/>
							<div className="absolute bottom-6 left-6 bg-white flex flex-row items-center p-4 rounded-lg">
								<Flex gap="md" align="center" justify="start" direction="row">
									<Flex gap="md" align="center" justify="center" direction="row"
												className="rounded-full bg-[#E0F2FE] p-[10px]">
										<IncreaseIcon size="md"/>
									</Flex>
									<Flex gap="xs" align="start" justify="start" direction="col">
										<p className="text-colors-primary text-sm font-semibold">ROI Average</p>
										<p className="text-colors-muted text-xs">+72% Home Value</p>
									</Flex>
								</Flex>
							</div>
						</div>

					</Flex>

				</Container>
			</Section>

			{/* Stats Section */}
			<Section spacing="none" bgColor="#F7FAFB" className="py-2 md:py-10">
				<Container size="xl">
					{/* border-b border-gray-100 */}
					<Grid cols={4} gap="lg">
						{stats.map((stat, idx) => (
							<div key={idx} className="text-left">
								<p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3B82F6] mb-2">
									{stat.value}
								</p>
								<p className="text-xs sm:text-sm text-colors-muted">{stat.label}</p>
							</div>
						))}
					</Grid>
				</Container>
			</Section>

			{/* Popular Renovation Services */}
			<Section spacing="none" bgColor="#F7FAFB" className="py-8 md:py-10 lg:py-20">
				<Container size="xl">
					<div className="mb-8 md:mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B] mb-3">
							Popular Renovation Services
						</h2>
						<p className="text-colors-muted text-sm md:text-base max-w-2xl">
							{`Explore Alberta's most requested renovation services. All contractors are
								verified, insured, and reviewed by real homeowners.`}
						</p>
					</div>

					<Grid cols={3} gap="md">
						{services.map((service) => (
							<div
								key={service.id}
								className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
							>
								<div className="relative h-96">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4 md:p-6">
									<h3 className="text-[20px] md:text-lg font-semibold text-[#0B1B2B] mb-3">
										{service.title}
									</h3>
									<p className="text-base text-colors-muted mb-3 line-clamp-2">
										{service.description}
									</p>
									<Badge variant="none"
												 className="text-sm font-semibold text-[#0077CC] px-4 py-2 bg-[#D8E4FF] rounded-[6px]">
										<span className="mr-1">Budget:</span>{service.priceRange}
									</Badge>
								</div>
							</div>
						))}
					</Grid>
				</Container>
			</Section>

			{/* Featured Contractor */}
			<Section spacing="none" bgColor="#F1F5F9" className="py-8 md:py-10 lg:py-20">
				<Container size="xl">
					<Flex gap="2xl" align="center" justify="center" mdDirection="row" direction="col"
								className="bg-[#F7FAFC] p-12 rounded-lg">
						{/* Left Section */}
						<div className="w-full md:w-1/2">
							<Flex gap="sm" align="center" justify="start"
										className="text-[#0077CC] text-base font-semibold uppercase tracking-wide">
								<StarIcon size="md"/>
								<span>Featured Contractor</span>
							</Flex>
							<h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B2B] mt-2 mb-4">
								{featuredContractor.name}
							</h2>
							<p className="text-colors-muted text-sm md:text-base mb-6">
								{featuredContractor.description}
							</p>
							<ul className="space-y-3 mb-6">
								{featuredContractor.features.map((feature, idx) => (
									<li key={idx} className="flex items-center gap-3">
										<CheckCircleIcon size="md" className="text-[#3B82F6] flex-shrink-0"/>
										<span className="text-sm text-[#0B1B2B]">{feature}</span>
									</li>
								))}
							</ul>
							<div className="flex items-center gap-4">
								<Button variant="primary" size="lg">
									View Profile
								</Button>
							</div>
						</div>
						{/* Right Section */}
						<div className="w-full md:w-1/2">
							<div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
								<Image
									src={featuredContractor.image}
									alt={featuredContractor.name}
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</Flex>
				</Container>
			</Section>

			{/* Recent Transformations */}
			<Section spacing="none" bgColor="#FAFBFC" className="py-8 md:py-10 lg:py-20">
				<Container size="xl">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-2xl md:text-3xl font-semibold text-[#0B2545] mb-3">
							Recent Transformations
						</h2>
						<p className="text-colors-muted text-sm md:text-lg">
							{`See what's possible with our network of professionals.`}
						</p>
					</div>

					<Grid cols={3} gap="lg">
						{recentProjects.map((project) => (
							<div
								key={project.id}
								className="group relative rounded-xl overflow-hidden h-60 md:h-80"
							>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
								<div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
									<h3 className="text-white font-semibold text-lg md:text-xl mb-2">
										{project.title}
									</h3>
									<div className="flex items-center justify-between">
										<span className="text-white/80 text-xs sm:text-sm">{project.location}</span>
									</div>
								</div>
							</div>
						))}
					</Grid>
				</Container>
			</Section>

			{/* CTA Section */}
			<Section spacing="none" bgColor="#FAFBFC" className="py-8 md:py-10 lg:py-20 px-4 md:px-0">
				<Container size="xl"
									 className="bg-gradient-to-r from-btn-primary-from to-btn-primary-to py-12 md:py-16 px-6 sm:px-10 md:px-16 rounded-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
							Ready to start your renovation?
						</h2>
						<p className="text-white/80 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
							Get matched with top-rated local contractors. Free quotes, no obligation.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
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
								className="border border-white text-white hover:bg-white/10 bg-white/20"
							>
								Call Us Now
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
