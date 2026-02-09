import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M21.44 11.05L12.25 20.24C11.7217 20.7682 11.0078 21.0655 10.2637 21.0655C9.51961 21.0655 8.80572 20.7682 8.2775 20.24L2.5 14.47C2.25 14.22 2.25 13.82 2.5 13.57L5.03 11.04C5.28 10.79 5.68 10.79 5.93 11.04L10.25 15.36L18.08 7.53C18.33 7.28 18.73 7.28 18.98 7.53L21.44 9.99C21.69 10.24 21.69 10.8 21.44 11.05Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M8 8L11 2"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const HandymanIcon = createIcon(SvgContent, "HandymanIcon");
export default HandymanIcon;
