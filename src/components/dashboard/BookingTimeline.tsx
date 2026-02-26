import { CheckIcon } from "@/components/icons";

export interface TimelineStep {
  label: string;
  date: string;
  status: "completed" | "current" | "pending";
}

interface BookingTimelineProps {
  steps: TimelineStep[];
}

export default function BookingTimeline({ steps }: BookingTimelineProps) {
  return (
    <div className="flex items-start overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start flex-1">
          {/* Step */}
          <div className="flex flex-col items-center flex-1 space-y-4">
            <div
              className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all ${
                step.status === "completed"
                  ? "bg-[#0B9E58] border-[#0B9E58] text-white"
                  : step.status === "current"
                  ? "bg-white border-[#3B82F6] text-[#3B82F6] border-dashed"
                  : "bg-white border-gray-300 text-gray-400 border-dashed"
              }`}
            >
              {step.status === "completed" ? <CheckIcon size="sm" className="text-white" /> : index + 1}
            </div>
            <p
              className={`text-xs font-semibold mt-2 text-center ${
                step.status === "completed"
                  ? "text-[#0B9E58]"
                  : step.status === "current"
                  ? "text-[#3B82F6]"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 text-center">{step.date}</p>
          </div>

          {/* Connector */}
          {index < steps.length - 1 && (
            <div className="hidden md:block flex-1 relative top-[18px] md:top-6 mx-1">
              <div className="h-0.5 w-full bg-gray-200 relative">
                <div
                  className={`absolute inset-0 h-full transition-all ${
                    step.status === "completed"
                      ? "bg-[#0B9E58] w-full"
                      : step.status === "current"
                      ? "bg-gray-200 w-1/2"
                      : "w-0"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
