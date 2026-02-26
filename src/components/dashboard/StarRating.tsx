import { StarFilledIcon } from "@/components/icons";
import type { StarRatingProps } from "@/types/dashboard";

export default function StarRating({ count = 5 }: StarRatingProps) {
	return (
		<div className="flex gap-0.5">
			{[...Array(count)].map((_, i) => (
				<StarFilledIcon key={i} size="sm" className="text-yellow-400" />
			))}
		</div>
	);
}
