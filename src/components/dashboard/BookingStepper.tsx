import { CheckIcon } from "@/components/icons";

interface Step {
  label: string;
}

interface BookingStepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
}

export default function BookingStepper({ steps, currentStep }: BookingStepperProps) {
  return (
    <div className="flex items-start overflow-x-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start flex-1 last:flex-none">
          {/* Step circle + label */}
          <div className="flex flex-col items-center flex-1 space-y-4">
            <div
              className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 transition-all ${
                index < currentStep
                  ? "bg-[#0B9E58] border-[#0B9E58] text-white"
                  : index === currentStep
                  ? "bg-white border-[#3E50F7] text-[#3E50F7]"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {index < currentStep ? <CheckIcon size="sm" className="text-white" /> : index + 1}
            </div>
            <p
              className={`text-xs font-semibold mt-2 text-center ${
                index < currentStep
                  ? "text-[#0B9E58]"
                  : index === currentStep
                  ? "text-[#3E50F7]"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block flex-1 relative top-5 mx-2">
              <div className="h-0.5 bg-gray-200">
                <div
                  className={`h-full transition-all ${
                    index < currentStep ? "bg-[#0B9E58] w-full" : "w-0"
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
