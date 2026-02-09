import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M14 4V14.54C15.5 15.53 16.35 17.24 16.15 19.05C15.9 21.25 14.08 23 11.87 23C9.26 23 7.13 20.85 7.02 18.25C6.94 16.55 7.77 15 9 14.05V4C9 2.9 9.9 2 11 2C12.1 2 13 2.9 13 4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const ThermometerIcon = createIcon(SvgContent, "ThermometerIcon");
export default ThermometerIcon;
