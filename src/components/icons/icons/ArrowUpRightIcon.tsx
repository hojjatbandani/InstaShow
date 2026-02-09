import { createIcon, IconProps } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M5.83334 14.1668L14.1667 5.8335M14.1667 5.8335H5.83334M14.1667 5.8335V14.1668"
			stroke="currentColor"
			strokeWidth="1.66667"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const ArrowUpRightIcon = createIcon(SvgContent, "ArrowUpRightIcon");
export default ArrowUpRightIcon;
