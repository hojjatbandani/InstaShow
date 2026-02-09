import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M9 12L11 14L15 10"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M21 12C21 13.78 20.23 15.37 19 16.46C17.77 17.55 15.97 18.38 13.83 18.83C13.27 18.94 12.64 19 12 19C11.36 19 10.73 18.94 10.17 18.83C8.03 18.38 6.23 17.55 5 16.46C3.77 15.37 3 13.78 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const VerifiedIcon = createIcon(SvgContent, "VerifiedIcon");
export default VerifiedIcon;
