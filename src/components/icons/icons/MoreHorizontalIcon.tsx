import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<circle cx="12" cy="12" r="1" fill="currentColor" stroke="currentColor" strokeWidth="2" />
		<circle cx="19" cy="12" r="1" fill="currentColor" stroke="currentColor" strokeWidth="2" />
		<circle cx="5" cy="12" r="1" fill="currentColor" stroke="currentColor" strokeWidth="2" />
	</svg>
);

export const MoreHorizontalIcon = createIcon(SvgContent, "MoreHorizontalIcon");
export default MoreHorizontalIcon;
