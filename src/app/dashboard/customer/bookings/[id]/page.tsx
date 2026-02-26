"use client";

import {useState, use} from "react";
import Link from "next/link";
import DashboardCard from "@/components/dashboard/DashboardCard";
import BookingTimeline from "@/components/dashboard/BookingTimeline";
import RescheduleModal from "@/components/dashboard/RescheduleModal";
import {
	ChevronRightIcon,
	ClockIcon,
	LocationIcon,
	PhoneIcon,
	EmailIcon,
	StarFilledIcon,
	CalenderNewIcon,
	CheckCircleIcon,
	ClipboardIcon,
	DocumentIcon,
	XIcon, OpenNewTabIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import Image from "next/image";
import BigProfilePicture from "@/assets/dashboard/bigProfile.png";

const timelineSteps = [
	{label: "Requested", date: "March 15, 2025", status: "completed" as const},
	{label: "Date & Time", date: "March 16, 2025", status: "completed" as const},
	{label: "In Progress", date: "March 18, 2025", status: "current" as const},
	{label: "Completed", date: "Estimated: April 15, 2025", status: "pending" as const},
];

const statusUpdates = [
	{
		title: "Start Date Confirmed",
		description: "Professional has confirmed they will start the work on March 18, 2025 at 10:00 AM.",
		time: "Today, 10:30 AM",
		highlighted: true,
	},
	{
		title: "Request Accepted",
		description: "Professional has accepted your request and confirmed the proposed date.",
		time: "Yesterday, 2:15 PM",
		highlighted: false,
	},
	{
		title: "Request Sent",
		description: "Your booking request has been sent to the professional. Awaiting confirmation.",
		time: "March 15, 2025, 11:20 AM",
		highlighted: false,
	},
];

export default function BookingDetailsPage({params}: { params: Promise<{ id: string }> }) {
	use(params);
	const [showReschedule, setShowReschedule] = useState(false);

	return (
		<div>
			{/* Breadcrumb */}
			<div className="px-3 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4 bg-white border-b border-gray-200">
				<Flex align="center" gap="xs">
					<Link href="/dashboard/customer/bookings"
								className="text-sm text-colors-muted hover:text-[#3E50F7] transition-colors">
						My Bookings
					</Link>
					<ChevronRightIcon size="sm" className="text-gray-400"/>
					<span className="text-sm font-semibold text-colors-primary">Booking Details</span>
				</Flex>
			</div>

			<DashboardCard className="m-3 md:m-6">
				<div className="space-y-6">
					{/* Booking Overview */}
					<DashboardCard>
						<Flex direction="col" lgDirection="row" justify="between" align="start" className="mb-5">
							<div>
								<h2 className="text-xl font-bold text-colors-primary mb-3">Basement Development</h2>
								<p className="text-sm text-colors-muted w-full lg:max-w-2xl">
									Complete residential basement renovation including drywall, flooring, lighting and electrical system
								</p>
							</div>
							<span
								className="flex items-center gap-1.5 px-3 py-1.5 bg-[#DCFCE7] border border-[#0B9E58] text-[#0B9E58] text-sm font-semibold rounded-lg shrink-0 mt-2 lg:mt-0 ml-0 lg:ml-4">
              	<CheckCircleIcon size="md"/>
              Confirmed
            </span>
						</Flex>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:max-w-6xl">
							{[
								{label: "Booking ID", value: "#INS-2025-01842", Icon: ClipboardIcon},
								{label: "Estimated Duration", value: "4–6 weeks", Icon: ClockIcon},
								{label: "Created Date", value: "March 15, 2025", Icon: CalenderNewIcon},
								{label: "Warranty", value: "24 months", Icon: DocumentIcon},
							].map(({label, value, Icon}) => (
								<Flex key={label} align="center" gap="md">
									<div className="p-1 border border-gray-200 rounded-lg">
										<div
											className="w-9 h-9 rounded-lg bg-[#3E6FF3] flex items-center justify-center shrink-0 shadow-md">
											<Icon size="md" className="text-white"/>
										</div>
									</div>

									<div className="min-w-0 space-y-2">
										<p className="text-md text-colors-primary leading-tight">{label}</p>
										<p className="text-sm font-light text-colors-muted leading-tight mt-0.5 truncate">{value}</p>
									</div>
								</Flex>
							))}
						</div>
					</DashboardCard>

					{/* Booking Timeline */}
					<DashboardCard>
						<h3 className="text-xl font-semibold text-colors-primary mb-6">Booking Timeline</h3>
						<BookingTimeline steps={timelineSteps}/>
					</DashboardCard>

					{/* Status Updates */}
					<DashboardCard>
						<h3 className="text-xl font-semibold text-colors-primary mb-4">Status Updates</h3>
						<div className="space-y-3">
							{statusUpdates.map((u, i) => (
								<div
									key={i}
									className={`p-4 md:p-8 rounded-xl border ${
										u.highlighted ? "bg-blue-100 border-blue-600" : "bg-white border-gray-100"
									}`}
								>
									<Flex align="start" gap="sm">
										<div className="p-1 border border-gray-200 rounded-lg">
											<div
												className="w-8 h-8 shrink-0 rounded-lg bg-[#3E6FF3] flex items-center justify-center shadow-md">
												<CalenderNewIcon size="sm" className="text-white"/>
											</div>
										</div>
										<div className="space-y-2">
											<p className="text-md font-semibold text-colors-primary">{u.title}</p>
											<p className="text-sm text-colors-muted">{u.description}</p>
											<p className="text-sm text-colors-muted">{u.time}</p>
										</div>
									</Flex>
								</div>
							))}
						</div>
					</DashboardCard>

					{/* Professional */}
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-4">
							<h3 className="text-xl font-semibold text-colors-primary">Professional</h3>
							<Button variant="none" className="bg-blue-100 border border-blue-600 rounded-lg text-blue-600"
											size="sm" href="/dashboard/customer/services/1">
								<OpenNewTabIcon size="sm" className="mr-2"/>
								View Profile
							</Button>
						</Flex>
						<div className="flex flex-col sm:flex-row flex-wrap gap-4">
							<div className="flex items-center gap-4">
								<div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0">
									<Image src={BigProfilePicture} alt={"Michael Johnson"} className="w-full h-full object-cover"/>
								</div>
								<Flex direction="col" align="start" gap="xs">
									<p className="font-bold text-colors-primary">Michael Johnson</p>
									<p className="text-sm text-colors-muted mb-1">Renovation Contractor</p>
									<Flex direction="row" align="center" gap="xs">
										<span className="text-xs text-colors-muted">(45 reviews)</span>
										<span className="text-sm font-bold text-colors-primary ml-1">4.8</span>
										{Array.from({length: 5}).map((_, i) => (
											<StarFilledIcon key={i} size="md" className="text-[#FFC65C]"/>
										))}
									</Flex>
									<Flex direction="row" align="start" gap="xs" className="mt-1">
										<LocationIcon size="sm" className="text-colors-primary"/>
										<span className="text-xs text-colors-muted">Edmonton, AB</span>
									</Flex>
								</Flex>
							</div>
							<div className="space-y-4 sm:pl-4 sm:border-l sm:border-gray-200">
								<p className="text-sm font-semibold text-colors-primary mb-2">Contact Information</p>
								<Flex align="center" gap="xs" className="mb-1.5">
									<PhoneIcon size="sm" className="text-colors-primary"/>
									<span className="text-sm text-colors-muted">+1 (780) 123-4567</span>
								</Flex>
								<Flex align="center" gap="xs">
									<EmailIcon size="sm" className="text-colors-primary"/>
									<span className="text-sm text-colors-muted">michael@brightbuild.com</span>
								</Flex>
							</div>
						</div>
					</DashboardCard>

					{/* When & Where */}
					<DashboardCard>
						<h3 className="text-xl font-semibold text-colors-primary mb-4">When & Where</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
							<div>
								<Flex align="center" gap="md" className="mb-3">
									<CalenderNewIcon size="md" className="text-colors-primary"/>
									<span className="text-md text-colors-primary">Date & Time</span>
								</Flex>
								<p className="text-sm font-medium text-colors-muted ">March 18, 2025 || 10:00 AM</p>
							</div>
							<div>
								<Flex align="center" gap="md" className="mb-3">
									<LocationIcon size="md" className="text-colors-primary"/>
									<span className="text-md text-colors-primary">Service Address</span>
								</Flex>
								<p className="text-sm font-medium text-colors-muted">1245 Jasper Ave, Edmonton, AB | T5J 0K7</p>
							</div>
							<div>
								<Flex align="center" gap="md" className="mb-3">
									<ClipboardIcon size="md" className="text-colors-primary"/>
									<span className="text-md text-colors-primary">Property Type</span>
								</Flex>
								<p className="text-sm font-medium text-colors-muted">Residential House</p>
							</div>
							<div>
								<Flex align="center" gap="md" className="mb-3">
									<DocumentIcon size="md" className="text-colors-primary"/>
									<span className="text-md text-colors-primary">Additional Notes</span>
								</Flex>
								<p className="text-sm text-colors-muted">Basement is ~800 sq ft. Requires full insulation and LED
									lighting.</p>
							</div>
						</div>
					</DashboardCard>

					{/* Pricing */}
					<DashboardCard>
						<h3 className="text-xl font-semibold text-colors-primary mb-4">Pricing</h3>
						<Flex justify="between" align="center" className="flex-wrap gap-4">
							<Flex gap="2xl" className="flex-wrap">
              <span className="text-sm text-colors-muted">
                Service Cost: <span className="font-semibold text-colors-primary">$12,500</span>
              </span>
								<span className="text-sm text-colors-muted">
                Materials Cost: <span className="font-semibold text-colors-primary">$1,500</span>
              </span>
								<span className="text-sm text-colors-muted">
                Tax (5%): <span className="font-semibold text-colors-primary">$700</span>
              </span>
							</Flex>
							<Flex gap="md" className="flex-wrap" align="center">
								<p className="text-base font-medium text-colors-primary">Estimated Price:</p>
								<p className="text-3xl md:text-4xl font-bold text-[#3E50F7]">$14,500</p>
							</Flex>
						</Flex>
					</DashboardCard>

					{/* Actions */}
					<DashboardCard>
						<h3 className="text-xl font-semibold text-colors-primary mb-4">Actions</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<button
								onClick={() => setShowReschedule(true)}
								className="flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium rounded-lg bg-gray-200 text-colors-primary hover:bg-gray-300 transition-colors"
							>
								<CalenderNewIcon size="md" className="text-colors-muted"/>
								Reschedule
							</button>
							<button
								className="flex items-center justify-center gap-2 h-11 px-5 text-sm font-medium rounded-lg border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
								<XIcon size="md"/>
								Cancel Booking
							</button>
						</div>
					</DashboardCard>
				</div>
			</DashboardCard>


			{showReschedule && (
				<RescheduleModal
					onClose={() => setShowReschedule(false)}
					onReschedule={() => setShowReschedule(false)}
				/>
			)}
		</div>
	);
}
