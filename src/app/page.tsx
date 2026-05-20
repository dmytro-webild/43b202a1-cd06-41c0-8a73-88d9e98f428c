"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, CheckCircle, Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="AJCuts"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Precision Cuts for the Modern Gentleman"
      description="At AJCuts, we combine traditional techniques with contemporary styling to deliver the perfect cut every time."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-barber-shop_23-2149141768.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94764.jpg",
          alt: "Man getting his beard shaved with razor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/barber-thinking-hairstyle-customer_23-2148298291.jpg",
          alt: "Barber thinking of a hairstyle for customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205873.jpg",
          alt: "Hairdresser grooming their client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-hairstilyst-giving-haircut_23-2148506294.jpg",
          alt: "Front view of hairstilyst giving a haircut",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bearded-hipster-male-with-stylish-haircut-sits-chair-hairdresser-s-salon_613910-13412.jpg",
          alt: "Portrait of a bearded hipster male with stylish haircut",
        },
      ]}
      avatarText="Trusted by 1000+ local clients"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Crafted with Excellence"
      description="AJCuts isn't just a barbershop; it's a legacy of style. We pride ourselves on attention to detail and a welcoming atmosphere."
      bulletPoints={[
        {
          title: "Precision Tools",
          description: "We use only professional-grade equipment for every service.",
        },
        {
          title: "Expert Stylists",
          description: "Our team is highly trained in all modern grooming techniques.",
        },
        {
          title: "Classic Atmosphere",
          description: "Relax in a space designed for comfort and conversation.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hairdressing-chair-vintage-barber-shop_23-2148298304.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Classic Cut",
          description: "Timeless style customized for your face shape.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-trimming-customer-hair_23-2148257012.jpg",
        },
        {
          title: "Modern Fade",
          description: "Sharp lines and clean blending for the modern look.",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-barber-washing-old-man-hair-backwash_23-2148181935.jpg",
        },
        {
          title: "Beard Grooming",
          description: "Full beard shape-up, trim, and conditioning.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-hands-trimming-beard-man_23-2147778822.jpg",
        },
      ]}
      title="Our Signature Services"
      description="From classic fades to premium beard grooming, we offer comprehensive services to keep you looking your best."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "1",
          name: "Marcus",
          role: "Head Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/stressed-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-touching-temples-with-combs-with-closed-eyes-isolated-orange-background_141793-88049.jpg",
        },
        {
          id: "2",
          name: "Julian",
          role: "Senior Stylist",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-barber-client-towel_23-2147736962.jpg",
        },
        {
          id: "3",
          name: "Leo",
          role: "Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-hardworking-man-his-own-studio_1153-5359.jpg",
        },
      ]}
      title="Meet the Artists"
      description="Our skilled barbers bring years of expertise to your chair."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          title: "Years Experience",
          description: "Crafting excellence since day one.",
          icon: Award,
        },
        {
          id: "m2",
          value: "10k+",
          title: "Cuts Completed",
          description: "Every cut a success story.",
          icon: Scissors,
        },
        {
          id: "m3",
          value: "99%",
          title: "Customer Satisfaction",
          description: "Your style, our priority.",
          icon: CheckCircle,
        },
      ]}
      title="By The Numbers"
      description="Excellence defined by experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alex R.",
          role: "Local Professional",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-speaking-phone-grey-wall_176420-23.jpg",
        },
        {
          id: "2",
          name: "David L.",
          role: "Regular",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/appearance-young-man-grey-tshirt-looking-his-reflection-mirror_259150-57866.jpg",
        },
        {
          id: "3",
          name: "Sam K.",
          role: "Enthusiast",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-barber-holding-scissors-barbershop_23-2148985743.jpg",
        },
        {
          id: "4",
          name: "Brian M.",
          role: "Loyal Customer",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-pink-background_23-2149486794.jpg",
        },
        {
          id: "5",
          name: "Kevin T.",
          role: "Visitor",
          company: "Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-male-barber-uniform-combing-hair-holding-spray-bottle-isolated-white_141793-73091.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Avg Rating",
        },
        {
          value: "100%",
          label: "Retention",
        },
        {
          value: "Daily",
          label: "Service",
        },
      ]}
      title="Hear From Our Clients"
      description="We are proud to serve our community and appreciate every review."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do I need an appointment?",
          content: "Yes, we recommend booking online for guaranteed service.",
        },
        {
          id: "f2",
          title: "What services do you offer?",
          content: "We offer haircuts, beard trims, shaves, and grooming products.",
        },
        {
          id: "f3",
          title: "Where are you located?",
          content: "Visit us at our central shop, or check the address in the footer.",
        },
      ]}
      sideTitle="Questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Visit Us"
      title="Ready for a fresh look?"
      description="Book your appointment online or walk in and join the queue."
      imageSrc="http://img.b2bpic.net/free-photo/front-view-male-waiter-holding-welcome-sign_23-2148581181.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="AJCuts"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Book Appointment",
              href: "#contact",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Meet the Team",
              href: "#team",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
