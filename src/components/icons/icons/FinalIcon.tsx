import {createIcon, IconProps} from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M10.3334 4.99992L11.8668 6.53325C12.126 6.78735 12.5409 6.78735 12.8001 6.53325L14.2001 5.13325C14.4542 4.87402 14.4542 4.45915 14.2001 4.19992L12.6668 2.66659M14.0001 1.33325L7.6001 7.73325"
					stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M1.3335 10.3334C1.3335 12.3571 2.97647 14.0001 5.00016 14.0001C7.02385 14.0001 8.66683 12.3571 8.66683 10.3334C8.66683 8.30973 7.02385 6.66675 5.00016 6.66675C2.97647 6.66675 1.3335 8.30973 1.3335 10.3334V10.3334"
					stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>


);
export const FinalIcon = createIcon(SvgContent, "Final");
export default FinalIcon;