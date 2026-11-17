import { brands } from "./brands";

// PLACEHOLDER phone number. Replace both values before this page goes live.
const PHONE = "+12025550142";
const PHONE_DISPLAY = "(202) 555-0142";

export const chimney = {
  slug: "chimney",
  name: "DMV Chimney & Airduct",
  phone: PHONE,
  phoneDisplay: PHONE_DISPLAY,
  // Same lead inbox as the garage brands until the owner supplies another.
  email: brands.dmv.email,
  area: "DC, Maryland & Virginia",
  facts: [
    "Licensed and insured",
    "Same-day appointments, seven days a week",
    "Free estimates",
  ],
  services: {
    repair: {
      id: "repair",
      level: "Roof",
      title: "Chimney repair",
      body: "The top of the stack takes the weather. When the cap, the crown or the mortar joints give out, water gets into the flue and the brick.",
      items: [
        "Chimney caps",
        "Crowns",
        "Flue liners",
        "Brick and mortar joints (tuckpointing)",
        "Leak repair",
      ],
    },
    ducts: {
      id: "ducts",
      level: "Upper floor",
      title: "Air duct cleaning",
      body: "Every room is fed by ducts that run through the floors and walls. Dust settles inside them and gets pushed back into the house each time the system runs.",
      items: ["Whole-home HVAC ducts", "Supply and return runs", "Vents and registers"],
    },
    sweep: {
      id: "sweep",
      level: "Ground floor",
      title: "Chimney sweep and inspection",
      body: "Burning wood leaves creosote on the walls of the flue. It is flammable, and every fire adds to it.",
      items: [
        "Sweep from the firebox to the cap",
        "Creosote removal",
        "Camera inspection of the flue",
        "Safety inspection",
      ],
    },
    dryer: {
      id: "dryer",
      level: "Basement",
      title: "Dryer vent cleaning",
      body: "Lint that gets past the trap collects in the line between the dryer and the outside wall. A clogged line makes the dryer run longer and is a fire risk.",
      items: ["Lint removed from the whole vent line", "Lower fire risk"],
    },
  },
  formServices: [
    "Chimney sweep and inspection",
    "Chimney repair",
    "Air duct cleaning",
    "Dryer vent cleaning",
    "Not sure yet",
  ],
  faqs: [
    {
      question: "Which areas do you cover?",
      answer:
        "Washington DC, Maryland and Virginia. Call with your address and we will tell you when we can be there.",
    },
    {
      question: "Can you come today?",
      answer:
        "We book same-day appointments seven days a week. Call to check today's openings.",
    },
    {
      question: "Is the estimate free?",
      answer: "Yes. Estimates are free.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. DMV Chimney & Airduct is licensed and insured.",
    },
    {
      question: "How do I know my chimney needs a sweep?",
      answer:
        "Common signs are a smoky smell when the fireplace is not in use, smoke coming back into the room, or black flaky deposits in the firebox. An inspection tells you for certain.",
    },
  ],
} as const;

export type ChimneyService = (typeof chimney.services)[keyof typeof chimney.services];
