import Image from "next/image";
import {Button, Container, Grid, Section} from "@/components/ui";
import { LocationIcon, BadgeCheckIcon } from "@/components/icons";

// Placeholder project images - replace with actual images
import Avatar1 from "@/assets/images/avatarImages/Avatar_Image_1.png";
import Avatar2 from "@/assets/images/avatarImages/Avatar_Image_2.png";

const categories = [
	{id: "all", label: "All"},
	{id: "basements", label: "Basements"},
	{id: "kitchens", label: "Kitchens"},
	{id: "additions", label: "Additions"},
	{id: "exteriors", label: "Exteriors"},
];

const projects = [
	{
		id: 1,
		title: "Modern Legal Suite Conversion",
		location: "Calgary, AB (Killarney)",
		category: "Basements",
		badge: "Basement Reno",
		budget: "62,000",
		weeks: 8,
		sqft: 850,
		contractor: {
			name: "Apex Renovations Ltd.",
			avatar: Avatar1,
		},
		images: [
			"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
		],
	},
	{
		id: 2,
		title: "Open Concept Chef's Kitchen",
		location: "Edmonton, AB (Strathcona)",
		category: "Kitchens",
		badge: "Kitchen Reno",
		budget: "95,000",
		weeks: 6,
		sqft: 280,
		contractor: {
			name: "Elite Interiors Inc.",
			avatar: Avatar2,
		},
		images: [
			"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
		],
	},
	{
		id: 3,
		title: "Basement Gym & Sauna",
		location: "Red Deer, AB",
		category: "Basements",
		badge: "Gym Build",
		budget: "35,000",
		weeks: 5,
		sqft: 600,
		contractor: {
			name: "Nordic Build",
			avatar: Avatar1,
		},
		images: [
			"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
		],
	},
	{
		id: 4,
		title: "Spa-Inspired Ensuite",
		location: "Calgary, AB (Mount Royal)",
		category: "Additions",
		badge: "Bathroom",
		budget: "52,000",
		weeks: 4,
		sqft: 120,
		contractor: {
			name: "Luxe Bathrooms",
			avatar: Avatar2,
		},
		images: [
			"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop",
		],
	},
	{
		id: 5,
		title: "Hardie Board Siding & Deck",
		location: "Airdrie, AB",
		category: "Exteriors",
		badge: "Exterior",
		budget: "38,000",
		weeks: 3,
		sqft: 1200,
		contractor: {
			name: "Curb Appeal Pros",
			avatar: Avatar1,
		},
		images: [
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
		],
	},
	{
		id: 6,
		title: "Budget-Friendly Rec Room",
		location: "Calgary, AB (Brentwood)",
		category: "Basements",
		badge: "Rec Room",
		budget: "24,000",
		weeks: 4,
		sqft: 400,
		contractor: {
			name: "Apex Renovations Ltd.",
			avatar: Avatar2,
		},
		images: [
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
			"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
		],
	},
];

export default function Portfolio() {
	return (
		<>
			{/* Hero Section */}
			<Section className="pt-24 md:pt-40 pb-24 px-2 md:px-4 lg:px-0" bgColor="#F7FAFB">
				<Container size="xl">
					<div className="text-center max-w-2xl mx-auto px-4">
						<h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#0B2131] mb-4">
							Contractor Project Portfolio
						</h1>
						<p className="text-colors-muted text-base md:text-lg leading-relaxed font-light">
							Explore real renovation projects completed by trusted InstaFix
							contractors across Alberta. See costs, timelines, and results.
						</p>
					</div>
				</Container>
			</Section>

			{/* Filter Section */}
			<section className="pb-8 bg-[#F7FAFB] px-2 md:px-4 lg:px-0">
				<Container size="xl" className="rounded-lg border border-1 border-gray-200 ">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4">
						{/* Dropdowns */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
							<span className="text-sm text-colors-muted whitespace-nowrap">Filter by:</span>
							<div className="flex flex-wrap gap-3">
								<div className="relative w-full sm:w-auto">
									<select id="location"
													className="h-10 pl-4 pr-10 border bg-transparent border-gray-200 rounded-lg text-sm text-[#0B2131] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none cursor-pointer">
										<option>All Locations</option>
										<option>Calgary</option>
										<option>Edmonton</option>
										<option>Red Deer</option>
										<option>Airdrie</option>
									</select>
									<svg
										className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-colors-muted pointer-events-none"
										fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
									</svg>
								</div>
								<div className="relative w-full sm:w-auto">
									<select id="type"
													className="h-10 pl-4 pr-10 bg-transparent border border-gray-200 rounded-lg text-sm text-[#0B2131] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none cursor-pointer">
										<option>Project Type</option>
										<option>Renovation</option>
										<option>New Build</option>
										<option>Addition</option>
									</select>
									<svg
										className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-colors-muted pointer-events-none"
										fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
									</svg>
								</div>
								<div className="relative w-full sm:w-auto">
									<select id="budget"
													className="h-10 pl-4 pr-10 bg-transparent border border-gray-200 rounded-lg text-sm text-[#0B2131] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none cursor-pointer">
										<option>Budget Range</option>
										<option>Under $25,000</option>
										<option>$25,000 - $50,000</option>
										<option>$50,000 - $100,000</option>
										<option>Over $100,000</option>
									</select>
									<svg
										className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-colors-muted pointer-events-none"
										fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
									</svg>
								</div>
							</div>
						</div>

						{/* Category Pills */}
						<div className="flex gap-2 flex-wrap">
							{categories.map((cat) => (
								<button
									key={cat.id}
									className={`px-4 py-[6px] rounded-full text-sm font-light ${
										cat.id === "all"
											? "bg-[#0072C6] text-white"
											: "bg-[#E6F2FB] text-[#05445E]"
									}`}
								>
									{cat.label}
								</button>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* Projects Grid */}
			<section className="py-8 md:py-12 bg-[#F7FAFB] px-2 md:px-4 lg:px-0">
				<Container size="xl">
					<Grid cols={2} gap="md">
						{projects.map((project) => (
							<div
								key={project.id}
								className="bg-[#F7FAFB] border border-1 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
							>
								{/* Image */}
								<div className="relative h-48 sm:h-56 md:h-64">
									<Image
										src={project.images[0]}
										alt={project.title}
										fill
										className="object-cover"
									/>
									{/* Badge */}
									<span
										className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#000000]/70 backdrop-blur-sm px-3 sm:px-3 py-1 rounded-[4px] text-xs font-semibold text-white">
										{project.badge}
									</span>
								</div>

								{/* Content */}
								<div className="p-4 sm:p-5">
									<h3 className="text-base sm:text-lg font-semibold text-[#0B1B2B] mb-1">
										{project.title}
									</h3>
									<div className="flex items-center gap-1 pb-5 mb-5 sm:mb-5 border-b border-gray-200">
										<LocationIcon size="sm" className="text-colors-muted flex-shrink-0"/>
										<span className="text-xs sm:text-sm text-colors-muted truncate">
											{project.location}
										</span>
									</div>

									{/* Stats */}
									<div className="flex gap-4 sm:gap-6 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
										<div>
											<p className="text-xs text-colors-muted mb-0.5 uppercase">Budget</p>
											<p className="text-xs sm:text-sm font-semibold text-[#0B1B2B]">
												${project.budget}
											</p>
										</div>
										<div>
											<p className="text-xs text-colors-muted mb-0.5 uppercase">Duration</p>
											<p className="text-xs sm:text-sm font-semibold text-[#0B1B2B]">
												<span className="mr-1">{project.weeks}</span>Weeks
											</p>
										</div>
										<div>
											<p className="text-xs text-colors-muted mb-0.5 uppercase">Size</p>
											<p className="text-xs sm:text-sm font-semibold text-[#0B1B2B]">
												<span className="mr-1">{project.sqft}</span>sq.ft
											</p>
										</div>
									</div>

									{/* Contractor */}
									<div className="flex items-center gap-2 mb-3 sm:mb-4">
										<Image
											src={project.contractor.avatar}
											alt={project.contractor.name}
											width={28}
											height={28}
											className="rounded-full w-7 h-7 sm:w-8 sm:h-8"
										/>
										<span className="flex items-center gap-1 text-xs sm:text-sm text-[#0B1B2B] truncate">
											{project.contractor.name}
											<BadgeCheckIcon size="sm" className="ml-3 text-[#0072C6]" />
										</span>
									</div>

									{/* Buttons */}
									<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
										<Button href={`/portfolio/${project.id}/`} variant="primary" size="md" className="lg:flex-1 text-sm sm:text-sm">
											View Details
										</Button>
										<Button variant="outline" size="md" className="lg:flex-1 text-xs sm:text-sm">
											Before & After
										</Button>
									</div>
								</div>
							</div>
						))}
					</Grid>

					{/* Load More Button */}
					<div className="text-center mt-8 md:mt-12">
						<Button variant="outline" size="lg">
							Load More Projects
						</Button>
					</div>
				</Container>
			</section>

		</>
	);
}
