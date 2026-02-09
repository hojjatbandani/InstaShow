import {createIcon, IconProps} from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M9.99988 8L3.75121 14.2487C3.19929 14.8008 2.30297 14.8009 1.75088 14.249C1.19878 13.6971 1.19863 12.8008 1.75054 12.2487L7.99988 6M11.9999 10L14.6665 7.33333"
			stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
		<path
			d="M14.3333 7.66667L13.0573 6.39067C12.8073 6.14068 12.6667 5.80159 12.6667 5.448V5.21867C12.6666 4.86507 12.5261 4.52599 12.276 4.276L11.1713 3.17133C10.4214 2.42154 9.40445 2.00023 8.344 2H6L6.82867 2.82867C7.57862 3.57875 7.99995 4.59598 8 5.65667V6.66667L9.33333 8H10.1147C10.4683 8.00008 10.8073 8.1406 11.0573 8.39067L12.3333 9.66667"
			stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>


);
export const FramingIcon = createIcon(SvgContent, "Framing");
export default FramingIcon;