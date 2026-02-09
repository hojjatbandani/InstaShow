"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "@/types";
import avatar1 from "@/assets/images/avatarImages/Avatar_Image_1.png";
import avatar2 from "@/assets/images/avatarImages/Avatar_Image_2.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/assets/css/swiper.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Section, SectionTitle, Flex, Badge } from "@/components/ui";

const testimonials: Testimonial[] = [
  {
    rating: 1,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 2,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 3,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 4,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 5,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar1,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
  {
    rating: 4,
    content:
      "InstaFix made finding a reliable plumber so easy. The booking process was seamless and the professional arrived on time. Highly recommend!",
    image: avatar2,
    name: "Sarah Mitchell",
    catrogores: ["plumbing", "Leak Repair"],
  },
];

export default function Testimonials() {
  return (
    <Section id="reviews">
      <div className="mx-auto w-full px-6">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Do not just take our word for it. Here is what our customers have to say"
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mb-12 mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl px-8 py-10 shadow-sm border border-gray-200 w-80"
            >
              <Flex gap="sm" className="mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </Flex>

              <p className="text-[18px] text-colors-primary">
                {`"${testimonial.content}"`}
              </p>

              <Flex align="center" gap="md" className="py-6">
                <Flex align="center" justify="center" className="w-15 h-15 rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                  />
                </Flex>
                <div>
                  <p className="font-semibold text-gray-900 text-xl">
                    {testimonial.name}
                  </p>
                </div>
              </Flex>
              <Flex align="center" gap="sm">
                {testimonial.catrogores?.map((cat, idx) => (
                  <Badge key={idx} variant="outline">
                    {cat}
                  </Badge>
                ))}
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
