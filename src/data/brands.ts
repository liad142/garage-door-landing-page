export interface Review {
  name: string;
  initials: string;
  text: string;
}

export interface Service {
  title: string;
  description: string;
  discount: string;
  icon: string; // emoji
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BrandConfig {
  slug: string;
  name: string;
  phone: string;
  phoneDisplay: string;
  area: string;
  tagline: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
  heroImage: string;
  about: string;
  reviews: Review[];
  services: Service[];
  faqs: FAQ[];
}

export const brands: Record<string, BrandConfig> = {
  tom: {
    slug: "tom",
    name: "Tom Garage Doors",
    phone: "+17023305532",
    phoneDisplay: "(702) 330-5532",
    area: "Las Vegas & Summerlin, NV",
    tagline: "Las Vegas' Trusted Garage Door Experts",
    colors: {
      primary: "#E85D26",
      secondary: "#1A1A2E",
      accent: "#F5A623",
    },
    logo: "/images/logo-tom.png",
    heroImage: "/images/hero-tom.png",
    about: "Tom Garage Doors is a locally owned and operated garage door service company proudly serving Las Vegas and Summerlin. With years of experience in the industry, our skilled technicians deliver fast, reliable repairs and installations. We treat every home like our own, offering transparent pricing and quality craftsmanship you can count on.",
    reviews: [
      { name: "Mike R.", initials: "MR", text: "Called Tom Garage Doors when my spring broke at 7am. They were at my house in Summerlin by 9am and had it fixed within an hour. Incredible service and very fair pricing!" },
      { name: "Sandra T.", initials: "ST", text: "Best garage door company in Vegas! They installed a brand new Clopay door and it looks amazing. The crew was professional, clean, and finished ahead of schedule." },
      { name: "Carlos M.", initials: "CM", text: "I've used Tom Garage Doors twice now — once for a broken opener and once for a full tune-up. Both times the service was top-notch. Highly recommend to anyone in the Las Vegas area." },
      { name: "Jennifer K.", initials: "JK", text: "Our garage door was making terrible noises every time it opened. Tom's team diagnosed the issue quickly and had it running smooth and quiet in no time. Great experience!" },
      { name: "David L.", initials: "DL", text: "Honest, reliable, and affordable. They gave me a fair quote over the phone and the final price matched exactly. No surprises. Will definitely call again if needed." }
    ],
    services: [
      { title: "Garage Door Repair", description: "Fast, reliable repair for all garage door types. From panel damage to track alignment, we fix it all.", discount: "15% off for new customers", icon: "🔧", image: "/images/service-repair-new.png" },
      { title: "Spring Repair & Replacement", description: "Broken spring? We carry all spring types and sizes for same-day replacement.", discount: "18% off", icon: "🔩", image: "/images/service-spring.png" },
      { title: "Opener Repair & Installation", description: "Expert repair and installation of all major opener brands including LiftMaster and Chamberlain.", discount: "15% off", icon: "⚙️", image: "/images/service-opener.png" },
      { title: "New Door Installation", description: "Upgrade your home's curb appeal with a brand new garage door. Premium brands at competitive prices.", discount: "10% off", icon: "🏠", image: "/images/service-installation.png" }
    ],
    faqs: [
      { question: "How quickly can you come for a repair?", answer: "We offer same-day service throughout Las Vegas and Summerlin. In most cases, we can be at your door within 1-2 hours of your call." },
      { question: "How often should I have my garage door serviced?", answer: "We recommend a professional tune-up at least once a year to keep your door running smoothly and to catch small issues before they become costly repairs." },
      { question: "Why is my garage door making loud noises?", answer: "Noisy doors are usually caused by worn rollers, loose hardware, or a lack of lubrication. Our technicians can diagnose and fix the issue quickly." },
      { question: "Can I replace just one panel of my garage door?", answer: "Yes! In many cases, individual panels can be replaced without needing a full door replacement. We'll assess the damage and give you the most cost-effective solution." },
      { question: "What brands do you work with?", answer: "We service and install all major brands including Clopay, Amarr, Wayne Dalton, LiftMaster, and Chamberlain." },
      { question: "Do you offer free estimates?", answer: "Absolutely! Contact us for a free, no-obligation quote on any repair or installation service." }
    ]
  },
  elite: {
    slug: "elite",
    name: "Elite Garage Doors",
    phone: "+18186168062",
    phoneDisplay: "(818) 616-8062",
    area: "Valencia & Santa Clarita, CA",
    tagline: "Valencia's Premier Garage Door Service",
    colors: {
      primary: "#1B4D8E",
      secondary: "#0D1B2A",
      accent: "#D4A843",
    },
    logo: "/images/logo-elite.svg",
    heroImage: "/images/hero-elite.png",
    about: "Elite Garage Doors is Valencia's premier garage door service provider. We bring a level of professionalism and attention to detail that sets us apart. Our certified technicians handle everything from emergency repairs to full custom installations, ensuring your home always looks its best and operates flawlessly.",
    reviews: [
      { name: "Jennifer L.", initials: "JL", text: "Elite Garage Doors replaced our 20-year-old door with a beautiful new insulated model. The difference in curb appeal and energy efficiency is remarkable. Top-tier service in Valencia!" },
      { name: "David K.", initials: "DK", text: "My garage door opener stopped working on a Sunday. Called Elite and they had someone out within two hours. Fixed it fast and the price was very reasonable. Five stars!" },
      { name: "Maria G.", initials: "MG", text: "Incredibly professional team. They walked me through all my options for spring replacement, explained the pricing upfront, and did a flawless job. Best in Santa Clarita!" },
      { name: "Robert P.", initials: "RP", text: "We had Elite install a new LiftMaster opener and the difference is night and day. Whisper quiet, fast, and the WiFi connectivity is a great bonus. Highly recommend!" },
      { name: "Lisa W.", initials: "LW", text: "Used their $69 tune-up special and couldn't be happier. The tech found a worn cable that could have snapped and replaced it on the spot. Saved me from a bigger problem down the road." }
    ],
    services: [
      { title: "Garage Door Repair", description: "Comprehensive repair service for all door types and brands. Fast diagnostics and lasting solutions.", discount: "15% off for new customers", icon: "🔧", image: "/images/service-repair-new.png" },
      { title: "Spring Repair & Replacement", description: "Expert torsion and extension spring service. We stock all sizes for fast same-day turnaround.", discount: "18% off", icon: "🔩", image: "/images/service-spring.png" },
      { title: "Opener Repair & Installation", description: "From belt-drive to chain-drive, we install and repair all opener types with precision.", discount: "15% off", icon: "⚙️", image: "/images/service-opener.png" },
      { title: "New Door Installation", description: "Transform your home with a premium new garage door. Custom styles and colors available.", discount: "10% off", icon: "🏠", image: "/images/service-installation.png" }
    ],
    faqs: [
      { question: "How quickly can you come for a repair?", answer: "We provide same-day service throughout Valencia and Santa Clarita. Most calls are answered within 1-2 hours." },
      { question: "How often should I have my garage door serviced?", answer: "Annual maintenance is recommended to extend the life of your door and prevent unexpected breakdowns." },
      { question: "Why is my garage door making loud noises?", answer: "Common causes include worn rollers, dry hinges, or loose track hardware. A quick tune-up usually resolves the issue." },
      { question: "Can I replace just one panel of my garage door?", answer: "In most cases, yes. We'll evaluate the damage and recommend the most affordable repair option." },
      { question: "What brands do you work with?", answer: "We install and service Clopay, Amarr, Wayne Dalton, LiftMaster, Chamberlain, Genie, and more." },
      { question: "Do you offer free estimates?", answer: "Yes! We offer free on-site estimates for all installation and major repair work." }
    ]
  },
  dmv: {
    slug: "dmv",
    name: "EliteDMV Garage Doors",
    phone: "+17477741074",
    phoneDisplay: "(747) 774-1074",
    area: "Silver Spring & Greater DMV Area, MD",
    tagline: "The DMV's Most Reliable Garage Door Team",
    colors: {
      primary: "#2D6A4F",
      secondary: "#1B1B2F",
      accent: "#B0B0B0",
    },
    logo: "/images/logo-dmv.svg",
    heroImage: "/images/hero-dmv.png",
    about: "EliteDMV Garage Doors serves Silver Spring, Bethesda, and the greater DMV area with dependable, high-quality garage door services. We understand that your garage door is one of the most important features of your home — that's why we deliver prompt, professional service backed by years of experience and a commitment to customer satisfaction.",
    reviews: [
      { name: "Brian W.", initials: "BW", text: "EliteDMV was a lifesaver! Our garage door got stuck open during a rainstorm and they came out to Silver Spring within an hour. Fixed the track issue and everything works perfectly now." },
      { name: "Aisha P.", initials: "AP", text: "Very impressed with the professionalism of this team. They installed a new insulated door at our Bethesda home and it looks fantastic. Fair pricing and excellent communication throughout." },
      { name: "Robert H.", initials: "RH", text: "I've tried other garage door companies in the DMV area, but none compare to EliteDMV. They're honest, on time, and their work quality is outstanding. My go-to from now on." },
      { name: "Patricia M.", initials: "PM", text: "Got the $69 tune-up and it was well worth it. The technician lubricated everything, tightened all the bolts, and tested the safety features. Door runs like new!" },
      { name: "James T.", initials: "JT", text: "Needed emergency spring replacement and they handled it the same day. The tech explained everything clearly and the price was exactly what was quoted. No hidden fees. Highly recommend!" }
    ],
    services: [
      { title: "Garage Door Repair", description: "Full-service garage door repair for homes across the DMV area. Quick response and reliable fixes.", discount: "15% off for new customers", icon: "🔧", image: "/images/service-repair-new.png" },
      { title: "Spring Repair & Replacement", description: "Broken springs are our specialty. Fast, safe replacement with high-cycle springs built to last.", discount: "18% off", icon: "🔩", image: "/images/service-spring.png" },
      { title: "Opener Repair & Installation", description: "We service and install all leading opener brands. Smart home compatible options available.", discount: "15% off", icon: "⚙️", image: "/images/service-opener.png" },
      { title: "New Door Installation", description: "Enhance your home with a new garage door. We offer a wide selection of styles, materials, and colors.", discount: "10% off", icon: "🏠", image: "/images/service-installation.png" }
    ],
    faqs: [
      { question: "How quickly can you come for a repair?", answer: "We offer same-day service across Silver Spring, Bethesda, and the greater DMV area. We're typically at your home within 1-2 hours." },
      { question: "How often should I have my garage door serviced?", answer: "We recommend scheduling a professional tune-up once a year to maintain peak performance and safety." },
      { question: "Why is my garage door making loud noises?", answer: "Noisy operation is usually due to worn-out rollers, dry bearings, or loose mounting brackets. A tune-up will fix most noise issues." },
      { question: "Can I replace just one panel of my garage door?", answer: "Yes, single panel replacement is often possible and much more affordable than a full door replacement. We'll advise the best option." },
      { question: "What brands do you work with?", answer: "We work with all major manufacturers including Clopay, Amarr, CHI, LiftMaster, Chamberlain, and Genie." },
      { question: "Do you offer free estimates?", answer: "Yes! Contact us today for a free, no-obligation estimate on any service." }
    ]
  }
};
