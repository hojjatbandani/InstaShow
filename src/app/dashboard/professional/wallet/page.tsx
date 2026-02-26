"use client";

import {useState} from "react";
import {Flex, Button} from "@/components/ui";
import DashboardCard from "@/components/dashboard/DashboardCard";
import {
	WalletIcon,
	TrendingUpIcon,
	ClockIcon,
	DownloadIcon,
	PlusIcon,
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
} from "@/components/icons";

const transactions = [
	{
		id: "1",
		title: "Payment for Job #2049",
		date: "Oct 21, 2024 • 10:30 AM",
		amount: "+$320.00",
		amountColor: "text-green-500",
		status: "Completed" as const,
		type: "incoming" as const,
	},
	{
		id: "2",
		title: "Withdrawal to Bank Account",
		date: "Oct 18, 2024 • 04:15 PM",
		amount: "-$1,500.00",
		amountColor: "text-colors-primary",
		status: "Completed" as const,
		type: "outgoing" as const,
	},
	{
		id: "3",
		title: "Payment for Job #2042",
		date: "Oct 15, 2024 • 09:00 AM",
		amount: "+$180.00",
		amountColor: "text-green-500",
		status: "Completed" as const,
		type: "incoming" as const,
	},
	{
		id: "4",
		title: "Platform Fee (5%)",
		date: "Oct 15, 2024 • 09:00 AM",
		amount: "-$9.00",
		amountColor: "text-colors-primary",
		status: "Completed" as const,
		type: "fee" as const,
	},
	{
		id: "5",
		title: "Payment for Job #2055",
		date: "Today • 11:00 AM",
		amount: "+$450.00",
		amountColor: "text-green-500",
		status: "Pending" as const,
		type: "incoming" as const,
	},
];

const withdrawMethods = [
	{
		id: "visa",
		label: "Visa Debit **** 4288",
		sublabel: "Instant transfer (1% fee)",
		selected: true,
	},
	{
		id: "chase",
		label: "Chase Bank **** 9011",
		sublabel: "1-3 business days (Free)",
		selected: false,
	},
	{
		id: "paypal",
		label: "PayPal",
		sublabel: "Instant transfer (1.5% fee)",
		selected: false,
	},
];

const typeIcons = {
	incoming: ArrowDownLeftIcon,
	outgoing: ArrowUpRightIcon,
	fee: ClockIcon,
};

const typeColors = {
	incoming: "bg-green-50 text-green-500",
	outgoing: "bg-blue-50 text-blue-500",
	fee: "bg-amber-50 text-amber-500",
};

const statusStyles = {
	Completed: "text-green-500 bg-green-50",
	Pending: "text-amber-500 bg-amber-50",
};

export default function WalletPage() {
	const [selectedMethod, setSelectedMethod] = useState("visa");

	return (
		<div>
			{/* Header */}
			<Flex
				justify="between"
				align="center"
				className="p-6 border-b border-gray-200 bg-white"
			>
				<div>
					<h1 className="text-2xl font-bold text-colors-primary">
						Wallet & Earnings
					</h1>
					<p className="text-sm text-gray-500">
						Manage your income, withdrawals, and transaction history.
					</p>
				</div>
				<Flex gap="sm">
					<Button variant="outline" size="sm" className="gap-2">
						<DownloadIcon size={14}/>
						Download Report
					</Button>
					<Button variant="primary" size="sm" className="gap-2">
						<PlusIcon size={14} className="text-white"/>
						Add Funds
					</Button>
				</Flex>
			</Flex>

			{/* Balance Cards */}
			<div className="grid grid-cols-3 gap-4 p-6">
				{/* Available Balance — Featured */}
				<div
					className="bg-gradient-to-br from-[#3E50F7] to-[#2B3AD4] rounded-xl p-6 text-white relative overflow-hidden">
					<div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
						<WalletIcon size="md" className="text-white"/>
					</div>
					<p className="text-sm text-blue-200 mb-1">Available Balance</p>
					<p className="text-3xl font-bold mb-1">$4,250.00</p>
					<p className="text-sm text-blue-200 mb-4">Ready for withdrawal</p>
					<button
						className="w-[60%] py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition">
						Withdraw Funds
					</button>
				</div>

				{/* Total Earnings */}
				<DashboardCard>
					<Flex justify="between" align="start" className="mb-4">
						<p className="text-sm text-gray-500">Total Earnings</p>
						<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
							<TrendingUpIcon size="md" className="text-purple-500"/>
						</div>
					</Flex>
					<p className="text-3xl font-bold text-colors-primary mb-1">
						$12,840.50
					</p>
					<Flex align="center" gap="xs">
						<TrendingUpIcon size={14} className="text-green-500"/>
						<span className="text-sm text-green-500">15% vs last month</span>
					</Flex>
				</DashboardCard>

				{/* Pending Clearance */}
				<DashboardCard>
					<Flex justify="between" align="start" className="mb-4">
						<p className="text-sm text-gray-500">Pending Clearance</p>
						<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
							<ClockIcon size="md" className="text-purple-500"/>
						</div>
					</Flex>
					<p className="text-3xl font-bold text-colors-primary mb-1">$850.00</p>
					<p className="text-sm text-gray-400">Est. clear date: Oct 24</p>
				</DashboardCard>
			</div>

			{/* Bottom Section */}
			<div className="flex gap-6 p-6">
				{/* Recent Transactions */}
				<div className="flex-1">
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-6">
							<h2 className="text-[20px] font-semibold text-colors-primary">
								Recent Transactions
							</h2>
							<Button variant="outline" size="sm">
								View All
							</Button>
						</Flex>

						<div className="space-y-0">
							{transactions.map((tx) => {
								const Icon = typeIcons[tx.type];
								const colorClass = typeColors[tx.type];
								return (
									<Flex
										key={tx.id}
										justify="between"
										align="center"
										className="py-4 border-b border-gray-100 last:border-0"
									>
										<Flex align="center" gap="sm">
											<div
												className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}
											>
												<Icon size="sm"/>
											</div>
											<div>
												<p className="text-sm font-semibold text-colors-primary">
													{tx.title}
												</p>
												<p className="text-xs text-gray-400">{tx.date}</p>
											</div>
										</Flex>
										<Flex align="center" gap="md">
                      <span
												className={`text-sm font-semibold ${tx.amountColor}`}
											>
                        {tx.amount}
                      </span>
											<span
												className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[tx.status]}`}
											>
                        {tx.status}
                      </span>
										</Flex>
									</Flex>
								);
							})}
						</div>
					</DashboardCard>
				</div>

				{/* Withdraw To */}
				<div className="w-[320px] shrink-0">
					<DashboardCard>
						<Flex justify="between" align="center" className="mb-5">
							<h2 className="text-lg font-semibold text-colors-primary">
								Withdraw To
							</h2>
							<button
								className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition">
								<PlusIcon size="sm" className="text-gray-500"/>
							</button>
						</Flex>

						{/* Card Visual */}
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-white mb-5">
							<Flex justify="between" align="start" className="mb-8">
								<p className="text-sm font-medium">Debit Card</p>
								<div className="text-2xl">📶</div>
							</Flex>
							<p className="text-lg tracking-[0.2em] mb-4">
								•••• •••• •••• 4288
							</p>
							<Flex justify="between" align="end">
								<p className="text-sm text-gray-300">ALEX MORGAN</p>
								<p className="text-sm font-bold">VISA</p>
							</Flex>
						</div>

						{/* Payment Methods */}
						<div className="space-y-3">
							{withdrawMethods.map((method) => (
								<button
									key={method.id}
									onClick={() => setSelectedMethod(method.id)}
									className={`w-full flex items-center gap-3 p-3 rounded-xl border transition ${
										selectedMethod === method.id
											? "border-[#3E50F7] bg-blue-50/50"
											: "border-gray-200 hover:bg-gray-50"
									}`}
								>
									<div
										className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
											selectedMethod === method.id
												? "border-[#3E50F7]"
												: "border-gray-300"
										}`}
									>
										{selectedMethod === method.id && (
											<div className="w-2.5 h-2.5 rounded-full bg-[#3E50F7]"/>
										)}
									</div>
									<div className="flex-1 text-left">
										<p className="text-sm font-medium text-colors-primary">
											{method.label}
										</p>
										<p className="text-xs text-gray-400">{method.sublabel}</p>
									</div>
								</button>
							))}
						</div>

						<Button variant="primary" size="md" className="w-full mt-5">
							Proceed to Withdraw
						</Button>
					</DashboardCard>
				</div>
			</div>
		</div>
	);
}
