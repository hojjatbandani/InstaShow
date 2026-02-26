import {createIcon} from "../../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M15 28.4375C8.90004 28.4375 3.93753 23.475 3.93753 17.375C3.90003 10.2125 10.725 4.25 13.6625 2.0125C14.45 1.4125 15.55 1.4125 16.3375 2.0125C19.275 4.2875 26.1 10.325 26.0625 17.3875C26.0625 23.475 21.1 28.4375 15 28.4375ZM15 3.4375C14.9375 3.4375 14.8625 3.4625 14.8 3.5125C12.6875 5.125 5.78754 10.8875 5.82504 17.375C5.82504 22.45 9.95005 26.5625 15.0126 26.5625C20.0751 26.5625 24.2 22.45 24.2 17.3875C24.2375 10.9875 17.325 5.15 15.2 3.5125C15.125 3.4625 15.0625 3.4375 15 3.4375Z"
			fill="currentColor"/>
	</svg>
);

export const PlumpingDashboardIcon = createIcon(SvgContent, "PlumpingDashboardIcon");
export default PlumpingDashboardIcon;
