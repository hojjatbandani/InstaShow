import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M1.16675 7.00008C1.16675 10.2196 3.78058 12.8334 7.00008 12.8334C10.2196 12.8334 12.8334 10.2196 12.8334 7.00008C12.8334 3.78058 10.2196 1.16675 7.00008 1.16675C3.78058 1.16675 1.16675 3.78058 1.16675 7.00008V7.00008"
			stroke="currentColor"
			strokeWidth="1.16667"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M5.25 7.00004L6.41667 8.16671L8.75 5.83337"
			stroke="currentColor"
			strokeWidth="1.16667"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const CheckCircleIcon = createIcon(SvgContent, "CheckCircleIcon");
export default CheckCircleIcon;
