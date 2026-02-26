import {createIcon} from "../../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M12.9999 11.7502C12.8099 11.7502 12.6199 11.6802 12.4699 11.5302C12.1799 11.2402 12.1799 10.7602 12.4699 10.4702L20.6699 2.27023C20.9599 1.98023 21.4399 1.98023 21.7299 2.27023C22.0199 2.56023 22.0199 3.04023 21.7299 3.33023L13.5299 11.5302C13.3799 11.6802 13.1899 11.7502 12.9999 11.7502Z"
			fill="currentColor"/>
		<path
			d="M22.0002 7.55C21.5902 7.55 21.2502 7.21 21.2502 6.8V2.75H17.2002C16.7902 2.75 16.4502 2.41 16.4502 2C16.4502 1.59 16.7902 1.25 17.2002 1.25H22.0002C22.4102 1.25 22.7502 1.59 22.7502 2V6.8C22.7502 7.21 22.4102 7.55 22.0002 7.55Z"
			fill="currentColor"/>
		<path
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
			fill="currentColor"/>
		<defs>
			<linearGradient id="paint0_linear_40_2694" x1="12.2532" y1="6.90228" x2="21.9482" y2="6.90228"
											gradientUnits="userSpaceOnUse">
				<stop stopColor="#3B82F6"/>
				<stop offset="1" stopColor="#2563EB"/>
			</linearGradient>
			<linearGradient id="paint1_linear_40_2694" x1="16.4507" y1="4.40051" x2="22.7507" y2="4.40051"
											gradientUnits="userSpaceOnUse">
				<stop stopColor="#3B82F6"/>
				<stop offset="1" stopColor="#2563EB"/>
			</linearGradient>
			<linearGradient id="paint2_linear_40_2694" x1="1.25167" y1="12.0018" x2="22.7517" y2="12.0018"
											gradientUnits="userSpaceOnUse">
				<stop stopColor="#3B82F6"/>
				<stop offset="1" stopColor="#2563EB"/>
			</linearGradient>
		</defs>
	</svg>

);

export const OpenNewTabIcon = createIcon(SvgContent, "OpenNewTabIcon");
export default OpenNewTabIcon;
