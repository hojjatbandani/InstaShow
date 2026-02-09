import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M11.0171 2.82831C11.1057 2.3552 11.5185 2 12 2C12.4815 2 12.8943 2.3552 12.9829 2.82831L14.0341 8.38917C14.187 9.19926 14.8007 9.81293 15.6108 9.96588L21.1717 11.0171C21.6448 11.1057 22 11.5185 22 12C22 12.4815 21.6448 12.8943 21.1717 12.9829L15.6108 14.0341C14.8007 14.1871 14.187 14.8007 14.0341 15.6108L12.9829 21.1717C12.8943 21.6448 12.4815 22 12 22C11.5185 22 11.1057 21.6448 11.0171 21.1717L9.96588 15.6108C9.81293 14.8007 9.19926 14.187 8.38917 14.0341L2.82831 12.9829C2.3552 12.8943 2 12.4815 2 12C2 11.5185 2.3552 11.1057 2.82831 11.0171L8.38917 9.96588C9.19926 9.81293 9.81293 9.19926 9.96588 8.38917L11.0171 2.82831ZM20 2V6M22 4H18"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const SparkleIcon = createIcon(SvgContent, "SparkleIcon");
export default SparkleIcon;
