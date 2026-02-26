"use client";

import {useState} from "react";
import Image from "next/image";
import {Flex, Button} from "@/components/ui";
import {Input, Textarea, Label, FormGroup} from "@/components/form";
import DashboardCard from "@/components/dashboard/DashboardCard";
import {
	CameraIcon,
	PlusIcon,
	CheckCircleIcon,
	DocumentIcon,
	UploadIcon,
	MoreVerticalIcon,
} from "@/components/icons";
import avatar1 from "@/assets/dashboard/Alex.png";

interface Service {
	id: string;
	name: string;
	description: string;
	rate: string;
	enabled: boolean;
}

const initialServices: Service[] = [
	{
		id: "1",
		name: "Basement Development",
		description: "Renovation, framing, and finishing",
		rate: "$65/hr",
		enabled: true,
	},
	{
		id: "2",
		name: "Furniture Assembly",
		description: "IKEA, Wayfair, and custom furniture",
		rate: "$40/hr",
		enabled: true,
	},
	{
		id: "3",
		name: "Plumbing Minor Fixes",
		description: "Leaky faucets, pipe checks",
		rate: "$55/hr",
		enabled: false,
	},
];

const verificationDocs = [
	{
		label: "Government ID",
		status: "Verified on Jan 10",
		statusColor: "text-colors-muted",
		icon: "shield",
		bgColor: "bg-[#F3F4F6]"
	},
	{
		label: "Liability Insurance",
		status: "Expires Dec 2025",
		statusColor: "text-colors-muted",
		icon: "document",
		bgColor: "bg-[#F3F4F6]"
	},
	{
		label: "Upload Certificate",
		status: "Trade tickets, etc.",
		statusColor: "text-[#2B74FF]",
		icon: "upload",
		bgColor: "bg-white"
	},
];

export default function ProfilePage() {
	const [services, setServices] = useState(initialServices);

	const toggleService = (id: string) => {
		setServices((prev) =>
			prev.map((s) => (s.id === id ? {...s, enabled: !s.enabled} : s)),
		);
	};

	return (
		<div>
			<div className="p-6 border-b border-gray-200 bg-white">
				<h1 className="text-2xl font-bold text-colors-primary mb-1">
					Profile Management
				</h1>
				<p className="text-sm text-gray-500">
					Manage your public profile, services, and verification status.
				</p>
			</div>

			<Flex direction="col" lgDirection="row" gap="lg" className=" p-6">
				{/* Left Column — Profile Form */}
				<div className="w-full lg:w-1/2 xl:max-w-[370px]">
					<DashboardCard>
						{/* Avatar */}
						<Flex direction="col" align="center" className="mb-6">
							<div className="relative mb-3">
								<Image
									src={avatar1}
									alt="Profile"
									width={100}
									height={100}
									className="rounded-full shadow-md"
								/>
							</div>
							<button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-800 transition">
								<CameraIcon size="sm"/>
								Change Photo
							</button>
						</Flex>

						{/* Form Fields */}
						<div className="space-y-5">
							<FormGroup>
								<Label htmlFor="fullName" textColor="text-gray-500">Full Name</Label>
								<Input id="fullName" type="text" defaultValue="Alex Johnson" className="bg-[#F7F8FA]"/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email" textColor="text-gray-500">Email Address</Label>
								<Input id="email" type="email" defaultValue="alex.j@instafix.com" className="bg-[#F7F8FA]"/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="phone" textColor="text-gray-500">Phone Number</Label>
								<Input id="phone" type="tel" defaultValue="+1 (780) 555-0129" className="bg-[#F7F8FA]"/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="location" textColor="text-gray-500">Location</Label>
								<Input id="location" type="text" defaultValue="Edmonton, AB" className="bg-[#F7F8FA]"/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="bio" textColor="text-gray-500">Bio</Label>
								<Textarea
									id="bio"
									defaultValue="Expert handyman with 10+ years of experience in home repairs, plumbing basics, and furniture assembly. Dedicated to high-quality service."
									rows={4}
									className="bg-[#F7F8FA]"
								/>
							</FormGroup>

							<Button variant="primary" size="md" className="w-full">
								Save Changes
							</Button>
						</div>
					</DashboardCard>
				</div>

				{/* Right Column */}
				<div className="flex-1 space-y-6 w-full">
					{/* My Services */}
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-5">
							<h2 className="text-[20px] font-semibold text-colors-primary">
								My Services
							</h2>
							<Button variant="primary" size="sm" className="gap-1.5">
								<PlusIcon size={14} className="text-white"/>
								Add New Service
							</Button>
						</Flex>

						<div className="space-y-4">
							{services.map((service) => (
								<Flex
									key={service.id}
									justify="between"
									align="center"
									className={`p-4 border border-gray-100 rounded-lg ${service.enabled ? "bg-white" : "bg-[#F7F8FA]"}`}
								>
									<div>
										<h3
											className={`text-sm font-semibold  ${service.enabled ? "text-colors-primary" : "text-colors-muted"}`}>
											{service.name}
										</h3>
										<p className="text-xs text-colors-muted">
											{service.description}
										</p>
									</div>
									<Flex align="center" gap="md">
                    <span className="text-sm font-semibold text-colors-primary">
                      {service.rate}
                    </span>
										{/* Toggle */}
										<button
											onClick={() => toggleService(service.id)}
											className={`relative w-11 h-6 rounded-full transition-colors ${
												service.enabled ? "bg-[#3E50F7]" : "bg-gray-200"
											}`}
										>
                      <span
												className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
													service.enabled ? "translate-x-5" : "translate-x-0"
												}`}
											/>
										</button>
										<button className="text-colors-muted hover:text-gray-600">
											<MoreVerticalIcon size="sm"/>
										</button>
									</Flex>
								</Flex>
							))}
						</div>
					</DashboardCard>

					{/* Verification Documents */}
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-5">
							<h2 className="text-[20px] font-semibold text-colors-primary">
								Verification Documents
							</h2>
							<Flex
								align="center"
								gap="xs"
								className="px-3 py-1 bg-[#DEF7EC] rounded-full"
							>
								<CheckCircleIcon size={14} className="text-[#03543F]"/>
								<span className="text-xs font-medium text-[#03543F]">
                  Identity Verified
                </span>
							</Flex>
						</Flex>

						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
							{verificationDocs.map((doc) => (
								<div
									key={doc.label}
									className={`border-2 ${doc.icon === "upload" ? "border" : "border-dashed"} border-gray-200 
									rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg
                   hover:border-gray-300 transition cursor-pointer
                  ${doc.bgColor}`}
								>
									<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3">
										{doc.icon === "shield" && (
											<CheckCircleIcon size="2xl" className="text-colors-muted"/>
										)}
										{doc.icon === "document" && (
											<DocumentIcon size="2xl" className="text-colors-muted"/>
										)}
										{doc.icon === "upload" && (
											<UploadIcon size="2xl" className="text-[#2B74FF]"/>
										)}
									</div>
									<p className="text-sm font-medium text-colors-primary mb-1">
										{doc.label}
									</p>
									<p className={`text-xs ${doc.statusColor}`}>{doc.status}</p>
								</div>
							))}
						</div>
					</DashboardCard>
				</div>
			</Flex>
		</div>
	);
}
