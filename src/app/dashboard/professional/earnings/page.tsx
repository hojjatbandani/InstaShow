"use client";

import { useState } from "react";
import { Flex, Grid, Button } from "@/components/ui";
import {
	DollarIcon,
	ClockIcon,
	CheckCircleIcon,
	BarChartIcon,
	TrendingUpIcon,
	DownloadIcon,
	MoreHorizontalIcon,
} from "@/components/icons";

const stats = [
	{
		label: "Total Earnings (Oct)",
		value: "$4,250.00",
		subtitle: "+12% vs last month",
		subtitleColor: "text-green-500",
		icon: DollarIcon,
		iconBg: "bg-amber-50",
		iconColor: "text-amber-500",
	},
	{
		label: "Pending Payout",
		value: "$850.00",
		subtitle: "Arrives in 2 days",
		subtitleColor: "text-gray-400",
		icon: ClockIcon,
		iconBg: "bg-gray-100",
		iconColor: "text-gray-500",
	},
	{
		label: "Available for Payout",
		value: "$0.00",
		subtitle: "Next payout Nov 1",
		subtitleColor: "text-gray-400",
		icon: CheckCircleIcon,
		iconBg: "bg-green-50",
		iconColor: "text-green-500",
	},
	{
		label: "Avg. Job Value",
		value: "$215.00",
		subtitle: "+5%",
		subtitleColor: "text-green-500",
		icon: BarChartIcon,
		iconBg: "bg-purple-50",
		iconColor: "text-purple-500",
	},
];

const chartMonths = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];

const payoutHistory = [
	{
		date: "Oct 24, 2023",
		amount: "$850",
		method: "Chase Bank •••• 4242",
		referenceId: "PAY-892334",
		status: "Processing" as const,
	},
	{
		date: "Oct 17, 2023",
		amount: "$1,240",
		method: "Chase Bank •••• 4242",
		referenceId: "PAY-891102",
		status: "Paid" as const,
	},
	{
		date: "Oct 10, 2023",
		amount: "$980",
		method: "Chase Bank •••• 4242",
		referenceId: "PAY-889441",
		status: "Paid" as const,
	},
	{
		date: "Oct 03, 2023",
		amount: "$1,150",
		method: "Chase Bank •••• 4242",
		referenceId: "PAY-887112",
		status: "Paid" as const,
	},
];

const statusStyles = {
	Processing: "text-amber-500",
	Paid: "text-green-500",
};
const statusStylesBg = {
	Processing: "bg-amber-200",
	Paid: "bg-green-200",
};

const statusIcons = {
	Processing: "⏳",
	Paid: "✓",
};

export default function EarningsPage() {
	const [timeRange, setTimeRange] = useState("Last 6 Months");

	return (
		<div className="bg-white">
			<h1 className="text-2xl font-bold text-colors-primary p-6 border-b border-gray-200 bg-white">Earnings & Payouts</h1>

			{/* Stats Cards */}
			<Grid cols={4} gap="sm" className="m-6">
				{stats.map((stat) => (
					<div className="bg-[#F3F6FB] p-6 rounded-lg border border-b-gray-200" key={stat.label}>
						<Flex justify="between" align="start" className="mb-3">
							<Flex align="center" gap="xs">
								<stat.icon size="sm" className={stat.iconColor} />
								<span className="text-sm text-gray-500">{stat.label}</span>
							</Flex>
						</Flex>
						<p className="text-2xl font-bold text-colors-primary mb-3">{stat.value}</p>
						<Flex align="center" gap="xs">
							{stat.subtitleColor === "text-green-500" && (
								<TrendingUpIcon size={14} className="text-green-500" />
							)}
							<span className={`text-sm ${stat.subtitleColor}`}>{stat.subtitle}</span>
						</Flex>
					</div>
				))}
			</Grid>

			{/* Earnings Overview Chart */}
			<div className="bg-[#F3F6FB] p-6 rounded-lg border border-b-gray-200 m-6">
				<Flex justify="between" align="center" className="mb-8 relative">
					<h2 className="text-[20px] font-semibold text-colors-primary">Earnings Overview</h2>
					<select
						value={timeRange}
						onChange={(e) => setTimeRange(e.target.value)}
						className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-600 cursor-pointer appearance-none pr-10"

					>
						<option>Last 6 Months</option>
						<option>Last 3 Months</option>
						<option>Last Year</option>
					</select>
					<svg
						className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-colors-muted pointer-events-none"
						fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
					</svg>
				</Flex>

				{/* Chart Placeholder */}
				<div className="h-[200px] flex items-end justify-between px-4">
					{chartMonths.map((month, i) => (
						<div key={month} className="flex flex-col items-center gap-2 flex-1">
							<div
								className="w-12 bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-md"
								style={{ height: `${[60, 80, 45, 70, 90, 100][i]}%` }}
							/>
							<span className={`text-sm ${month === "Oct" ? "text-[#3E50F7] font-semibold" : "text-gray-400"}`}>
								{month}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Payout History Table */}
			<div className="bg-[#F3F6FB] p-6 rounded-lg border border-b-gray-200 m-6">
				<Flex justify="between" align="center" className="mb-4">
					<h2 className="text-[20px] font-semibold text-colors-primary">Payout History</h2>
					<Button variant="outline" size="sm" className="gap-2">
						<DownloadIcon size={14} />
						Export CSV
					</Button>
				</Flex>

				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date Initiated</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Payout Method</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Reference ID</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
							</tr>
						</thead>
						<tbody>
							{payoutHistory.map((payout, index) => (
								<tr key={index} className="border-b border-gray-200 hover:bg-gray-50 last:border-b-0 transition">
									<td className="py-4 px-4 text-sm text-colors-primary ">{payout.date}</td>
									<td className="py-4 px-4 text-sm font-semibold text-colors-primary text-right">{payout.amount}</td>
									<td className="py-4 px-4 ">
										<Flex align="center" gap="sm">
											<span className="text-gray-400">🏦</span>
											<span className="text-sm text-colors-primary">{payout.method}</span>
										</Flex>
									</td>
									<td className="py-4 px-4 text-sm text-gray-400 font-mono ">{payout.referenceId}</td>
									<td className="py-4 px-4 ">
										<span className={`px-2 py-1 text-sm font-medium ${statusStyles[payout.status]} ${statusStylesBg[payout.status]} rounded-lg`}>
											{statusIcons[payout.status]} {payout.status}
										</span>
									</td>
									<td className="py-4 px-4">
										<button className="text-gray-400 hover:text-gray-600">
											<MoreHorizontalIcon size="sm" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
