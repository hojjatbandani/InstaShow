"use client";

import { useState } from "react";
import { XIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Flex from "@/components/ui/Flex";
import DateTimePicker, { TimeSlot } from "@/components/dashboard/DateTimePicker";

interface RescheduleModalProps {
  onClose: () => void;
  onReschedule: (date: string, timeSlot: string) => void;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const timeSlots: TimeSlot[] = [
  { date: "June 5", time: "9:00 AM – 12:00 PM" },
  { date: "June 5", time: "1:00 PM – 4:00 PM" },
  { date: "June 6", time: "9:00 AM – 12:00 PM" },
  { date: "June 6", time: "9:00 AM – 12:00 PM" },
  { date: "June 7", time: "9:00 AM – 12:00 PM" },
  { date: "June 7", time: "1:00 PM – 4:00 PM" },
  { date: "June 8", time: "9:00 AM – 12:00 PM" },
  { date: "June 8", time: "1:00 PM – 4:00 PM" },
  { date: "June 9", time: "9:00 AM – 12:00 PM" },
];

export default function RescheduleModal({ onClose, onReschedule }: RescheduleModalProps) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const handleMonthYearChange = (newMonth: number, newYear: number) => {
    setMonth(newMonth);
    setYear(newYear);
  };

  const handleConfirm = () => {
    if (selectedSlot !== null) {
      const slot = timeSlots[selectedSlot];
      onReschedule(`${selectedDay} ${MONTHS[month]} ${year}`, slot.time);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg md:max-w-2xl p-4 md:p-6 shadow-2xl max-h-[90dvh] overflow-y-auto">
        {/* Header */}
        <Flex justify="between" align="center" className="mb-1">
          <h2 className="text-lg font-bold text-colors-primary">Reschedule</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition">
            <XIcon size="sm" className="text-colors-muted" />
          </button>
        </Flex>
        <p className="text-sm text-colors-muted mb-5">Choose your new date</p>

        <DateTimePicker
          month={month}
          year={year}
          selectedDay={selectedDay}
          selectedSlot={selectedSlot}
          timeSlots={timeSlots}
          onDayChange={setSelectedDay}
          onSlotChange={setSelectedSlot}
          onMonthYearChange={handleMonthYearChange}
        />

        <Button
          variant="primary"
          className="w-full mt-6"
          onClick={handleConfirm}
        >
          Reschedule
        </Button>
      </div>
    </div>
  );
}
