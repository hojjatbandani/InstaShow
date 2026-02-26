import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
	</svg>
);

export const BarChartIcon = createIcon(SvgContent, "BarChartIcon");
export default BarChartIcon;
