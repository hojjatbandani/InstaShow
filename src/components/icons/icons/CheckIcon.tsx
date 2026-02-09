import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M6.79129 11.5834C6.62546 11.5834 6.46791 11.5039 6.35183 11.3648L4.00529 8.55324C3.76484 8.26513 3.76484 7.78825 4.00529 7.50014C4.24575 7.21202 4.64375 7.21202 4.88421 7.50014L6.79129 9.78518L11.0532 4.67861C11.2937 4.3905 11.6917 4.3905 11.9321 4.67861C12.1726 4.96672 12.1726 5.4436 11.9321 5.73171L7.23075 11.3648C7.11466 11.5039 6.95712 11.5834 6.79129 11.5834Z"
			fill="currentColor"
		/>
	</svg>
);

export const CheckIcon = createIcon(SvgContent, "CheckIcon");
export default CheckIcon;
