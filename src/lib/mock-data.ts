import amaraImage from "@/assets/amara.jpg";
import devonImage from "@/assets/devon.jpg";
import priyaImage from "@/assets/priya.jpg";
import jordanImage from "@/assets/jordan.jpg";

export type Caregiver = {
  id: string;
  name: string;
  initials: string;
  image: string;
  role: string;
  neighborhood: string;
  distance: string;
  rating: string;
  reviews: number;
  rate: number;
  bio: string;
  tags: string[];
  badges: string[];
  available: string;
  experience: string;
  response: string;
};

export const caregivers: Caregiver[] = [
  {
    id: "amara",
    name: "Amara Reynolds",
    initials: "AR",
    image: amaraImage,
    role: "Nanny & newborn care",
    neighborhood: "Brooklyn, NY",
    distance: "0.8 mi",
    rating: "5.0",
    reviews: 34,
    rate: 24,
    bio: "Gentle, punctual, and a real calm-down wizard for toddlers. I love building routines that make families feel at ease.",
    tags: ["Newborns", "Twins", "Overnight"],
    badges: ["Background checked", "CPR certified"],
    available: "Today · Tomorrow",
    experience: "7 years",
    response: "Usually replies in 10 min",
  },
  {
    id: "devon",
    name: "Devon Marsh",
    initials: "DM",
    image: devonImage,
    role: "Babysitter & tutor",
    neighborhood: "Park Slope, NY",
    distance: "1.4 mi",
    rating: "4.9",
    reviews: 28,
    rate: 22,
    bio: "First-aid certified and endlessly patient with first-timers. I bring homework help, crafts, and a calm presence.",
    tags: ["Homework help", "Arts & crafts", "Pets"],
    badges: ["Identity verified", "First aid certified"],
    available: "Today · Wed, Jun 12",
    experience: "5 years",
    response: "Usually replies in 24 min",
  },
  {
    id: "priya",
    name: "Priya Nair",
    initials: "PN",
    image: priyaImage,
    role: "Special needs caregiver",
    neighborhood: "Cobble Hill, NY",
    distance: "1.8 mi",
    rating: "4.9",
    reviews: 46,
    rate: 30,
    bio: "Detail-focused care for little ones who need a little more patience, structure, and play in their day.",
    tags: ["Infants", "Sensory play", "Evenings"],
    badges: ["Background checked", "Specialist trained"],
    available: "Thu · Fri",
    experience: "9 years",
    response: "Usually replies in 1 hr",
  },
  {
    id: "jordan",
    name: "Jordan Kim",
    initials: "JK",
    image: jordanImage,
    role: "Nanny & outdoor play",
    neighborhood: "Fort Greene, NY",
    distance: "2.1 mi",
    rating: "4.8",
    reviews: 19,
    rate: 20,
    bio: "Outdoor play, big energy, and bilingual story time. I keep kids moving, curious, and cared for.",
    tags: ["Outdoor play", "Toddlers", "Bilingual"],
    badges: ["Background checked", "CPR certified"],
    available: "Thu, Jun 13 · Fri, Jun 14",
    experience: "4 years",
    response: "Usually replies in 18 min",
  },
];

const firstCaregiver = caregivers[0];
const secondCaregiver = caregivers[1];
const thirdCaregiver = caregivers[2];

if (!firstCaregiver || !secondCaregiver || !thirdCaregiver) {
  throw new Error("Kiddocare demo data requires at least three caregivers.");
}

export const primaryCaregiver = firstCaregiver;

export const bookings = [
  {
    id: "book-1",
    caregiver: firstCaregiver,
    date: "Thu, Jun 13",
    time: "8:00 pm – 7:00 am",
    type: "Overnight care",
    status: "Confirmed",
    total: "$264",
  },
  {
    id: "book-2",
    caregiver: secondCaregiver,
    date: "Sat, Jun 15",
    time: "3:30 pm – 7:00 pm",
    type: "After-school care",
    status: "Pending",
    total: "$77",
  },
];

export const messages = [
  {
    id: "m1",
    caregiver: firstCaregiver,
    preview: "I can bring the sensory play kit we talked about.",
    time: "10:42 AM",
    unread: true,
  },
  {
    id: "m2",
    caregiver: secondCaregiver,
    preview: "Thanks for sending over the bedtime routine!",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "m3",
    caregiver: thirdCaregiver,
    preview: "Thursday at 5 works perfectly for me.",
    time: "Mon",
    unread: false,
  },
];

export const upcomingDays = [
  { day: "MON", date: "10", state: "open" },
  { day: "TUE", date: "11", state: "open" },
  { day: "WED", date: "12", state: "selected" },
  { day: "THU", date: "13", state: "open" },
  { day: "FRI", date: "14", state: "open" },
  { day: "SAT", date: "15", state: "quiet" },
  { day: "SUN", date: "16", state: "quiet" },
];
