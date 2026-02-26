"use client";

import {useState} from "react";
import Image from "next/image";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PageHeader from "@/components/dashboard/PageHeader";
import {Checkbox, FormGroup, Input, Label, Select} from "@/components/form";
import {PlusIcon, LockIcon, CameraIcon, XIcon, EditIcon} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import avatar from "@/assets/dashboard/bigProfile.png";

interface Address {
	id: number;
	tag: string;
	address: string;
}

const initialAddresses: Address[] = [
	{id: 1, tag: "Home", address: "1245 Jasper Ave, Edmonton, AB, Canada"},
	{id: 2, tag: "Company", address: "1245 Jasper Ave, Edmonton, AB, Canada"},
];

const tagColors: Record<string, string> = {
	Home: "text-[#3E50F7] border-[#3E50F7] bg-[#EFF2FF]",
	Company: "text-[#0B9E58] border-[#0B9E58] bg-[#DCFCE7]",
};

export default function CustomerProfilePage() {
	const [emailNotif, setEmailNotif] = useState(true);
	const [smsNotif, setSmsNotif] = useState(false);
	const [addresses, setAddresses] = useState(initialAddresses);

	const removeAddress = (id: number) => {
		setAddresses((prev) => prev.filter((a) => a.id !== id));
	};

	return (
		<div>
			<PageHeader title="Profile & Settings"/>

			<div className="p-3 md:p-6 space-y-6">
				{/* Profile Information */}
				<DashboardCard>
					<h2 className="text-lg font-semibold text-colors-primary text-center mb-6">
						Profile Information
					</h2>

					<hr className="my-6"/>

					{/* Avatar + Name */}
					<Flex align="center" gap="md" className="mb-6">
						<div className="relative shrink-0">
							<Image
								src={avatar}
								alt="Profile"
								width={115}
								height={115}
								className="rounded-full object-cover"
							/>
							{/*<button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#3E50F7] flex items-center justify-center hover:opacity-90 transition-opacity">*/}
							{/*  <CameraIcon size="sm" className="text-white" />*/}
							{/*</button>*/}
						</div>
						<div className="space-y-6">
							<p className="text-lg font-semibold text-colors-primary">Michael Johnson</p>
							<p className="text-md text-colors-muted">Manage your personal information and preferences</p>
						</div>
					</Flex>

					{/* Form Fields */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<FormGroup>
							<Label htmlFor="fullName" textColor="text-gray-500">Full Name</Label>
							<Input id="fullName" defaultValue="Michael Johnson"/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="email" textColor="text-gray-500">Email Address</Label>
							<Input id="email" type="email" defaultValue="michael@brightbuild.com"/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="phone" textColor="text-gray-500">Phone Number</Label>
							<Input id="phone" type="tel" defaultValue="+1 (780) 123-4567"/>
						</FormGroup>
					</div>

					<Flex justify="end" className="mt-4">
						<Button variant="primary" size="md">Save Changes</Button>
					</Flex>
				</DashboardCard>

				{/* Preferences */}
				<DashboardCard>
					<h2 className="text-lg font-semibold text-colors-primary mb-6">Preferences</h2>
					<hr className="my-6"/>
					<div className="mb-5">
						<p className="text-lg font-medium text-colors-primary mb-3">Notification Settings</p>
						<div className="space-y-3">
							<Flex align="center" gap="sm">
								<Checkbox id="email_notification" name="email_notification"
													label="Email Notifications"
													textColor="text-colors-primary"
								/>
							</Flex>
							<Flex align="center" gap="sm">
								<Checkbox id="sms_notification" name="sms_notification"
													label="SMS Notifications"
													textColor="text-colors-primary"
								/>
							</Flex>
						</div>
					</div>

					<FormGroup className="max-w-xs">
						<Label textColor="text-gray-500">Language</Label>
						<Select
							options={[
								{value: "en", label: "English"},
								{value: "fr", label: "French"},
								{value: "es", label: "Spanish"},
							]}
							defaultValue="en"
						/>
					</FormGroup>
				</DashboardCard>

				{/* Saved Addresses */}
				<DashboardCard>
					<Flex justify="between" align="center" className="mb-5">
						<h2 className="text-lg font-semibold text-colors-primary mb-6">Saved Addresses</h2>
						<hr className="my-6"/>
						<Button variant="primary" size="lg" className="gap-1.5">
							<PlusIcon size={14} className="text-white"/>
							Add New Address
						</Button>
					</Flex>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
						{addresses.map((addr) => (
							<div key={addr.id} className="border border-gray-200 rounded-xl p-4 space-y-6">
                <span
									className={`inline-block p-2 text-xs font-medium rounded border ${
										tagColors[addr.tag] ?? "text-gray-500 border-gray-200 bg-gray-50"
									}`}
								>
                  {addr.tag}
                </span>
								<p className="text-md text-colors-primary">{addr.address}</p>
								<div className="grid grid-cols-2 gap-3">
									<button
										className="flex items-center justify-center gap-1.5 h-9 rounded-lg border border-[#3E50F7] text-[#3E50F7] text-sm font-medium bg-[#EFF2FF] hover:bg-blue-100 transition-colors">
										<EditIcon size="sm"  />
										Edit
									</button>
									<button
										onClick={() => removeAddress(addr.id)}
										className="flex items-center justify-center gap-1.5 h-9 rounded-lg border border-red-200 text-red-500 text-sm font-medium bg-red-50 hover:bg-red-100 transition-colors"
									>
										<XIcon size="sm"/>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
				</DashboardCard>

				{/* Security */}
				<DashboardCard>
					<Flex justify="between" align="center">
						<div>
							<h2 className="text-lg font-semibold text-colors-primary mb-4">Saved Addresses</h2>
							<p className="text-sm text-gray-500">
								To keep your account secure, change your password regularly.
							</p>
						</div>
						<Button variant="primary" size="md" className="gap-2 shrink-0 ml-4">
							<LockIcon size="sm" className="text-white"/>
							Change Password
						</Button>
					</Flex>
				</DashboardCard>
			</div>
		</div>
	);
}
