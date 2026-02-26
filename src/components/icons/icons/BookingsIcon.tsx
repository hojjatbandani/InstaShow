import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z"
			stroke="currentColor"
			strokeWidth="2"
		/>
		<path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		<path d="M4 11H20" stroke="currentColor" strokeWidth="2" />
	</svg>
);

export const BookingsIcon = createIcon(SvgContent, "BookingsIcon");
export default BookingsIcon;
