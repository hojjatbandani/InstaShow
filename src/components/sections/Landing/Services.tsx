"use client";

import {
	HomeIcon,
	ThunderIcon,
	WaterIcon,
	ThermometerIcon,
	SparkleIcon,
	ToolsIcon,
} from "@/components/icons";
import {IconProps} from "@/components/icons";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Grid from "@/components/ui/Grid";
import ServiceCard from "@/components/ui/ServiceCard";
import {FC} from "react";

interface ServiceItem {
	title: string;
	Icon: FC<IconProps>;
	description: string;
	price: string;
	categories: string[];
	color: string;
	iconColor: string;
	url: string;
}

const services: ServiceItem[] = [
	{
		title: "Renovation & Basement",
		Icon: HomeIcon,
		description:
			"Basement development and full home renovations tailored to your needs.",
		price: "20$/H",
		categories: ["Development", "Flooring", "+3 more"],
		color: "#eff6ff",
		iconColor: "#2563EB",
		url: "/",
	},
	{
		title: "Electrical",
		Icon: ThunderIcon,
		description:
			"Electrical installation, repairs, and upgrades for safe home systems.",
		price: "18$/H",
		categories: ["Wiring", "Panel Upgrade", "+3 more"],
		color: "#fef9c3",
		iconColor: "#CA8A04",
		url: "/",
	},
	{
		title: "Plumbing",
		Icon: WaterIcon,
		description:
			"Leak fixes, installations, and plumbing services you can rely on.",
		price: "45$/H",
		categories: ["Leaks", "Install", "+3 more"],
		color: "#dbeafe",
		iconColor: "#2563EB",
		url: "/",
	},
	{
		title: "HVAC",
		Icon: ThermometerIcon,
		description:
			"Heating, cooling, and ventilation systems maintenance and repair.",
		price: "45$/H",
		categories: ["Leaks", "Install", "+3 more"],
		color: "#FAE8FF",
		iconColor: "#C026D3",
		url: "/",
	},
	{
		title: "Cleaning",
		Icon: SparkleIcon,
		description:
			"Home, apartment, and office cleaning services for a spotless space.",
		price: "35$/H",
		categories: ["Leaks", "Install", "+3 more"],
		color: "#ECFCCB",
		iconColor: "#65A30D",
		url: "/",
	},
	{
		title: "Handyman",
		Icon: ToolsIcon,
		description:
			"Small repairs, installations, and everyday fixes around the house.",
		price: "45$/H",
		categories: ["Leaks", "Install", "+3 more"],
		color: "#FFEDD5",
		iconColor: "#EA580C",
		url: "/",
	},
];

export default function Services() {
	return (
		<Section id="services">
			<Container>
				<SectionTitle
					title="What service do you need?"
					subtitle="No matter the project, the right professional is here."
				/>
				<Grid cols={3}>
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							description={service.description}
							Icon={(props) => <service.Icon {...props} className={`text-[${service.iconColor}]`}
																						 style={{color: service.iconColor}}/>}
							price={service.price}
							categories={service.categories}
							url={service.url}
							color={service.color}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	);
}
