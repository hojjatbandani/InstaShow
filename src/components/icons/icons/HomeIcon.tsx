import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M17.5 24.5V15.1667C17.5 14.5228 16.9772 14 16.3333 14H11.6667C11.0228 14 10.5 14.5228 10.5 15.1667V24.5"
			stroke="currentColor"
			strokeWidth="2.33333"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3.5 11.6667C3.49984 10.9796 3.80245 10.3275 4.32717 9.88399L12.4938 2.88399C13.3635 2.14902 14.6365 2.14902 15.5062 2.88399L23.6728 9.88399C24.1976 10.3275 24.5002 10.9796 24.5 11.6667V22.1667C24.5 23.4545 23.4545 24.5 22.1667 24.5H5.83333C4.54553 24.5 3.5 23.4545 3.5 22.1667V11.6667"
			stroke="currentColor"
			strokeWidth="2.33333"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const HomeIcon = createIcon(SvgContent, "HomeIcon");
export default HomeIcon;
