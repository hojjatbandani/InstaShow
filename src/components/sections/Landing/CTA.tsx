"use client";

import Image from "next/image";
import Link from "next/link";
import CTA_Left from "@/assets/images/CTA_Left.png";
import CTA_Right from "@/assets/images/CTA_Right.png";
import CTA_Plus from "@/assets/images/CTA_Plus.png";
import {Section, Container, Flex} from "@/components/ui";

export default function CTA() {
	return (
		<Section spacing="xl" className="px-4 md:px-2 lg:px-1">
			<Container className="bg-[#131A2B] rounded-2xl py-10 md:py-16">
				<div className="text-center relative z-10 w-full">
					<Image
						src={CTA_Left}
						alt="CTA Left Decoration"
						className="hidden lg:block absolute bottom-0 left-0 transform translate-x-1/4 translate-y-1 aspect-auto w-[300px]"
					/>
					<Image
						src={CTA_Right}
						alt="CTA Right Decoration"
						className="hidden lg:block absolute right-4 top-0 transform -translate-x-1/4 translate-y-2 w-[300px]"
					/>
					<Image
						src={CTA_Plus}
						alt="CTA Plus Decoration"
						className="hidden lg:block absolute bottom-0 right-0 transform -translate-x-1/4 translate-y-full w-[200px]"
					/>
					<h2
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60">
						READY TO GET STARTED?
					</h2>

					<p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
						The right professional for your project is just a few clicks away.
					</p>

					<Flex align="center" justify="center" gap="md" wrap>
						<Link
							href="/"
							className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition shadow-lg mb-4 md:mb-6"
						>
							Find a Professional
						</Link>
					</Flex>
				</div>
			</Container>
		</Section>
	);
}
