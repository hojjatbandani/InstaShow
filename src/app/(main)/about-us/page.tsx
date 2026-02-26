import type { Metadata } from "next";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  IconBox,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
};
import Image from "next/image";
import aboutUsImage from "@/assets/web/images/about-us.png";
import founderMeeting from "@/assets/web/images/Founder_meeting.png";
import {
  ShieldCheckIcon,
  HeartHandIcon,
  ThunderIcon,
} from "@/components/icons";
import { IconProps } from "@/components/icons";
import { FC } from "react";
import teamMember1 from "@/assets/web/images/Team Members/Team Member 01.png";
import teamMember2 from "@/assets/web/images/Team Members/Team Member 02.png";
import teamMember3 from "@/assets/web/images/Team Members/Team Member 03.png";
import teamMember4 from "@/assets/web/images/Team Members/Team Member 04.png";

interface ValueItem {
  Icon: FC<IconProps>;
  title: string;
  description: string;
}

const items = [
  {
    title: "50K+",
    subTitle: "Projects Completed",
  },
  {
    title: "12k+",
    subTitle: "Verified Pros",
  },
  {
    title: "98%",
    subTitle: "Satisfaction Rate",
  },
  {
    title: "CA",
    subTitle: "Coast to Coast",
  },
];

const values: ValueItem[] = [
  {
    Icon: ShieldCheckIcon,
    title: "Trust First",
    description:
      "We rigorously vet every professional on our platform. Safety and reliability are non- negotiable for our community.",
  },
  {
    Icon: HeartHandIcon,
    title: "Community Driven",
    description:
      "We support local businesses and help neighborhoods thrive by connecting local talent with local needs.",
  },
  {
    Icon: ThunderIcon,
    title: "Simplicity",
    description:
      "Home improvement is complex; our platform shouldn't be. We obsess over making the process seamless.",
  },
];

const teamMembers = [
  {
    image: teamMember1,
    name: "Alex Chen",
    role: "CEO & Co-Founder",
  },
  {
    image: teamMember2,
    name: "Sarah Miller",
    role: "Chief Technology Officer",
  },
  {
    image: teamMember3,
    name: "David Okafor",
    role: "Head of Operations",
  },
  {
    image: teamMember4,
    name: "Emily Rossi",
    role: "Head of Product",
  },
];

export default function AboutPage() {
  return (
    <Section spacing="none" className="pt-24 md:pt-36 pb-12 md:pb-16">
      <Container size="xl">
        <div className="text-center max-w-[850px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-colors-primary mb-4 md:mb-6">
            Building Trust in Canadian Home Services
          </h1>
          <p className="text-colors-muted text-base sm:text-lg md:text-xl leading-relaxed">
            {`We're on a mission to connect homeowners with the most skilled,
          reliable, and verified professionals across the country.`}
          </p>
        </div>
        <Grid
          cols={1}
          gap="none"
          className="my-4 md:my-10 lg:my-20 rounded-lg overflow-hidden"
        >
          <Image
            src={aboutUsImage}
            alt="About Us Insta-Fix"
            className="w-full h-auto"
          />
        </Grid>
        <div className="mt-10 bg-[#F1F5F9] rounded-lg py-8 md:py-11 px-6 md:px-10">
          <Grid cols={4} gap="md">
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0069D6] mb-2">
                  {item.title}
                </h2>
                <p className="text-colors-muted text-sm md:text-base">
                  {item.subTitle}
                </p>
              </div>
            ))}
          </Grid>
        </div>

        <Flex
          direction="col"
          mdDirection="row"
          align="start"
          justify="between"
          gap="xl"
          className="my-12 md:my-20"
        >
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <span className="uppercase text-[#0069D6] text-xs">our story</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-colors-primary">
              It started with a leaky faucet and a frustrating search.
            </h2>
            <p className="text-sm md:text-base font-normal text-colors-muted">
              {`In 2018, our founder struggled to find a reliable plumber in
            Edmonton. The directories were outdated, reviews were unverified,
            and pricing was a mystery. He realized that Canadians deserved a
            better way to care for their most valuable asset—their home.`}
            </p>
            <p className="text-sm md:text-base font-normal text-colors-muted">
              {`InstaFix was built to bridge the gap between quality contractors and
            homeowners who care. We started with a simple promise: only verified
            pros, transparent pricing, and real reviews. Today, we're proud to
            be Canada's fastest-growing home services marketplace.`}
            </p>
          </div>
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={founderMeeting}
              alt="Founders Meeting"
              className="w-full h-auto rounded-lg"
            />
            <div
              className="hidden lg:block absolute left-0 bottom-0 w-[220px] p-6 rounded-lg bg-white shadow-lg
            text-sm font-light text-colors-primary transform translate-y-[30px] -translate-x-[20px]"
            >
              {`"We believe every renovation should be a celebration, not a headache."`}
            </div>
            <div
              className="lg:hidden absolute left-0 bottom-0 mt-4 p-4 w-[200px] transform translate-x-1/2 translate-y-1/2 rounded-lg bg-white shadow-lg
            text-sm font-light text-colors-primary"
            >
              {`"We believe every renovation should be a celebration, not a headache."`}
            </div>
          </div>
        </Flex>

        {/* Values */}
        <div className="text-center my-20 md:my-28">
          <h3 className="text-colors-primary text-2xl md:text-3xl font-semibold mb-2">
            Our Core Values
          </h3>
          <p className="text-colors-muted text-sm md:text-base">
            The principles that guide every decision we make.
          </p>
          <Grid cols={3} gap="lg" className="mt-8 md:mt-10 text-start">
            {values.map((value, index) => (
              <Card
                key={index}
                className="h-full border border-gray-200 rounded-lg"
              >
                <IconBox size="md" className="mb-4" bgColor="#FFB020">
                  <value.Icon size="lg" className="text-[#0069D6]" />
                </IconBox>
                <h4 className="text-lg md:text-xl font-semibold text-colors-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-colors-muted text-sm">{value.description}</p>
              </Card>
            ))}
          </Grid>
        </div>
        {/* Teams Member */}
        <div className="text-center my-16 md:my-28">
          <h3 className="text-colors-primary text-2xl md:text-3xl font-semibold mb-2">
            Meet our team
          </h3>
          <p className="text-colors-muted text-sm md:text-base font-normal">
            The team working behind the scenes to build InstaFix.
          </p>
          <Grid cols={4} gap="md" className="my-8 md:my-10">
            {teamMembers &&
              teamMembers.map((member, index) => (
                <Card key={index} className="h-full text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-colors-primary mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#0069D6] text-xs md:text-sm">
                    {member.role}
                  </p>
                </Card>
              ))}
          </Grid>
        </div>
        <div className="py-12 md:py-20 px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl text-center">
          <h4 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4 md:mb-6">
            Join the Mission
          </h4>
          <p className="text-base md:text-lg text-white max-w-[600px] mx-auto mb-6 md:mb-8">
            {`We're always looking for talented individuals who are passionate about
          transforming the home services industry.`}
          </p>
          <Button
            type="button"
            size="lg"
            weight="light"
            variant="none"
            className="bg-opacity-20 bg-white text-white"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
