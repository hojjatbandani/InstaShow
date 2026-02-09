import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M5.3335 1.33337V4.00004M10.6668 1.33337V4.00004" stroke="#0066CC" stroke-width="1.33333"
					stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3.33333 2.66675H12.6667C13.4026 2.66675 14 3.26419 14 4.00008V13.3334C14 14.0693 13.4026 14.6667 12.6667 14.6667H3.33333C2.59745 14.6667 2 14.0693 2 13.3334V4.00008C2 3.26419 2.59745 2.66675 3.33333 2.66675V2.66675"
					stroke="#0066CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M2 6.66675H14" stroke="#0066CC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>

);
export const CalenderIcon = createIcon(SvgContent, "Calender");
export default CalenderIcon;