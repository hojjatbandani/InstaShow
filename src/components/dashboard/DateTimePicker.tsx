"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import Flex from "@/components/ui/Flex";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export interface TimeSlot {
  date: string;
  time: string;
}

interface DateTimePickerProps {
  month: number;
  year: number;
  selectedDay: number;
  selectedSlot: number | null;
  timeSlots: TimeSlot[];
  onDayChange: (day: number) => void;
  onSlotChange: (index: number) => void;
  onMonthYearChange: (month: number, year: number) => void;
}

export default function DateTimePicker({
  month,
  year,
  selectedDay,
  selectedSlot,
  timeSlots,
  onDayChange,
  onSlotChange,
  onMonthYearChange,
}: DateTimePickerProps) {
  const today = new Date();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (month === 0) onMonthYearChange(11, year - 1);
    else onMonthYearChange(month - 1, year);
  };

  const nextMonth = () => {
    if (month === 11) onMonthYearChange(0, year + 1);
    else onMonthYearChange(month + 1, year);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Calendar */}
      <div className="flex-1">
        <Flex justify="between" align="center" className="border border-gray-200 rounded-lg px-3 py-2 mb-4">
          <span className="text-sm font-medium text-colors-primary">
            {MONTHS[month]} {year}
          </span>
          <Flex gap="xs">
            <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-100 transition">
              <ChevronLeftIcon size="md" className="text-colors-muted" />
            </button>
            <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-100 transition">
              <ChevronRightIcon size="md" className="text-colors-muted" />
            </button>
          </Flex>
        </Flex>

        <div className="grid grid-cols-7 gap-3 mb-2">
          {DAYS.map(d => (
            <p key={d} className="text-[10px] text-gray-400 text-center font-semibold uppercase">
              {d}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-3">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = day === selectedDay;
            const isToday =
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();
            return (
              <button
                key={day}
                onClick={() => onDayChange(day)}
                className={`h-8 w-8 mx-auto rounded-full text-sm transition-all ${
                  isSelected
                    ? "bg-[#3E50F7] text-white font-bold"
                    : isToday
                    ? "border border-[#3E50F7] text-[#3E50F7] font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="w-full md:w-72 shrink-0">
        <p className="text-sm font-semibold text-colors-primary mb-3">Select Time Slot</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
          {timeSlots.map((slot, i) => (
            <button
              key={i}
              onClick={() => onSlotChange(i)}
              className={`p-4 rounded-xl border text-center text-xs transition-all ${
                selectedSlot === i
                  ? "border-[#3E50F7] bg-[#EFF2FF] text-[#3E50F7] font-semibold"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <p className="font-semibold">{slot.date}</p>
              <p className="text-[10px] text-gray-400 mt-4 leading-tight">{slot.time}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
