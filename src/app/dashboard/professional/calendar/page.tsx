"use client";

import {useState} from "react";
import {Flex} from "@/components/ui";
import DashboardCard from "@/components/dashboard/DashboardCard";
import {ChevronLeftIcon, ChevronRightIcon, CloseIcon} from "@/components/icons";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WEEK_DAYS = [
	{day: "Mon", enabled: true, start: "09:00", end: "17:00"},
	{day: "Tue", enabled: true, start: "09:00", end: "17:00"},
	{day: "Wed", enabled: true, start: "09:00", end: "17:00"},
	{day: "Thu", enabled: true, start: "09:00", end: "17:00"},
	{day: "Fri", enabled: true, start: "09:00", end: "15:00"},
	{day: "Sat", enabled: false, start: "", end: ""},
	{day: "Sun", enabled: false, start: "", end: ""},
];

interface CalendarEvent {
	day: number;
	time: string;
	name: string;
	type: "booking" | "personal";
}

const sampleEvents: CalendarEvent[] = [
	{day: 3, time: "9:00am", name: "Smith", type: "booking"},
	{day: 8, time: "", name: "Personal Day", type: "personal"},
	{day: 11, time: "2:00pm", name: "Chen", type: "booking"},
	{day: 17, time: "10:00am", name: "Miller", type: "booking"},
	{day: 17, time: "2:30pm", name: "Johnson", type: "booking"},
	{day: 24, time: "2:00pm", name: "Freeman", type: "booking"},
	{day: 25, time: "9:00am", name: "Ross", type: "booking"},
];

const exceptions = [
	{label: "Vacation", date: "Dec 24 - Jan 2"},
];

function getDaysInMonth(year: number, month: number) {
	return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
	return new Date(year, month, 1).getDay();
}

export default function CalendarPage() {
	const [currentDate, setCurrentDate] = useState(new Date(2023, 9)); // October 2023
	const [availability, setAvailability] = useState(WEEK_DAYS);
	const [viewMode, setViewMode] = useState<"Month" | "Week" | "Day">("Month");

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();
	const daysInMonth = getDaysInMonth(year, month);
	const firstDay = getFirstDayOfMonth(year, month);
	const monthName = currentDate.toLocaleString("default", {month: "long"});

	const prevMonth = () => setCurrentDate(new Date(year, month - 1));
	const nextMonth = () => setCurrentDate(new Date(year, month + 1));
	const goToday = () => setCurrentDate(new Date());

	const toggleDay = (index: number) => {
		setAvailability((prev) =>
			prev.map((d, i) => (i === index ? {...d, enabled: !d.enabled} : d))
		);
	};

	// Build calendar grid
	const prevMonthDays = getDaysInMonth(year, month - 1);
	const cells: { day: number; currentMonth: boolean }[] = [];

	for (let i = firstDay - 1; i >= 0; i--) {
		cells.push({day: prevMonthDays - i, currentMonth: false});
	}
	for (let d = 1; d <= daysInMonth; d++) {
		cells.push({day: d, currentMonth: true});
	}
	const remaining = 7 - (cells.length % 7);
	if (remaining < 7) {
		for (let i = 1; i <= remaining; i++) {
			cells.push({day: i, currentMonth: false});
		}
	}

	const today = new Date();
	const isToday = (day: number) =>
		day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

	const getEventsForDay = (day: number) =>
		sampleEvents.filter((e) => e.day === day);

	return (
		<div>
			<h1 className="text-2xl font-bold text-colors-primary p-6 border-b border-gray-200 bg-white">Calendar &
				Availability</h1>

			<Flex gap="xs" direction="row" justify="start" align="start">
				{/* Calendar Section */}
				<div className="flex-1 p-6">
					{/* Calendar Header */}
					<Flex justify="between" align="center" className="mb-6">
						<Flex align="center" gap="md">
							<button onClick={prevMonth} className="p-1 hover:bg-gray-50 rounded">
								<ChevronLeftIcon size="lg" className="text-colors-primary"/>
							</button>
							<h2 className="text-lg font-semibold text-colors-primary">
								{monthName} {year}
							</h2>
							<button onClick={nextMonth} className="p-1 hover:bg-gray-50 rounded">
								<ChevronRightIcon size="lg" className="text-colors-primary"/>
							</button>
							<button
								onClick={goToday}
								className="ml-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
							>
								Today
							</button>
						</Flex>
						<Flex align="center" gap="none" className="border border-gray-200 rounded-lg overflow-hidden">
							{(["Month", "Week", "Day"] as const).map((mode) => (
								<button
									key={mode}
									onClick={() => setViewMode(mode)}
									className={`px-4 py-1.5 text-sm font-medium transition ${
										viewMode === mode
											? "bg-gray-100 text-colors-primary"
											: "text-gray-500 hover:bg-gray-50"
									}`}
								>
									{mode}
								</button>
							))}
						</Flex>
					</Flex>

					{/* Calendar Grid */}
					<div className="border border-gray-200 rounded-lg overflow-hidden">
						{/* Day Headers */}
						<div className="grid grid-cols-7 bg-[#F7FAFC]">
							{DAYS.map((day) => (
								<div key={day}
										 className="py-3 text-center text-sm font-medium text-[#94A3B8] border-b border-r last:border-r-0 border-gray-300">
									{day}
								</div>
							))}
						</div>

						{/* Calendar Cells */}
						<div className="grid grid-cols-7">
							{cells.map((cell, idx) => {
								const events = cell.currentMonth ? getEventsForDay(cell.day) : [];
								return (
									<div
										key={idx}
										className={`min-h-[100px] p-2 border-b border-r border-gray-300 ${
											!cell.currentMonth ? "bg-white" : "bg-[#F1F5F9]"
										}`}
									>
											<span
												className={`text-sm font-medium ${
													!cell.currentMonth
														? "text-[#94A3B8]"
														: isToday(cell.day)
															? "text-[#3E50F7] font-bold"
															: "text-[#94A3B8]"
												}`}
											>
												{cell.day}
											</span>
										<div className="mt-1 space-y-1">
											{events.map((event, eIdx) => (
												<div
													key={eIdx}
													className={`text-xs px-2 py-1 rounded truncate ${
														event.type === "personal"
															? "bg-gray-100 text-gray-600"
															: "bg-teal-50 text-[#0EA5A4] border-l-4 border-[#0EA5A4]"
													}`}
												>
													{event.type === "booking" ? (
														<>
															<span className="mr-1">📋</span>
															{event.time} - {event.name}
														</>
													) : (
														<>
															<span className="mr-1">🏠</span>
															{event.name}
														</>
													)}
												</div>
											))}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{/* Availability Sidebar */}
				<div className="w-[300px] min-h-screen border-l border-b border-gray-200 bg-[#F1F5F9]">
					<div className="p-6">
						<Flex justify="between" align="center" className="mb-5">
							<h3 className="text-lg font-semibold text-colors-primary">Weekly Availability</h3>
							<button className="text-gray-400 hover:text-gray-600">
								<SettingsGearIcon/>
							</button>
						</Flex>

						<div className="space-y-4">
							{availability.map((item, index) => (
								<Flex key={item.day} align="center" gap="sm" className="w-full">
									{/* Toggle */}
									<button
										onClick={() => toggleDay(index)}
										className={`relative w-11 h-6 rounded-full transition-colors ${
											item.enabled ? "bg-[#0EA5A4]" : "bg-gray-200"
										}`}
									>
										<span
											className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
												item.enabled ? "translate-x-5" : "translate-x-0"
											}`}
										/>
									</button>

									<span className="text-sm font-medium text-colors-primary w-10">{item.day}</span>

									{item.enabled ? (
										<Flex align="center" gap="xs" className="flex-1">
											<input
												type="text"
												value={item.start}
												readOnly
												className="w-16 text-sm text-center border border-gray-200 rounded-lg px-1 py-1"
											/>
											<span className="text-gray-400 text-sm">-</span>
											<input
												type="text"
												value={item.end}
												readOnly
												className="w-16 text-sm text-center border border-gray-200 rounded-lg px-1 py-1"
											/>
										</Flex>
									) : (
										<span className="text-sm text-gray-400 italic">Unavailable</span>
									)}
								</Flex>
							))}
						</div>

						{/* Exceptions */}
						<div className="mt-8">
							<h4 className="text-base font-semibold text-colors-primary mb-4">Exceptions</h4>
							{exceptions.map((ex, i) => (
								<Flex key={i} align="center" justify="between" className="p-3 border-b border-gray-100 bg-[#E6EDF2] rounded-lg">
									<Flex align="center" gap="sm">
										<div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
											<span className="text-red-500 text-xs">🏖️</span>
										</div>
										<div>
											<p className="text-sm font-medium text-colors-primary">{ex.label}</p>
											<p className="text-xs text-gray-400">{ex.date}</p>
										</div>
									</Flex>
									<button className="text-gray-400 hover:text-gray-600">
										<CloseIcon size="sm"/>
									</button>
								</Flex>
							))}

							<button
								className="w-full mt-4 py-2.5 text-sm font-medium text-colors-primary border border-gray-300 rounded-lg hover:bg-gray-50 transition">
								+ Add Date Override
							</button>
						</div>
					</div>
				</div>
			</Flex>
		</div>
	);
}

function SettingsGearIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
				 strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="3"/>
			<path
				d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
		</svg>
	);
}
