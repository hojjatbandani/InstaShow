import Link from "next/link";
import {ClockIcon, LocationIcon, CheckCircleIcon, DangerIcon, EyeIcon} from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Image from "next/image";
import avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_1.png"

export type BookingStatus = "Confirmed" | "Requested" | "Pending" | "Completed";

const statusConfig: Record<BookingStatus, { label: string; className: string; Icon: React.ElementType }> = {
  Confirmed: {
    label: "Confirmed",
    className: "text-[#00A778] bg-[#00A778]/10 border border-[#00A778]",
    Icon: CheckCircleIcon,
  },
  Requested: {
    label: "Requested",
    className: "text-[#3E50F7] bg-[#2563EB]/10 border border-[#2563EB]",
    Icon: ClockIcon,
  },
  Pending: {
    label: "Pending",
    className: "text-orange-500 bg-orange-100 border border-orange-300",
    Icon: DangerIcon,
  },
  Completed: {
    label: "Completed",
    className: "text-gray-500 bg-gray-100 border border-gray-200",
    Icon: CheckCircleIcon,
  },
};

interface BookingCardProps {
  id: string;
  title: string;
  reference: string;
  duration: string;
  location: string;
  price: string;
  status: BookingStatus;
  day: string;
  month: string;
  time: string;
  professional: { name: string; role: string };
  href: string;
}

export default function BookingCard({
  title, reference, duration, location, price, status,
  day, month, time, professional, href,
}: BookingCardProps) {
  const cfg = statusConfig[status];
  const StatusIcon = cfg.Icon;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-5 hover:shadow-md transition-shadow">
      <Flex align="center" gap="md">
        {/* Date Box */}
        <Flex direction="col" justify="center" align="center" className="shrink-0 w-[80px] sm:w-[110px] border-2 border-blue-500 rounded-xl p-2 sm:p-3 text-center bg-blue-100">
          <p className="text-xl sm:text-2xl font-bold text-[#3E50F7] leading-tight">{day}</p>
          <p className="text-xs text-colors-primary font-medium uppercase">{month}</p>
          <p className="text-xs text-colors-primary">{time}</p>
        </Flex>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Flex justify="between" align="start" className="mb-2">
            <h3 className="text-base font-bold text-colors-primary leading-snug">{title}</h3>
            <span className="text-base font-bold text-[#3b82f6] shrink-0 ml-2 sm:ml-4">{price}</span>
          </Flex>

          <Flex gap="md" align="center" className="mb-4 flex-wrap">
            <span className="text-xs text-gray-400">booking reference : {reference}</span>
            <Flex align="center" gap="xs">
              <ClockIcon size="sm" className="text-gray-400" />
              <span className="text-xs text-gray-500">{duration}</span>
            </Flex>
            <Flex align="center" gap="xs">
              <LocationIcon size="sm" className="text-gray-400" />
              <span className="text-xs text-gray-500">{location}</span>
            </Flex>
          </Flex>

          <Flex justify="between" align="center">
            {/* Professional */}
            <Flex align="center" gap="sm">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                <Image src={avatar1} alt={professional.name} width={32} height={32}/>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-colors-primary leading-tight truncate">{professional.name}</p>
                <p className="text-xs text-gray-500">{professional.role}</p>
              </div>
            </Flex>
          </Flex>
          <hr className="my-4" />
          {/* Status + Action */}
          <Flex align="center" gap="sm" justify="between">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${cfg.className}`}>
                <StatusIcon size="md" />
                {cfg.label}
              </span>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-btn-primary-from to-btn-primary-to text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <EyeIcon size="sm" className="text-white" />
              View Details
            </Link>
          </Flex>
        </div>
      </Flex>
    </div>
  );
}
