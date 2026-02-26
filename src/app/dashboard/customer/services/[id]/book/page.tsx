"use client";

import {useState, use} from "react";
import Link from "next/link";
import {
	ChevronRightIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	StarFilledIcon,
	ClockIcon,
	CheckCircleIcon,
	LocationIcon,
	DollarSignIcon,
	CheckIcon, MessageIcon, PhoneIcon, BellIcon, NewMessagesIcon,
} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import BookingStepper from "@/components/dashboard/BookingStepper";
import DateTimePicker, {TimeSlot} from "@/components/dashboard/DateTimePicker";
import {FormGroup, Input, Label, Textarea} from "@/components/form";
import Image from "next/image";
import BigProfilePicture from "@/assets/dashboard/bigProfile.png";
import CardBankIcon from "../../../../../../components/icons/dashboard/Customer/CardBankIcon";
import EditIcon from "../../../../../../components/icons/dashboard/Customer/EditIcon";

const STEPS = [
	{label: "Choose Service"},
	{label: "Date & Time"},
	{label: "Address & Details"},
	{label: "Review & Confirm"},
];

const services = [
	{
		id: 1,
		name: "Basement Development",
		price: "$5,000",
		description: "Full basement renovation and finishing with high-quality materials and in compliance with building standards.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 2,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 3,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 4,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 5,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
	{
		id: 6,
		name: "Bathroom Renovation",
		price: "$5,000",
		description: "Complete replacement of tiles, sanitary equipment and plumbing systems with modern and functional design.",
		duration: "4–6 weeks",
		warranty: "2-year warranty",
	},
];

const timeSlots: TimeSlot[] = [
	{date: "June 5", time: "9:00 AM – 12:00 PM"},
	{date: "June 5", time: "1:00 PM – 4:00 PM"},
	{date: "June 6", time: "9:00 AM – 12:00 PM"},
	{date: "June 6", time: "1:00 PM – 4:00 PM"},
	{date: "June 7", time: "9:00 AM – 12:00 PM"},
	{date: "June 7", time: "1:00 PM – 4:00 PM"},
	{date: "June 8", time: "9:00 AM – 12:00 PM"},
	{date: "June 8", time: "1:00 PM – 4:00 PM"},
	{date: "June 9", time: "9:00 AM – 12:00 PM"},
];

export default function BookServicePage({params}: { params: Promise<{ id: string }> }) {
	const {id} = use(params);
	const [step, setStep] = useState(0);
	const [selectedService, setSelectedService] = useState<number | null>(0);
	const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const [selectedDay, setSelectedDay] = useState(23);

	const next = () => setStep((s) => Math.min(s + 1, 3));
	const prev = () => setStep((s) => Math.max(s - 1, 0));

	return (
		<div>
			{/* Breadcrumb */}
			<div className="px-3 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4 bg-white border-b border-gray-200">
				<Flex align="center" gap="xs">
					<Link href="/dashboard/customer/services"
								className="text-sm text-colors-muted hover:text-[#3E50F7] transition-colors">
						Services
					</Link>
					<ChevronRightIcon size="sm" className="text-gray-400"/>
					<Link href={`/dashboard/customer/services/${id}`}
								className="text-sm text-colors-muted hover:text-[#3E50F7] transition-colors">
						Professional Profile
					</Link>
					<ChevronRightIcon size="sm" className="text-gray-400"/>
					<span className="text-sm font-semibold text-[#3E50F7]">Book a Service</span>
				</Flex>
			</div>

			<div className="p-3 md:p-6">
				<DashboardCard>
					<h2 className="text-base font-semibold text-colors-primary mb-6">Book a Service</h2>

					{/* Stepper */}
					<div className="mb-8">
						<BookingStepper steps={STEPS} currentStep={step}/>
					</div>

					{/* ─── Step 1: Choose Service ─── */}
					{step === 0 && (
						<div>
							<h3 className="text-base font-semibold text-colors-primary mb-4">Choose a Service</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								{services.map((s, i) => (
									<div
										key={s.id}
										onClick={() => setSelectedService(i)}
										className={`space-y-5 border-2 rounded-xl p-4 transition-all ${
											selectedService === i ? "border-[#3E50F7] bg-[#EFF2FF]" : "border-gray-100"
										}`}
									>
										<h4 className="text-lg font-semibold text-colors-primary ">{s.name}</h4>
										<Flex align="center" gap="xs" className="">
											<DollarSignIcon size="md" className="text-colors-primary"/>
											<span className="text-sm text-colors-muted">From:</span>
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
							<Button variant="primary" size="md" onClick={next} className="gap-2">
								Continue
								<ArrowRightIcon size="sm"/>
							</Button>
						</div>
					)}

					{/* ─── Step 2: Date & Time ─── */}
					{step === 1 && (
						<div>
							<h3 className="text-base font-semibold text-colors-primary mb-5">Choose Date & Time</h3>

							<DateTimePicker
								month={month}
								year={year}
								selectedDay={selectedDay}
								selectedSlot={selectedSlot}
								timeSlots={timeSlots}
								onDayChange={setSelectedDay}
								onSlotChange={setSelectedSlot}
								onMonthYearChange={(m, y) => {
									setMonth(m);
									setYear(y);
								}}
							/>

							<Flex gap="sm" className="mt-6">
								<button onClick={prev}
												className="flex items-center gap-2 h-11 px-5 rounded-lg border border-gray-200 text-sm font-medium text-colors-primary hover:bg-gray-50 transition-colors">
									<ChevronLeftIcon size="sm"/>
									Previous
								</button>
								<Button variant="primary" size="md" onClick={next} className="gap-2">
									Continue
									<ArrowRightIcon size="sm"/>
								</Button>
							</Flex>
						</div>
					)}

					{/* ─── Step 3: Address & Details ─── */}
					{step === 2 && (
						<div>
							<h3 className="text-base font-semibold text-colors-primary mb-5">Address & Details</h3>
							<div className="space-y-4 max-w-2xl">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<FormGroup>
										<Label htmlFor="street" textColor="text-colors-muted">Street Address</Label>
										<Input id="street" placeholder="123 Main Street, Unit 4"/>
									</FormGroup>
									<FormGroup>
										<Label htmlFor="postal" textColor="text-colors-muted">Postal Code</Label>
										<Input id="postal" placeholder="T5J 0K7"/>
									</FormGroup>
								</div>
								<FormGroup>
									<Label htmlFor="bookPhone" textColor="text-colors-muted">Phone Number</Label>
									<Input id="bookPhone" type="tel" placeholder="+1 (780) 987-6543"/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="notes" textColor="text-colors-muted">Additional Notes</Label>
									<Textarea
										id="notes"
										rows={3}
										placeholder="Describe any special requirements, property details, etc."
									/>
								</FormGroup>
								<FormGroup>
									<Label htmlFor="access" textColor="text-colors-muted">Access Instructions</Label>
									<Input id="access" placeholder="Entry through building parking, Door code: #1234"/>
								</FormGroup>
							</div>

							<Flex gap="sm" className="mt-6">
								<button onClick={prev}
												className="flex items-center gap-2 h-11 px-5 rounded-lg border border-gray-200 text-sm font-medium text-colors-primary hover:bg-gray-50 transition-colors">
									<ChevronLeftIcon size="sm"/>
									Previous
								</button>
								<Button variant="primary" size="md" onClick={next} className="gap-2">
									Continue
									<ArrowRightIcon size="sm"/>
								</Button>
							</Flex>
						</div>
					)}

					{/* ─── Step 4: Review & Confirm ─── */}
					{step === 3 && (
						<div>
							<h3 className="text-base font-semibold text-colors-primary mb-1">Review & Confirm</h3>
							<p className="text-sm text-colors-muted mb-5">Review and confirm your booking details</p>

							<div className="space-y-4">
								{/* Professional */}
								<DashboardCard>
									<Flex align="center" gap="md" justify="between" className="flex-wrap gap-y-4">
										<Flex align="center" gap="md" direction="col" mdDirection="row">
											<Flex gap="sm" direction="col" justify="center" align="center"
														className="w-28 h-28 rounded-full text-white font-bold text-2xl shrink-0">
												<Image src={BigProfilePicture} alt={"Michael Johnson"}/>
											</Flex>
											<Flex>
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

										</Flex>
									</Flex>
								</DashboardCard>

								{/* Service */}
								<DashboardCard className="space-y-6">
									<p className="text-sm font-semibold text-colors-primary mb-2">Service</p>
									<p className="text-sm text-colors-muted mb-3">
										Selected Service:
										<br className="md:hidden"/>
										<span className="font-semibold text-colors-primary md:ml-4">Full Basement Development</span>{" "}
										<span className="text-gray-400">(Renovation & Development)</span>
									</p>
									<div className="space-y-6 bg-gray-50 px-4 py-6 rounded-lg border border-gray-200">
										{[
											{label: "Estimated Duration", value: "4–6 weeks"},
											{label: "Warranty", value: "24 months"},
											{label: "Materials Supply", value: "Supplied by Professional"},
											{
												label: "Description",
												value: "Complete basement renovation and finishing including flooring, walls, lighting and electrical system"
											},
										].map(({label, value}) => (
											<Flex key={label} gap="lg" direction="col" mdDirection="row">
												<span className="text-sm text-colors-muted w-36 shrink-0">{label}</span>
												<span className="text-sm font-semibold text-colors-primary">{value}</span>
											</Flex>
										))}
									</div>
								</DashboardCard>

								{/* Date & Time */}
								<DashboardCard className="space-y-6">
									<p className="text-sm font-semibold text-colors-primary mb-2">Date & Time</p>
									<Flex gap="lg" className="flex-wrap md:items-center" align="start" justify="start" direction="col" mdDirection="row">
                    <span className="text-sm text-colors-primary">
                      Date: <span className="text-md font-semibold ml-2">June 5, 2024
											<span className="text-sm text-colors-muted ml-2">(Thursday)</span></span>
                    </span>
										<span className="text-sm text-colors-primary">
                      Time: <span className="text-md font-semibold ml-2">1:00 PM – 4:00 PM
											<span className="text-sm text-colors-muted ml-2">Afternoon (3 hours)</span></span>
                    </span>
									</Flex>
									<Flex gap="xs" className="flex-wrap md:items-center mt-2" align="start" justify="start" direction="col" mdDirection="row">
										<span className="mr-2 text-sm text-colors-muted">Flexibility:</span>
										<Flex direction="row" gap="sm">
											<CheckCircleIcon size="md" className="text-[#00A778]"/>
											<span className="text-md font-semibold text-[#00A778] mr-2">Selected time is confirmed</span>
										</Flex>
										<span className="text-md text-gray-400">Professional has confirmed availability at this time</span>
									</Flex>
								</DashboardCard>

								{/* Address & Details */}
								<DashboardCard className="space-y-6">
									<p className="text-sm font-semibold text-colors-primary mb-3">Address & Details</p>
									<div className="flex flex-col md:flex-row gap-4">
										<div className="flex-1 space-y-4">
											<p className="text-md text-colors-muted font-medium">Job Location Address</p>
											<Flex align="center" gap="xs">
												<LocationIcon size="sm" className="text-gray-400"/>
												<span className="text-xs text-colors-primary">123 Main Street, Unit 4</span>
											</Flex>
											<Flex align="center" gap="xs">
												<MessageIcon size="sm" className="text-gray-400"/>
												<span className="text-xs text-colors-primary">T5J 0K7</span>
											</Flex>
											<Flex align="center" gap="xs">
												<PhoneIcon size="sm" className="text-gray-400"/>
												<span className="text-xs text-colors-primary">+1 (780) 987-6543</span>
											</Flex>
										</div>
										<div className="flex-[2] space-y-6">
											<p className="text-md text-colors-muted font-medium">Additional Notes</p>
											<p
												className="text-sm text-colors-muted leading-relaxed bg-gray-50 border border-gray-100 rounded-lg p-4">
												Our basement is approximately 800 sq ft and requires full insulation, drywall installation, and
												laminate flooring.
											</p>
										</div>
										<div className="flex-1 space-y-6">
											<p className="text-md text-colors-muted font-medium">Access</p>
											<p className="text-md font-medium text-colors-primary">Entry through building parking</p>
											<p className="text-md font-medium text-colors-primary">Door code: 1234#</p>
										</div>
									</div>
								</DashboardCard>

								{/* Price Summary */}
								<DashboardCard className="space-y-6">
									<p className="text-sm font-semibold text-colors-primary mb-3">Price Summary</p>
									<Flex direction="col" mdDirection="row" align="start" justify="start" gap="2xl">
										<div className="flex-1 space-y-6 w-full md:w-fit">
											<p className="text-md text-colors-primary">Price Details</p>
											<div className="space-y-6 p-4 bg-gray-50 border border-gray-100 rounded-lg">
												{[
													{label: "Base Service Cost", value: "$10,500"},
													{label: "Materials Cost", value: "$1,200"},
													{label: "Tax (5%)", value: "$585"},
													{label: "Platform Fee", value: "$295"},
												].map(({label, value}) => (
													<Flex key={label} justify="between" align="center">
														<span className="text-sm text-colors-muted">{label}</span>
														<span className="text-sm font-medium text-colors-primary">{value}</span>
													</Flex>
												))}
												<div className="border-t border-gray-100 pt-6 mt-6">
													<Flex justify="between" align="center">
														<span className="text-sm font-semibold text-colors-primary">Total</span>
														<span className="text-2xl font-bold text-colors-primary">$12,580</span>
													</Flex>
												</div>
											</div>
										</div>
										<div className="flex-1 space-y-6 w-full md:w-fit">
											<p className="text-md text-colors-primary">Job Location Address</p>
											<Flex align="center" gap="xs" className="mb-1">
												<CardBankIcon size="lg" className="mr-2"/>
												<span className="text-md font-semibold text-colors-primary">Credit Card •••• 4567</span>
											</Flex>
											<p className="text-sm text-colors-muted">Payment will be processed after job completion</p>
										</div>
										<div className="flex-1 space-y-6 w-full md:w-fit">
											<p className="text-md text-colors-primary">Cancellation Policy</p>
											<p className="text-md font-semibold text-[#00A778]">Free up to 24 hours before appointment</p>
											<p className="text-sm text-colors-muted">50% service fee after that</p>
										</div>
									</Flex>
								</DashboardCard>
							</div>

							{/* Action Buttons */}
							<Flex gap="sm" className="mt-6" >
								<Button
									variant="outline"
									onClick={prev}
									className="flex items-center justify-center gap-2 flex-1 w-full md:w-fit">
									<EditIcon size="md"/>
									Edit Information
								</Button>
								<Button
									variant="primary"
									className="flex items-center justify-center gap-2 flex-1 w-full md:w-fit">
									<CheckIcon size="lg"/>
									Confirm & Book Now
								</Button>
							</Flex>
						</div>
					)}
				</DashboardCard>
			</div>
		</div>
	);
}
