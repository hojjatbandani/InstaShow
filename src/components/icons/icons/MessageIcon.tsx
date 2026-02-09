import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M3 16.5C3.14571 16.8694 3.17226 17.2758 3.07617 17.6591L2.02117 20.7991C1.95125 21.1383 2.06197 21.4894 2.31369 21.7274C2.56541 21.9654 2.92228 22.0599 3.25617 21.9791L6.67017 21.2191C7.0377 21.1461 7.4186 21.1779 7.76817 21.3111C12.1776 23.1998 17.4281 21.7942 20.2077 17.7134C22.9873 13.6325 22.4893 8.30571 19.0259 4.88625C15.5625 1.46679 10.2287 1.03511 6.18746 3.86339C2.14627 6.69167 0.798199 11.9591 2.74117 16.3991"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const MessageIcon = createIcon(SvgContent, "MessageIcon");
export default MessageIcon;
