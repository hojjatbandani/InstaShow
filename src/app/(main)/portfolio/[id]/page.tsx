import type { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  Button,
  Container,
  Flex,
  Grid,
  Section,
} from "@/components/ui";
import {
  BadgeCheckIcon,
  CalenderIcon,
  CheckCircleIcon,
  DryWallIcon,
  FinalIcon,
  FramingIcon,
  HomeIcon,
  LocationIcon,
  PermitIcon,
  StarIcon,
} from "@/components/icons";

// Placeholder avatar
import Avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_1.png";

export const metadata: Metadata = {
  title: "Project Details",
};

// Mock project data - in real app this would come from API/database
const project = {
  id: 1,
  title: "Modern Legal Suite Conversion",
  location: "Calgary, AB (Varsity)",
  completedDate: "Nov 2023",
  category: "Legal Basement Suite",
  breadcrumb: [
    { label: "Projects", href: "/portfolio" },
    { label: "Basement Renovations", href: "/portfolio?category=basement" },
    { label: "Varsity Legal Suite" },
  ],
  images: {
    main: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        label: "Before: Unfinished",
      },
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        label: "During: Framing",
      },
    ],
  },
  contractor: {
    name: "Apex Renovations Ltd.",
    avatar: Avatar1,
    verified: true,
    Insured: true,
    rating: 4.9,
    reviews: 42,
  },
  details: {
    budget: "$62,000",
    duration: "8 Weeks",
    yearBuilt: "2023",
    sqft: "950 sq.ft",
    permitType: "Secondary Suite",
  },
  overview: [
    "This project involved transforming a 950 sq.ft unfinished basement into a fully legal secondary suite in the Varsity neighborhood of Calgary. The goal was to create a bright, modern living space suitable for long-term tenants while maximizing the property value.",
    "Key challenges included rerouting main plumbing lines and upgrading the electrical panel to support a second kitchen. The final result features a separate side entrance, soundproof insulation between floors and high-durability vinyl plank flooring.",
  ],
  features: [
    {
      title: "Separate Entrance",
      description: "Secure side entry with fire-rated door.",
    },
    {
      title: "Soundproofing",
      description: "R20 insulation + resilient channel ceiling.",
    },
    {
      title: "Custom Kitchen",
      description: "Quartz countertops and soft-close cabinets.",
    },
    {
      title: "Egress Windows",
      description: "Enlarged windows for bedroom safety.",
    },
  ],
  timeline: [
    {
      week: "Week 1-2",
      title: "Permits & Demolition",
      description:
        "Acquired development permit from City of Calgary. Cleared existing framing and rough-ins.",
      Icon: PermitIcon,
    },
    {
      week: "Week 3-4",
      title: "Framing & Mechanical",
      description:
        "Framed bedrooms and bathroom. Installed HVAC ducting and new electrical sub-panel.",
      Icon: FramingIcon,
    },
    {
      week: "Week 5-7",
      title: "Drywall & Finishes",
      description:
        "Insulation, poly vapour barrier, boarding, taping, and painting. Installed flooring.",
      Icon: DryWallIcon,
    },
    {
      week: "Week 8",
      title: "Final Inspection",
      description:
        "Passed final city inspections. Installed fixtures, appliances, and final cleanup.",
      Icon: FinalIcon,
    },
  ],
  documents: [
    { name: "Floorplan.pdf", size: "1.2 MB" },
    { name: "Material List", size: "540 KB" },
  ],
};

export default function ProjectDetail() {
  return (
    <>
      {/* Breadcrumb */}
      <Section
        spacing="none"
        className="pt-24 pb-0 md:pt-28 mb-0"
        bgColor="#F7FAFB"
      >
        <Container size="xl">
          <Breadcrumb items={project.breadcrumb} />
        </Container>
      </Section>

      {/* Main Content */}
      <Section spacing="none" className="pb-12 pt-6 md:pb-20" bgColor="#F7FAFB">
        <Container size="xl">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B2B] mb-6">
            {project.title}
          </h1>
          <Flex
            wrap={true}
            gap="md"
            align="center"
            className="text-sm text-colors-muted mb-6 md:mb-8"
          >
            <span className="flex items-center gap-1">
              <LocationIcon size={14} className="text-[#0066CC]" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <CalenderIcon size={14} className="text-[#0066CC]" />
              Completed {project.completedDate}
            </span>
            <span className="flex items-center gap-1">
              <HomeIcon size={14} className="text-[#0066CC]" />
              {project.category}
            </span>
          </Flex>

          <Flex direction="col" lgDirection="row" gap="lg">
            {/* Left - Images */}
            <div className="w-full lg:w-2/3">
              {/* Main Image */}
              <div className="relative min-h-[200px] md:h-[480px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.images.main}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-semibold text-[#0F172A]">
                  After Completion
                </span>
              </div>
              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-2 gap-4">
                {project.images.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-52 sm:h-40 md:h-72 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 rounded text-xs text-white">
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Project Overview */}
              <div className="w-full my-12">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0B1B2B] mb-4">
                  Project Overview
                </h2>
                {project.overview.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-colors-muted text-sm md:text-base leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Key Features */}
              <div className="w-full my-12">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-6">
                  Key Features
                </h2>
                <Grid gap="sm" cols={2} className="">
                  {project.features.map((feature, idx) => (
                    <Flex
                      gap="md"
                      align="start"
                      direction="row"
                      key={idx}
                      className="bg-[#F1F5F9] rounded-lg p-4"
                    >
                      <CheckCircleIcon
                        size="lg"
                        className="text-[#0066CC] flex-shrink-0 mt-0.5"
                      />
                      <Flex gap="sm" align="start" direction="col">
                        <h3 className="font-semibold text-[#0F172A] text-sm">
                          {feature.title}
                        </h3>
                        <p className="text-colors-muted text-[13px]">
                          {feature.description}
                        </p>
                      </Flex>
                    </Flex>
                  ))}
                </Grid>
              </div>
              {/* Project Timeline */}
              <div className="w-full my-12">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A] mb-6">
                  Project Timeline
                </h2>
                <div className="w-full">
                  {project.timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-full bg-[#FFB020] flex items-center justify-center text-[#3B82F6]">
                          <item.Icon size="lg" />
                        </div>
                        {idx < project.timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200" />
                        )}
                      </div>
                      <div className="flex-1 pb-10">
                        <span className="text-[#0066CC] text-xs font-semibold uppercase mb-1">
                          {item.week}
                        </span>
                        <h3 className="font-semibold text-[#0B1B2B] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-colors-muted text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Project Documents */}
              <div className="w-full my-12">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0B1B2B] mb-6">
                  Project Documents
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.documents.map((doc, idx) => (
                    <button
                      key={idx}
                      className="flex items-center gap-3 bg-transparent border border-gray-200 rounded-lg px-4 py-3 hover:border-[#3B82F6] transition"
                    >
                      <svg
                        className="w-8 h-8 text-[#3B82F6]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="text-sm font-medium text-[#0B1B2B]">
                          {doc.name}
                        </p>
                        <p className="text-xs text-colors-muted">{doc.size}</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-colors-muted ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* Contractor Card */}
              <div className="rounded-xl border border-gray-200 p-5 md:p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <Image
                    src={project.contractor.avatar}
                    alt={project.contractor.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-[#0F172A] text-lg">
                    {project.contractor.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {project.contractor.verified && (
                      <div className="flex items-center bg-[#FFB020] px-2 py-2 rounded-full">
                        <BadgeCheckIcon size="md" className="text-[#0066CC]" />
                        <span className=" text-[#0066CC] text-xs">
                          Verified Pro
                        </span>
                      </div>
                    )}

                    {project.contractor.Insured && (
                      <div className="flex items-center bg-[#0066CC] px-2 py-2 rounded-full gap-1">
                        <BadgeCheckIcon size="sm" className="text-white" />
                        <span className="text-white text-xs">Insured</span>
                      </div>
                    )}

                    <div className="flex items-center bg-[#DCFCE7] px-2 py-2 rounded-full gap-1">
                      <StarIcon size="sm" className="text-[#166534]" />
                      <span className="text-[#166534] text-xs">
                        {project.contractor.rating}
                      </span>
                      <span className="text-[#166534] text-xs">
                        ({project.contractor.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="primary" size="lg" className="w-full mb-3">
                  Contact Contractor
                </Button>
                <Button variant="outline" size="md" className="w-full">
                  View Profile
                </Button>
              </div>

              {/* Project Details */}
              <div className="rounded-xl border border-gray-200 p-5 md:p-6">
                <h3 className="font-semibold text-[#0B1B2B] mb-4">
                  Project Details
                </h3>
                <div className="space-y-5">
                  {Object.entries({
                    "Total Budget": project.details.budget,
                    Duration: project.details.duration,
                    "Year Built": project.details.yearBuilt,
                    "Square Footage": project.details.sqft,
                    "Permit Type": project.details.permitType,
                  }).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between text-sm pb-5 border-gray-300 border-b last:border-b-0 last:pb-0"
                    >
                      <span className="text-colors-muted">{label}</span>
                      <span className="font-medium text-[#0B1B2B]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspired CTA */}
              <div className="bg-gradient-to-r from-btn-primary-from to-btn-primary-to rounded-xl p-5 md:p-6 text-white">
                <h3 className="font-semibold mb-2">Inspired by this?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Get accurate quotes from top-rated local pros for your own
                  basement renovation.
                </p>
                <Button
                  variant="none"
                  size="md"
                  className="w-full bg-white text-[#3B82F6] hover:bg-gray-100"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
