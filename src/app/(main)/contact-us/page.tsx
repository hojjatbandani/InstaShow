import { EmailIcon, MessageIcon, QuestionIcon } from "@/components/icons";
import { IconProps } from "@/components/icons";
import { Button, Container, Flex, IconBox } from "@/components/ui";
import { FormGroup, Input, Label, Select, Textarea } from "@/components/form";
import { FC } from "react";

interface CartProps {
  Icon: FC<IconProps>;
  title: string;
  description: string;
  textLink: string;
  url: string;
}

const cartsData: CartProps[] = [
  {
    Icon: EmailIcon,
    title: "Email Support",
    description: "Our friendly team is here to help.",
    textLink: "support@InstaFix.ca",
    url: "/",
  },
  {
    Icon: MessageIcon,
    title: "Live Chat",
    description: "Available Mon-Fri, 9am - 5pm EST.",
    textLink: "Start a chat",
    url: "/",
  },
  {
    Icon: QuestionIcon,
    title: "Help Center",
    description: "Browse articles and tutorials.",
    textLink: "Visit Help Center",
    url: "/",
  },
];

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Support" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

const CustomCart = ({ Icon, title, description, url, textLink }: CartProps) => {
  return (
    <Flex
      direction="row"
      align="start"
      gap="md"
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6"
    >
      <IconBox size="sm" variant="rounded" bgColor="#FFB020">
        <Icon size="md" className="text-white" />
      </IconBox>
      <Flex direction="col" align="start" gap="sm">
        <h3 className="text-base text-colors-primary font-semibold">{title}</h3>
        <p className="text-sm font-light text-colors-muted">{description}</p>
        <a className="text-sm font-normal text-[#0066CC]" href={url}>
          {textLink}
        </a>
      </Flex>
    </Flex>
  );
};

export default function ContactPage() {
  return (
    <Container
      size="xl"
      bgColor="#F7FAFC"
      fullHeight
      className="pt-16 pb-20 mt-20"
    >
      <Flex direction="col" lgDirection="row" align="start" justify="between" gap="2xl">
        <Flex direction="col" gap="lg" className="w-full lg:w-1/2 mb-8">
          <span className="text-sm text-[#0066CC]">Support</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title">
            Get in touch with our team
          </h1>
          <p className="text-base text-colors-muted mb-8">
            {`Have questions about our services or need assistance with your
            account? We're here to help you get the most out of InstaFix.`}
          </p>
          {cartsData.map((cart, index) => (
            <CustomCart
              key={index}
              Icon={cart.Icon}
              title={cart.title}
              description={cart.description}
              textLink={cart.textLink}
              url={cart.url}
            />
          ))}
        </Flex>
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 bg-[#E6F0FF] rounded-xl">
          <p className="text-xl font-semibold text-colors-primary mb-6">
            Send us a message
          </p>
          <form action="" method="post">
            <Flex direction="col" gap="md">
              <FormGroup>
                <Label htmlFor="name" required>
                  Full Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Type your name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email" required>
                  Email Address
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject" required>
                  Subject
                </Label>
                <Select name="subject" id="subject" options={subjectOptions} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message" required>
                  Message
                </Label>
                <Textarea name="message" id="message" rows={4} required />
              </FormGroup>
              <Button type="submit" variant="primary" size="lg" weight="light">
                Send Message
              </Button>
            </Flex>
          </form>
        </div>
      </Flex>
    </Container>
  );
}
