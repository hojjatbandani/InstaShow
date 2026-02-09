import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M12 2.69L17.66 8.35C19.1 9.79 19.98 11.75 19.98 13.91C19.98 18.3 16.39 21.89 12 21.89C7.61 21.89 4.02 18.3 4.02 13.91C4.02 11.75 4.9 9.79 6.34 8.35L12 2.69Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const WaterIcon = createIcon(SvgContent, "WaterIcon");
export default WaterIcon;
