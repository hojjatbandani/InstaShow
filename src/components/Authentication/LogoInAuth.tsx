import Link from "next/link";
import Image from "next/image"
import Logo from "@/assets/images/logo.png"

export default function LogoInAuth() {


	return (
		<div className="fixed p-1.5 md:p-2 left-2 md:left-[20px] top-2 md:top-[20px] z-50 max-w-[1440px]">
			<Link href="/">
				<Image src={Logo} alt="Insta-Fix Logo"/>
			</Link>
		</div>
	)
}