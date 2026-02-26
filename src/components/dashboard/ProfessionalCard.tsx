import { VerifiedIcon, ShieldCheckIcon, DollarSignIcon } from "@/components/icons";
import Flex from "@/components/ui/Flex";
import Button from "@/components/ui/Button";

interface ProfessionalCardProps {
  id: string;
  name: string;
  verified?: boolean;
  insured?: boolean;
  fromPrice: string;
  href: string;
}

export default function ProfessionalCard({
  name,
  verified = true,
  insured = true,
  fromPrice,
  href,
}: ProfessionalCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3E50F7] to-[#0062FF] flex items-center justify-center text-white font-bold text-xl shrink-0">
        {name.charAt(0)}
      </div>

      <h3 className="text-sm font-bold text-colors-primary">{name}</h3>

      {/* Badges */}
      <Flex gap="sm" wrap={true}>
        {verified && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#0B9E58] text-[#0B9E58] text-xs rounded-md font-medium">
            <VerifiedIcon size="sm" />
            Verified
          </span>
        )}
        {insured && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#3E50F7] text-[#3E50F7] text-xs rounded-md font-medium">
            <ShieldCheckIcon size="sm" />
            Insured
          </span>
        )}
      </Flex>

      {/* Price */}
      <Flex align="center" gap="xs">
        <DollarSignIcon size="sm" className="text-gray-400" />
        <span className="text-xs text-gray-500">From:</span>
        <span className="text-base font-bold text-colors-primary">{fromPrice}</span>
      </Flex>

      <Button variant="primary" size="sm" href={href} className="w-full mt-auto">
        View Profile
      </Button>
    </div>
  );
}
