"use client";

import {useState} from "react";
import Link from "next/link";
import {
	ChevronRightIcon,
	StarFilledIcon,
	LocationIcon,
	MessageIcon,
	ClockIcon,
	CheckIcon,
	DollarSignIcon,
	ArrowRightIcon,
	XIcon,
	SendIcon, BellIcon, NewMessagesIcon, DownloadIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import {Textarea} from "@/components/form";
import Image from "next/image";
import BigProfilePicture from "@/assets/dashboard/bigProfile.png";
import {IconBox} from "@/components/ui";
import Portfolio from "@/assets/dashboard/Portfolio.png";
import LittleIcon from "@/assets/web/images/avatarImages/Avatar_Image_2.png";

const services = [
	{
		id: 1,
		name: "Full Basement Renovation",
		price: "$12,000",
		description: "Complete renovation including flooring, walls, and lighting. Use of high-quality materials in compliance with building standards.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 2,
		name: "Kitchen Renovation",
		price: "$8,500",
		description: "Design and execution of kitchen renovation with custom cabinetry, countertops and modern design.",
		duration: "3–5 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 3,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "1–2 weeks",
		warranty: "2-year warranty",
	},
];

const timeSlots = [
	{date: "June 5", time: "9:00 AM – 1:00 PM"},
	{date: "June 5", time: "1:00 PM – 5:00 PM"},
	{date: "June 6", time: "9:00 AM – 1:00 PM"},
	{date: "June 6", time: "1:00 PM – 5:00 PM"},
	{date: "June 7", time: "9:00 AM – 1:00 PM"},
	{date: "June 7", time: "1:00 PM – 5:00 PM"},
	{date: "June 8", time: "9:00 AM – 1:00 PM"},
	{date: "June 8", time: "1:00 PM – 5:00 PM"},
];

const reviews = [
	{
		name: "Justin Beylem",
		rating: 5,
		time: "2 weeks ago",
		tags: ["HVAC Service", "Quick Cleaning"],
		text: "Great work. They completely renovated our basement and worked very precisely and systematically. Prices were also fair.",
	},
	{
		name: "Justin Beylem",
		rating: 5,
		time: "2 weeks ago",
		tags: ["HVAC Service", "Quick Cleaning"],
		text: "Great work. They completely renovated our basement and worked very precisely and systematically. Prices were also fair.",
	},
	{
		name: "Justin Beylem",
		rating: 5,
		time: "2 weeks ago",
		tags: ["HVAC Service", "Quick Cleaning"],
		text: "Great work. They completely renovated our basement and worked very precisely and systematically. Prices were also fair.",
	},
];

const ratingBars = [
	{label: "5 stars", pct: 71},
	{label: "4 stars", pct: 20},
	{label: "3 stars", pct: 5},
	{label: "2 stars", pct: 3},
	{label: "1 star", pct: 1},
];

const portfolioColors = [
	"from-gray-700 to-gray-900",
	"from-slate-600 to-slate-800",
	"from-zinc-600 to-zinc-800",
	"from-stone-600 to-stone-800",
	"from-neutral-600 to-neutral-800",
	"from-gray-600 to-gray-800",
];

export default function ProfessionalProfilePage({params}: { params: { id: string } }) {
	const [selectedService, setSelectedService] = useState<number | null>(null);
	const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
	const [showQuote, setShowQuote] = useState(false);
	const [quoteText, setQuoteText] = useState("");

	const selected = selectedService !== null ? services[selectedService] : null;
	const slot = selectedSlot !== null ? timeSlots[selectedSlot] : null;

	return (
		<div className="relative pb-24">
			{/* Breadcrumb */}
			<div className="px-3 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4 bg-white border-b border-gray-200">
				<Flex align="center" gap="xs">
					<Link href="/dashboard/customer/services"
								className="text-sm text-gray-500 hover:text-[#3E50F7] transition-colors">
						Services
					</Link>
					<ChevronRightIcon size="sm" className="text-gray-400"/>
					<span className="text-sm font-semibold text-colors-primary">Professional Profile</span>
				</Flex>
			</div>


			<div className="p-3 md:p-6 space-y-5">
				{/* Profile Header */}
				<DashboardCard>
					<Flex align="center" gap="md" justify="between" className="flex-wrap gap-y-4">
						<Flex align="center" gap="md">
							<div
								className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
								<Image src={BigProfilePicture} alt={"Michael Johnson"}/>
							</div>
							<div className="space-y-2">
								<p className="font-bold text-colors-primary">Michael Johnson</p>
								<p className="text-sm text-colors-muted mb-1">Renovation Contractor</p>
								<Flex align="center" gap="xs">
									<span className="text-xs text-colors-muted">(45 reviews)</span>
									<span className="text-sm font-bold text-colors-primary ml-1">4.8</span>
									{Array.from({length: 5}).map((_, i) => (
										<StarFilledIcon key={i} size="md" className="text-[#FFC65C]"/>
									))}
								</Flex>
								<Flex align="center" gap="xs" className="mt-1">
									<LocationIcon size="sm" className="text-colors-primary"/>
									<span className="text-xs text-colors-muted">Edmonton, AB</span>
								</Flex>
							</div>
						</Flex>
						<Flex gap="sm" justify="center" align="center" className="flex-wrap gap-2 md:gap-4">
							<Button
								variant="primary"
								size="md"
								onClick={() => setShowQuote(true)}
								className="flex items-center gap-2 px-4 md:px-8 py-2 md:py-4"
							>
								<MessageIcon size="lg"/>
								Request Quote
							</Button>

							<Button variant="none" size="lg" href={`/dashboard/customer/services/${params.id}/book`}
											className="flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-blue-100 border-2 border-blue-500 text-blue-500">
								<BellIcon size="md"/>
								Book Now
							</Button>
							<Button
								variant="secondary"
								className="flex items-center gap-2 px-4 md:px-8 py-2 md:py-4">
								<NewMessagesIcon size="md"/>
								Message
							</Button>
						</Flex>
					</Flex>
				</DashboardCard>

				<DashboardCard>
					{/* Info chips */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
						{[
							{
								label: "Start Bio",
								value: "Experienced renovation contractor specializing in home remodeling and basement projects. Over 10 years of experience in residential and commercial renovations.",
								Icon: DownloadIcon
							},
							{label: "Years of Experience", value: "10+ years", Icon: DownloadIcon},
							{label: "Areas Served", value: "Edmonton, Calgary, Surrounding Areas", Icon: DownloadIcon},
							{label: "Languages Spoken", value: "English, French", Icon: DownloadIcon},
						].map(({label, value, Icon}) => (
							<Flex key={label} align="start" gap="sm" justify="start" className="w-full">
								<div className="p-1 border border-gray-200 rounded-xl">
									<IconBox size="md" className="bg-[#3E6FF3] text-white shadow-md">
										<Icon size="sm"/>
									</IconBox>
								</div>
								<div className="p-3 space-y-2">
									<p className="text-md text-colors-primary">{label}</p>
									<p className="text-xs font-medium text-colors-muted leading-snug">{value}</p>
								</div>
							</Flex>

						))}
					</div>
				</DashboardCard>
				{/* Services List */}
				<DashboardCard>
					<h3 className="text-base font-semibold text-colors-primary mb-4">Services List</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{services.map((s, i) => (
							<div
								key={s.id}
								className={`space-y-5 border-2 rounded-xl p-4 transition-all ${
									selectedService === i ? "border-[#3E50F7] bg-[#EFF2FF]" : "border-gray-100"
								}`}
							>
								<h4 className="text-lg font-semibold text-colors-primary ">{s.name}</h4>
								<Flex align="center" gap="xs" className="">
									<DollarSignIcon size="md" className="text-colors-primary"/>
									<span className="text-sm text-gray-500">From:</span>
									<span className="text-lg font-bold text-colors-primary">{s.price}</span>
								</Flex>
								<p className="text-md text-colors-muted leading-relaxed">{s.description}</p>
								<Flex gap="md" justify="between">
									<Flex align="center" gap="sm">
										<ClockIcon size="md" className="text-gray-400"/>
										<span className="text-sm text-colors-muted">{s.duration}</span>
									</Flex>
									<Flex align="center" gap="sm">
										<CheckIcon size="md" className="text-gray-400"/>
										<span className="text-sm text-colors-muted">{s.warranty}</span>
									</Flex>
								</Flex>
								<Button
									variant="primary"
									onClick={() => setSelectedService(i === selectedService ? null : i)}
									className={`w-full h-9 rounded-lg text-sm font-medium transition-all ${
										selectedService === i
											? "bg-[#3E50F7] text-white"
											: "border border-[#3E50F7] text-[#3E50F7] hover:bg-[#EFF2FF]"
									}`}
								>
									{selectedService === i ? "Selected ✓" : "View Profile"}
								</Button>
							</div>
						))}
					</div>
				</DashboardCard>
				{/* Availability */}
				<DashboardCard>
					<h3 className="text-base font-semibold text-colors-primary mb-4">Availability</h3>
					<Flex gap="xl" align="start" direction="col" lgDirection="row">
						<div className="space-y-8 lg:space-y-14">
							<div className="">
								<p className="text-md text-colors-primary mb-4">Working Hours</p>
								<Flex align="center" gap="sm">
									<div className="w-8 h-8 rounded flex items-center justify-center">
										<ClockIcon size="lg" className="text-colors-muted"/>
									</div>
									<span className="text-sm text-colors-muted">Mon – Fri, 9:00 AM – 5:00 PM</span>
								</Flex>
							</div>
							<div className="">
								<p className="text-md text-colors-primary mb-4">Next Available Slots</p>
								<Flex align="center" gap="sm">
									<div className="w-8 h-8 rounded flex items-center justify-center">
										<ClockIcon size="lg" className="text-colors-muted"/>
									</div>
									<span className="text-sm text-colors-muted">Next week from June 5</span>
								</Flex>
							</div>

						</div>
						<div className="flex-1 w-full">
							<p className="text-sm font-semibold text-colors-primary mb-3">Select Time Slot</p>
							<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
								{timeSlots.map((slot, i) => (
									<button
										key={i}
										onClick={() => setSelectedSlot(i === selectedSlot ? null : i)}
										className={`px-2 py-6 rounded-xl border text-center text-xs transition-all space-y-6 ${
											selectedSlot === i
												? "border-[#3E50F7] bg-[#EFF2FF] text-[#3E50F7] font-semibold"
												: "border-gray-200 text-gray-600 hover:border-gray-300"
										}`}
									>
										<p className="text-colors-primary text-md font-semibold">{slot.date}</p>
										<p className="text-sm text-colors-muted leading-tight">{slot.time}</p>
									</button>
								))}
							</div>
						</div>
					</Flex>
				</DashboardCard>
				{/* Portfolio */}
				<DashboardCard>
					<h3 className="text-base font-semibold text-colors-primary mb-4">Portfolio</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
						{portfolioColors.map((gradient, i) => (
							<div
								key={i}
								className={`rounded-xl overflow-hidden flex items-end p-3 h-60 md:h-96 cursor-pointer hover:opacity-90 transition-opacity relative`}
							>
								<Image src={Portfolio} alt={"Basement"} fill
											 className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
								<div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
									<Flex direction="row" gap="lg" justify="between">
										<div className="">
											<h3 className="text-white font-semibold text-lg md:text-xl mb-2">
												Basement Renovation
											</h3>
											{/*<div className="flex items-center justify-start">*/}
											<span className="text-white/80 text-xs sm:text-sm mr-1">
                      Master Project
										</span>
											{/*</div>*/}
										</div>
										<div className="">
											<Button variant="none" href="/">
												<DownloadIcon size="2xl" className="text-gray-400"/>
											</Button>

										</div>

									</Flex>

								</div>
							</div>
						))}
					</div>
					<div className="text-center">
						<Button variant="outline" className="w-fit mt-3 text-sm text-[#3E50F7] font-medium hover:underline">
							Show More
						</Button>
					</div>

				</DashboardCard>
				{/* Reviews */}
				<DashboardCard>
					<h3 className="text-base font-semibold text-colors-primary mb-4">Reviews</h3>
					<div className="flex gap-8 flex-wrap mb-6">
						{/* Overall Rating */}
						<div className="text-center space-y-4 border border-gray-200 rounded-lg py-6 px-2 bg-gray-100">
							<p className="text-4xl font-bold text-colors-primary">4.8</p>
							<Flex justify="center" gap="xs" className="my-1">
								{Array.from({length: 5}).map((_, i) => (
									<StarFilledIcon key={i} size="lg" className={i < 4 ? "text-yellow-400" : "text-yellow-300"}/>
								))}
							</Flex>
							<p className="text-xs text-gray-400">2 weeks ago</p>
						</div>

						{/* Rating Bars */}
						<div className="flex-1 min-w-[200px] space-y-4">
							{ratingBars.map(({label, pct}) => (
								<Flex key={label} align="center" gap="sm">
									<span className="text-xs text-colors-primary w-14 shrink-0">{label}</span>
									<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
										<div
											className="h-full bg-yellow-400 rounded-full"
											style={{width: `${pct}%`}}
										/>
									</div>
									<span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
								</Flex>
							))}
						</div>
					</div>

					{/* Review Tabs */}
					<div className="overflow-x-auto pb-1 mb-4">
						<Flex gap="lg" className="min-w-max">
						{["Highest", "Best Score", "Lowest Score"].map((t, i) => (
							<Button key={i} size="md" variant={`${i === 0 ? "primary" : "secondary"}`}>
								{t}
							</Button>
						))}
						</Flex>
					</div>

					{/* Review Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
						{reviews.map((r, i) => (
							<div key={i} className="border border-gray-200 rounded-xl p-4">
								<Flex align="center" gap="sm" justify="between" className="mb-2">
									<div
										className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3E50F7] to-[#0062FF] flex items-center justify-center text-white text-xs font-bold shrink-0">
										<Image src={LittleIcon} alt={r.name}/>
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-md font-semibold text-colors-primary truncate">{r.name}</p>
										<p className="text-sm text-colors-muted">{r.time}</p>
									</div>
									<Flex gap="xs" className="mb-2">
										{Array.from({length: r.rating}).map((_, j) => (
											<StarFilledIcon key={j} size="md" className="text-yellow-400"/>
										))}
									</Flex>
								</Flex>

								<p className="text-md text-colors-muted leading-relaxed mb-3">{r.text}</p>
								<Flex gap="md" wrap={true}>
									{r.tags.map((tag) => (
										<span key={tag}
													className="px-4 py-2 bg-blue-100 text-blue-500 text-sm border border-blue-500 rounded-md">
                      {tag}
                    </span>
									))}
								</Flex>
							</div>
						))}
					</div>
					<div className="text-center">
						<button className="mt-4 px-4 py-2 bg-blue-100 text-blue-500 text-sm border border-blue-500 rounded-md">
							Show More
						</button>
					</div>

				</DashboardCard>
			</div>

			{/* Bottom Sticky Bar */}
			{(selected || slot) && (
				<div className="fixed bottom-16 lg:bottom-0 left-0 right-0 lg:left-[220px] bg-white border-t border-gray-200 px-3 md:px-6 py-3 md:py-4 z-40">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
						<div className="flex flex-wrap gap-4 md:gap-6">
							{selected && (
								<div className="flex flex-col gap-1">
									<span className="text-colors-muted text-xs">Selected Service:</span>
									<span className="font-semibold text-sm text-colors-primary">{selected.name}</span>
								</div>
							)}
							{slot && (
								<div className="flex flex-col gap-1">
									<span className="text-colors-muted text-xs">Date/Time:</span>
									<span className="font-semibold text-sm text-colors-primary">{slot.date}, {slot.time}</span>
								</div>
							)}
							{selected && (
								<div className="flex flex-col gap-1">
									<span className="text-colors-muted text-xs">Estimated Price:</span>
									<span className="font-bold text-xl text-[#3E50F7]">{selected.price}</span>
								</div>
							)}
						</div>
						<Button variant="primary" size="md" href={`/dashboard/customer/services/${params.id}/book`}
							className="gap-2 w-full sm:w-auto shrink-0">
							Continue to Booking
							<ArrowRightIcon size="sm"/>
						</Button>
					</div>
				</div>
			)}

			{/* Get A Quote Modal */}
			{showQuote && (
				<div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
					<div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
						<Flex justify="between" align="center" className="mb-4">
							<h2 className="text-lg font-bold text-colors-primary">Get A Quote</h2>
							<button onClick={() => setShowQuote(false)} className="p-1.5 rounded-lg hover:bg-gray-100 transition">
								<XIcon size="sm" className="text-gray-500"/>
							</button>
						</Flex>
						<div className="mb-4">
							<p className="text-sm text-gray-500 mb-2">Write your description</p>
							<Textarea
								placeholder="Your description here..."
								rows={4}
								value={quoteText}
								onChange={(e) => setQuoteText(e.target.value)}
							/>
						</div>
						<Button variant="primary" className="w-full gap-2" onClick={() => setShowQuote(false)}>
							<SendIcon size="sm"/>
							Send
						</Button>
					</div>
				</div>
			)}


		</div>
	);
}
