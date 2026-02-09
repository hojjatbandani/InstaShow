import {createIcon} from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M6.00016 1.3335H10.0002C10.3681 1.3335 10.6668 1.63222 10.6668 2.00016V3.3335C10.6668 3.70144 10.3681 4.00016 10.0002 4.00016H6.00016C5.63222 4.00016 5.3335 3.70144 5.3335 3.3335V2.00016C5.3335 1.63222 5.63222 1.3335 6.00016 1.3335V1.3335" stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M10.6665 2.66675H11.9998C12.7357 2.66675 13.3332 3.26419 13.3332 4.00008V13.3334C13.3332 14.0693 12.7357 14.6667 11.9998 14.6667H3.99984C3.26395 14.6667 2.6665 14.0693 2.6665 13.3334V4.00008C2.6665 3.26419 3.26395 2.66675 3.99984 2.66675H5.33317M7.99984 7.33342H10.6665M7.99984 10.6667H10.6665M5.33317 7.33342H5.33984M5.33317 10.6667H5.33984" stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>



);
export const PermitIcon = createIcon(SvgContent, "Permit");
export default PermitIcon;