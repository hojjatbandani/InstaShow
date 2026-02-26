"use client";

import {useState} from "react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";
import {
	PlusIcon,
	ClockIcon,
	DollarIcon,
	ArrowDownLeftIcon,
	WalletIcon,
	SparkleIcon,
	QuestionIcon,
	CardBankIcon,
} from "@/components/icons";
import PageHeader from "@/components/dashboard/PageHeader";

const presetAmounts = [25, 50, 100];

const transactions = [
	{
		type: "topup",
		title: "Wallet Top-up",
		detail: "Oct 24, 2024 • via Visa ••••4242",
		amount: "+$50.00",
		positive: true,
	},
	{
		type: "payment",
		title: "Booking Payment - Dr. Emily Chen",
		detail: "Oct 20, 2024 • Consultation",
		amount: "-$75.00",
		positive: false,
	},
	{
		type: "payment",
		title: "Booking Payment - Home Fixers Inc.",
		detail: "Oct 12, 2024 • Plumbing Service",
		amount: "-$120.00",
		positive: false,
	},
	{
		type: "topup",
		title: "Wallet Top-up",
		detail: "Oct 01, 2024 • via PayPal",
		amount: "+$200.00",
		positive: true,
	},
];

export default function WalletPage() {
	const [selectedPreset, setSelectedPreset] = useState(50);
	const [customAmount, setCustomAmount] = useState("50.00");
	const [selectedCard, setSelectedCard] = useState(0);
	const [autoReload, setAutoReload] = useState(true);

	const handlePreset = (amount: number) => {
		setSelectedPreset(amount);
		setCustomAmount(amount.toFixed(2));
	};

	const handleCustomAmount = (val: string) => {
		setCustomAmount(val);
		setSelectedPreset(0);
	};

	return (
		<div className="">
			<PageHeader title="My Wallet" subtitle="Charge your wallet to easily pay for bookings.">
				<button
					className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-colors-muted hover:bg-gray-50 transition-colors">
					<QuestionIcon size="sm"/>
					Help & Support
				</button>
			</PageHeader>

			{/* Two-column layout */}
			<div className="p-3 md:p-6">
				<div className="flex flex-col lg:flex-row gap-6 items-start">

					{/* ── Main content ── */}
					<div className="flex-1 min-w-0 space-y-6">

						{/* Balance Card */}
						<div className="relative bg-[#1C2033] rounded-2xl p-6 overflow-hidden">
							{/* Decorative circles */}
							<div className="absolute -right-12 -bottom-12 w-52 h-52 rounded-full bg-white/15"/>

							<Flex justify="between" align="start" className="mb-3 relative z-10">
								<p className="text-sm text-gray-400">Available Balance</p>
								<CardBankIcon size="lg" className="text-gray-400"/>
							</Flex>
							<p className="text-5xl font-bold text-white mb-8 relative z-10">$145.00</p>
							<Flex gap="sm" className="relative z-10">
								<button
									className="flex items-center gap-2 px-4 py-2 border border-white/25 bg-white hover:bg-white/70 text-colors-primary text-sm font-medium rounded-lg transition-all">
									<PlusIcon size="xl"/>
									Add Funds
								</button>
								<button
									className="flex items-center gap-2 px-4 py-2 border border-white/25 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all">
									<ClockIcon size="xl"/>
									History
								</button>
							</Flex>
						</div>

						{/* Top Up Wallet */}
						<DashboardCard>
							<h3 className="text-base font-semibold text-colors-primary mb-4">Top Up Wallet</h3>
							<div className="grid grid-cols-3 gap-3 mb-5">
								{presetAmounts.map((amount) => (
									<button
										key={amount}
										onClick={() => handlePreset(amount)}
										className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
											selectedPreset === amount
												? "bg-[#3E50F7] border-[#3E50F7] text-white"
												: "border-gray-200 text-colors-primary hover:border-[#3E50F7] hover:text-[#3E50F7]"
										}`}
									>
										${amount}.00
									</button>
								))}
							</div>

							<p className="text-sm text-colors-muted mb-2">Or enter custom amount</p>
							<Flex
								align="center"
								gap="xs"
								className="border border-gray-200 rounded-lg px-3 py-2.5 mb-4 focus-within:border-[#3E50F7] transition-colors"
							>
								<DollarIcon size="sm" className="text-colors-muted shrink-0"/>
								<input
									type="number"
									value={customAmount}
									onChange={(e) => handleCustomAmount(e.target.value)}
									className="flex-1 text-sm text-colors-primary outline-none bg-transparent"
									placeholder="0.00"
								/>
							</Flex>

							<Button variant="primary" className="w-full mb-3">
								Charge ${customAmount || "0.00"} Now
							</Button>
							<p className="text-xs text-colors-muted text-center">
								Secure payment via Stripe. Funds never expire.
							</p>
						</DashboardCard>

						{/* Recent Transactions */}
						<DashboardCard>
							<h3 className="text-base font-semibold text-colors-primary mb-2">Recent Transactions</h3>
							<div className="divide-y divide-gray-100">
								{transactions.map((tx, i) => (
									<Flex key={i} align="center" justify="between" className="py-4">
										<Flex align="center" gap="md">
											<div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
												tx.positive ? "bg-[#ECFDF5]" : "bg-gray-100"
											}`}>
												{tx.positive
													? <ArrowDownLeftIcon size="md" className="text-[#10B981]"/>
													: <WalletIcon size="md" className="text-gray-500"/>
												}
											</div>
											<div>
												<p className="text-sm font-semibold text-colors-primary">{tx.title}</p>
												<p className="text-xs text-colors-muted mt-0.5">{tx.detail}</p>
											</div>
										</Flex>
										<span className={`text-sm font-bold shrink-0 ml-4 ${
											tx.positive ? "text-[#10B981]" : "text-colors-primary"
										}`}>
										{tx.amount}
									</span>
									</Flex>
								))}
							</div>
						</DashboardCard>
					</div>

					{/* ── Sidebar ── */}
					<div className="w-full lg:w-80 shrink-0 space-y-6">

						{/* Payment Method */}
						<DashboardCard>
							<h3 className="text-base font-semibold text-colors-primary mb-4">Payment Method</h3>
							<div className="space-y-6">

								{/* Visa */}
								<button
									onClick={() => setSelectedCard(0)}
									className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
										selectedCard === 0
											? "bg-[#3E50F7] border-[#3E50F7]"
											: "border-gray-200 hover:border-gray-300"
									}`}
								>
									<Flex align="center" gap="sm">
										<div className="bg-white rounded px-2 py-1 shrink-0">
											<span className="text-xs font-black text-[#1A1F71] tracking-widest">VISA</span>
										</div>
										<div className="text-left">
											<p
												className={`text-sm font-semibold ${selectedCard === 0 ? "text-white" : "text-colors-primary"}`}>
												Visa •••• 4242
											</p>
											<p className={`text-xs ${selectedCard === 0 ? "text-blue-200" : "text-colors-muted"}`}>
												Expires 12/26
											</p>
										</div>
									</Flex>
									<div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
										selectedCard === 0 ? "border-white" : "border-gray-300"
									}`}>
										{selectedCard === 0 && <div className="w-2.5 h-2.5 rounded-full bg-white"/>}
									</div>
								</button>

								{/* Mastercard */}
								<button
									onClick={() => setSelectedCard(1)}
									className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
										selectedCard === 1
											? "bg-[#3E50F7] border-[#3E50F7]"
											: "border-gray-200 hover:border-gray-300"
									}`}
								>
									<Flex align="center" gap="sm">
										<div className="w-10 h-7 rounded flex items-center justify-center bg-gray-100 shrink-0">
											<div className="flex -space-x-2">
												<div className="w-4 h-4 rounded-full bg-red-500"/>
												<div className="w-4 h-4 rounded-full bg-yellow-400 opacity-90"/>
											</div>
										</div>
										<div className="text-left">
											<p
												className={`text-sm font-semibold ${selectedCard === 1 ? "text-white" : "text-colors-primary"}`}>
												Mastercard •••• 8890
											</p>
											<p className={`text-xs ${selectedCard === 1 ? "text-blue-200" : "text-colors-muted"}`}>
												Expires 09/25
											</p>
										</div>
									</Flex>
									<div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
										selectedCard === 1 ? "border-white" : "border-gray-300"
									}`}>
										{selectedCard === 1 && <div className="w-2.5 h-2.5 rounded-full bg-white"/>}
									</div>
								</button>

								{/* Add New Card */}
								<Button
									variant="outline"
									className="w-full flex items-center justify-center gap-2 py-3 text-sm text-colors-muted hover:text-colors-primary transition-colors border-dashed border-2">
									<PlusIcon size="sm"/>
									Add New Card
								</Button>

								{/* Auto-Reload */}
								<Flex justify="between" align="center" className="p-4 bg-gray-50 rounded-lg">
									<div>
										<p className="text-sm font-semibold text-colors-primary">Auto-Reload</p>
										<p className="text-xs text-colors-muted">When balance &lt; $10</p>
									</div>
									<button
										onClick={() => setAutoReload(!autoReload)}
										className={`relative w-11 h-6 rounded-full transition-colors ${
											autoReload ? "bg-[#3E50F7]" : "bg-gray-200"
										}`}
									>
										<div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${
											autoReload ? "left-5" : "left-0.5"
										}`}/>
									</button>
								</Flex>
							</div>
						</DashboardCard>

						{/* Earn Credits */}
						<div className="p-6 rounded-lg border bg-blue-50 !border-blue-100">
							<Flex align="center" gap="sm" className="mb-3">
								<Flex direction="row" align="center" justify="center" className="rounded-full bg-white w-10 h-10">
									<SparkleIcon size="md" className="text-[#1E40AF]"/>
								</Flex>
								<h3 className="text-base font-semibold text-[#1E40AF]">Earn Credits</h3>
							</Flex>
							<p className="text-sm text-[#1E40AF] mb-4">
								Invite friends to ClientPortal and get $20 in booking credits for every signup.
							</p>
							<button
								className="w-full py-2.5 rounded-lg bg-[#1E40AF] hover:bg-[#1E40AF] text-white text-sm font-semibold transition-colors">
								Invite Friends
							</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
