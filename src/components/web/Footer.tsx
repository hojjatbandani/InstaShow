import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {
  XIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/icons";
import SocialIcons from "@/components/ui/SocialIcons";
import { FC } from "react";
import { IconProps } from "@/components/icons";
import { Container, Flex, Button, Grid } from "@/components/ui";
import CanadImage from "@/assets/web/images/Canada.png";

const footerLinks = {
  Services: [
    { label: "Plumbing", href: "#" },
    { label: "Electrical", href: "#" },
    { label: "Cleaning", href: "#" },
    { label: "HVAC", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

interface SocialLink {
  Icon: FC<IconProps>;
  url: string;
}

const socialLinks: SocialLink[] = [
  { Icon: TikTokIcon, url: "#" },
  { Icon: LinkedInIcon, url: "#" },
  { Icon: XIcon, url: "#" },
  { Icon: InstagramIcon, url: "#" },
  { Icon: YouTubeIcon, url: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FCFCFC]">
      <Container className="py-8 md:py-14">
        <div className="border border-[#F2F2F2] rounded-2xl bg-white">
          {/* Newsletter */}
          <Flex
            justify="between"
            align="center"
            direction="col"
            mdDirection="row"
            gap="lg"
            className="py-8 md:py-10 px-6 md:px-8"
          >
            <Flex
              direction="col"
              align="center"
              gap="none"
              className="md:items-start text-center md:text-start"
            >
              <p className="text-xl md:text-2xl text-colors-primary">
                Join our newsletter
              </p>
              <span className="text-sm md:text-base text-colors-muted">
                Get Updates from Instafix
              </span>
            </Flex>
            <div className="w-full md:w-auto">
              <form
                action="/"
                method="post"
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-base text-colors-muted border border-[#F2F2F2] rounded-lg px-4 md:px-6 py-3
                  focus:outline-none focus:ring-1 focus:ring-blue-500 w-full md:w-60 lg:w-80 bg-[#FCFCFC]"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  weight="light"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </Flex>

          <div className="border-b border-[#EEEEEE] mx-4 md:mx-8" />

          {/* Links Section */}
          <div className="py-8 md:py-10 px-6 md:px-8">
            <Flex direction="col" lgDirection="row" gap="xl">
              {/* Brand */}
              <div className="lg:max-w-xs shrink-0">
                <Link href="/" className="flex items-center gap-2.5 mb-4">
                  <Image src={logo} alt="logo" />
                </Link>
                <p className="text-colors-muted text-sm md:text-base leading-relaxed mb-6">
                  Instafix simplifies repairs, connects trusted professionals,
                  and improves customer experience.
                </p>
              </div>

              {/* Footer Links */}
              <Grid cols={4} gap="lg" className="flex-1 w-full">
                {Object.entries(footerLinks).map(([title, links]) => (
                  <div className="" key={title}>
                    <h3 className="font-semibold text-colors-primary text-sm md:text-base mb-3 md:mb-4">
                      {title}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm md:text-base text-colors-muted hover:text-gray-900 transition"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Grid>
            </Flex>
          </div>

          <div className="border-b border-[#EEEEEE] mx-4 md:mx-8" />

          {/* Bottom */}
          <Flex
            justify="between"
            align="center"
            direction="col"
            mdDirection="row"
            gap="md"
            className="py-6 md:py-10 px-6 md:px-8"
          >
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              Proudly Canadian
              <Image
                src={CanadImage}
                alt="Canada"
                className="inline-block w-6 h-6 mx-1"
              />
              &copy; {new Date().getFullYear()} INSTAFIX TECHNOLOGIES INC. All
              rights reserved
            </p>
            <Flex gap="md" align="center">
              {socialLinks.map((social, index) => (
                <SocialIcons href={social.url} key={index}>
                  <social.Icon size="lg" className="text-gray-500" />
                </SocialIcons>
              ))}
            </Flex>
          </Flex>
        </div>
      </Container>
    </footer>
  );
}
