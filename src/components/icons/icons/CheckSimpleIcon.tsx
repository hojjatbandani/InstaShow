import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M10 3L4.5 8.5L2 6"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const CheckSimpleIcon = createIcon(SvgContent, "CheckSimpleIcon");
export default CheckSimpleIcon;
