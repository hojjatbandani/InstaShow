import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<polyline
			points="23 6 13.5 15.5 8.5 10.5 1 18"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<polyline
			points="17 6 23 6 23 12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const TrendingUpIcon = createIcon(SvgContent, "TrendingUpIcon");
export default TrendingUpIcon;
