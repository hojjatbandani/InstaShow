import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<line x1="17" y1="7" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<polyline points="17 17 7 17 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const ArrowDownLeftIcon = createIcon(SvgContent, "ArrowDownLeftIcon");
export default ArrowDownLeftIcon;
