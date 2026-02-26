import {createIcon} from "../../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M18.75 7.5L32.5 21.25" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
		<path
			d="M30 20.125L23.375 26.75C22.375 27.75 20.625 27.75 19.625 26.75L13.25 20.375C12.25 19.375 12.25 17.625 13.25 16.625L19.875 10"
			stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
		<path d="M16.5 23.5L6.25 33.75" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
		<path d="M34.625 11.625L29.125 17.125" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
		<path d="M28.375 5.375L22.875 10.875" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
	</svg>
);

export const ElectricalIcon = createIcon(SvgContent, "ElectricalIcon");
export default ElectricalIcon;
