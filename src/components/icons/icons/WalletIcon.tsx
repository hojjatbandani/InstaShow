import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M21 12V7H5C4.46957 7 3.96086 6.78929 3.58579 6.41421C3.21071 6.03914 3 5.53043 3 5C3 3.9 3.9 3 5 3H19V7"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21V16"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M18 16C17.4477 16 17 15.5523 17 15V13C17 12.4477 17.4477 12 18 12H22V16H18Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const WalletIcon = createIcon(SvgContent, "WalletIcon");
export default WalletIcon;
