import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M5 11H19C20.1038 11 21 11.8962 21 13V20C21 21.1038 20.1038 22 19 22H5C3.89617 22 3 21.1038 3 20V13C3 11.8962 3.89617 11 5 11V11"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M7 11V7C7 4.24042 9.24042 2 12 2C14.7596 2 17 4.24042 17 7V11"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const LockIcon = createIcon(SvgContent, "LockIcon");
export default LockIcon;
