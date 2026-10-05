import { Profile, Testimonial, StandForCard, MarqueeProduct } from '@/types';

import matthiasCardImg from '@/assets/images/card_matthias_1790977103900.jpg';
import johannaCardImg from '@/assets/images/card_johanna_1790977118147.jpg';
import simoneCardImg from '@/assets/images/card_simone_1790977134116.jpg';
import paulCardImg from '@/assets/images/card_paul_1790977146486.jpg';
import sarahCardImg from '@/assets/images/card_sarah_1790977156627.jpg';

import yasminImg from '@/assets/images/yasmin_clean_916_1790980492922.jpg';
import uweImg from '@/assets/images/profile_uwe_1790976747637.jpg';

export const HERO_PROFILES: Profile[] = [
  {
    id: 'matthias',
    name: 'MATTHIAS FINKEL',
    age: 25,
    country: 'Germany',
    flag: '🇩🇪',
    city: 'Berlin',
    isOnline: true,
    avatar: matthiasCardImg,
    bio: 'Photographer & urban explorer. Love candid film shots, techno music and late night coffee conversations.',
    interests: ['Photography', 'Music', 'Travel', 'Art'],
    likesCount: '14.2k',
    commentsCount: '620',
    sharesCount: '1.8k'
  },
  {
    id: 'johanna',
    name: 'JOHANNA KUEFER',
    age: 26,
    country: 'Chile',
    flag: '🇨🇱',
    city: 'Santiago',
    isOnline: true,
    avatar: johannaCardImg,
    bio: 'Architecture student & thrift hunter. Always up to chat about Scandinavian design, indie cinema, and hiking trails.',
    interests: ['Design', 'Cinema', 'Hiking', 'Books'],
    likesCount: '18.9k',
    commentsCount: '840',
    sharesCount: '2.1k'
  },
  {
    id: 'simone',
    name: 'SIMONE LANGE',
    age: 24,
    country: 'Liberia',
    flag: '🇱🇷',
    city: 'Monrovia',
    isOnline: true,
    avatar: simoneCardImg,
    bio: 'Creative director & vintage fashion enthusiast. Laughing 90% of the time, making moodboards the other 10%.',
    interests: ['Fashion', 'Creative', 'Festivals', 'Surfing'],
    likesCount: '24.5k',
    commentsCount: '1.2k',
    sharesCount: '3.4k'
  },
  {
    id: 'paul',
    name: 'PAUL KASTNER',
    age: 23,
    country: 'Congo',
    flag: '🇨🇩',
    city: 'Kinshasa',
    isOnline: true,
    avatar: paulCardImg,
    bio: 'Music producer & sound designer. Looking for genuine creative souls to exchange music tastes and stories.',
    interests: ['Audio', 'Synthwave', 'Coffee', 'Skateboarding'],
    likesCount: '9.8k',
    commentsCount: '410',
    sharesCount: '950'
  },
  {
    id: 'sarah',
    name: 'SARAH URNER',
    age: 22,
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Montreal',
    isOnline: true,
    avatar: sarahCardImg,
    bio: 'Illustrator & botanist. Plant mom with 40+ species. Let’s share cozy playlists and talk about creative hobbies!',
    interests: ['Plants', 'Illustration', 'Nature', 'Baking'],
    likesCount: '11.3k',
    commentsCount: '520',
    sharesCount: '1.2k'
  }
];

export const PHONE_PROFILE: Profile = {
  id: 'yasmin',
  name: 'Yasmin Cardoso',
  age: 23,
  country: 'United States',
  flag: '🇺🇸',
  city: 'New York City',
  isOnline: true,
  avatar: yasminImg,
  bio: 'Living in NYC! Passionate about street photography, foodie adventures, and meeting inspiring people around the world.',
  interests: ['Photography', 'City Life', 'Dance', 'Foodie'],
  likesCount: '12k',
  commentsCount: '500',
  sharesCount: '1.5k'
};

import girlWithSunglassesImg from '@/assets/images/card_girl_sunglasses_1790978472551.jpg';

export const PHONE_FRIEND_CARD = {
  name: 'Elena Vance',
  avatar: girlWithSunglassesImg,
  likes: '12k',
  comments: '500',
  shares: '1.5k'
};

export const UWE_PROFILE: Profile = {
  id: 'uwe',
  name: 'UWE SANGER',
  age: 22,
  country: 'Canada',
  flag: '🇨🇦',
  city: 'Vancouver',
  isOnline: true,
  avatar: uweImg,
  bio: 'Software engineer & digital artist. Always curious about futuristic design, late night deep chats, and film cameras.',
  interests: ['Tech', 'Coding', 'Digital Art', 'Anime'],
  likesCount: '15.6k',
  commentsCount: '780',
  sharesCount: '2.0k'
};

export const STAND_FOR_CARDS: StandForCard[] = [
  {
    id: '1',
    title: 'BRINGING PEOPLE CLOSER',
    description: 'Shaping meaningful connections and growth for the next generation.',
    bgClass: 'bg-white/95 border border-white/60 shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '2',
    title: 'SELF-WORTH AND CONFIDENCE',
    description: 'Creating a space where new friendships grow and confidence builds.',
    bgClass: 'bg-[#f7edf7]/90 border border-[#edd7ee]/60 shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '3',
    title: 'THE JOY OF REAL CONVERSATIONS',
    description: 'Offering a vibrant space where social interaction feels free and natural.',
    bgClass: 'bg-[#faf6ea]/90 border border-[#f2e7cc]/60 shadow-sm',
    textClass: 'text-neutral-900'
  },
  {
    id: '4',
    title: 'MEET REAL PEOPLE YOUR AGE',
    description: 'At Mindtrix Media, we’re building content where real, genuine stories come first.',
    bgClass: 'bg-[#eaf4fa]/90 border border-[#d6e9f5]/60 shadow-sm',
    textClass: 'text-neutral-900'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'PAUL KASTNER',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: 'Genuinely love using Wiss Chat. It feels safe, welcoming, and easy to connect with new people without pressure. The conversations feel real, and the community is surprisingly kind and respectful. It\'s one of the few chat platforms where I actually feel comfortable being myself.',
    avatar: paulCardImg,
    role: 'Active Creator'
  },
  {
    id: 't2',
    name: 'STEFFEN ACHEN',
    country: 'USA',
    flag: '🇺🇸',
    rating: 5,
    text: 'Wiss Chat is honestly one of my favorite apps right now. The design is clean, the features are simple, and meeting new people feels fun instead of awkward Every chat.',
    avatar: matthiasCardImg,
    role: 'Community Member'
  }
];

export const COMMUNITY_TILES = [
  {
    id: 'c1',
    name: 'Milo Ren',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    isOnline: true
  },
  {
    id: 'c2',
    name: 'Zoe Klein',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    isOnline: true
  },
  {
    id: 'c3',
    name: 'Kian Miller',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isOnline: true
  },
  {
    id: 'c4',
    name: 'Luna Zhang',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    isOnline: false
  },
  {
    id: 'c5',
    name: 'Damon Brooks',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    isOnline: true
  },
  {
    id: 'c6',
    name: 'Maya Cruz',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    isOnline: true
  }
];

import lipstickFlatLayImg from '@/assets/UGC product image/lipstick/Create_cosmetics_flat_lay_photog.jpg';
import lipstickMarbleImg from '@/assets/UGC product image/lipstick/Lipstick_advertisement_on_marble.jpg';
import lipstickEditorialImg from '@/assets/UGC product image/lipstick/Lipstick_product_editorial_photo.jpg';
import lipstickLuxuryImg from '@/assets/UGC product image/lipstick/Luxury_lipstick_advertising_phot.jpg';
import menPerfumeCreatingAdvImg from '@/assets/UGC product image/men-perfume/Creating_perfume_bottle_adv.jpg';
import menPerfumeCreatingAdvertisImg from '@/assets/UGC product image/men-perfume/Creating_perfume_bottle_advertis.jpg';
import menPerfumePosterImg from '@/assets/UGC product image/men-perfume/Perfume_bottle_advertising_poster.jpg';
import menPerfumeEditorialImg from '@/assets/UGC product image/men-perfume/Perfume_bottle_editorial_photogr.jpg';
import menPerfumeLibraryImg from '@/assets/UGC product image/men-perfume/Perfume_bottle_in_luxury_library.jpg';
import menPerfumeMindtrixImg from '@/assets/UGC product image/men-perfume/Photographing_Mindtrix_Media_per.jpg';
import skincareStoneImg from '@/assets/UGC product image/skincare/Skincare_advertisement_on_stone.jpg';
import skincarePhotographImg from '@/assets/UGC product image/skincare/Skincare_advertising_photograph.jpg';
import skincareAdvertisemenImg from '@/assets/UGC product image/skincare/Skincare_product_advertisemen.jpg';
import skincareAdvertisementImg from '@/assets/UGC product image/skincare/Skincare_product_advertisement.jpg';
import skincareCommercialImg from '@/assets/UGC product image/skincare/Skincare_product_commercial_photo.jpg';
import womenPerfumeCreatingImg from '@/assets/UGC product image/women-perfume/Creating_perfume_advertising_pho.jpg';
import womenPerfumeCommercialImg from '@/assets/UGC product image/women-perfume/Perfume_bottle_commercial_photog.jpg';
import womenPerfumeFlatLayImg from '@/assets/UGC product image/women-perfume/Perfume_bottle_flat-lay_photograph.jpg';
import womenPerfumePedestalImg from '@/assets/UGC product image/women-perfume/Perfume_bottle_on_stone_pedestal.jpg';
import womenPerfumePlaceImg from '@/assets/UGC product image/women-perfume/Perfume_product_photograph_place.jpg';

export const MARQUEE_PRODUCTS: MarqueeProduct[] = [
  { id: 'lip-1', src: lipstickFlatLayImg, label: 'Lipstick' },
  { id: 'lip-2', src: lipstickMarbleImg, label: 'Lipstick' },
  { id: 'lip-3', src: lipstickEditorialImg, label: 'Lipstick' },
  { id: 'lip-4', src: lipstickLuxuryImg, label: 'Lipstick' },
  { id: 'mp-1', src: menPerfumeCreatingAdvImg, label: "Men's Perfume" },
  { id: 'mp-2', src: menPerfumeCreatingAdvertisImg, label: "Men's Perfume" },
  { id: 'mp-3', src: menPerfumePosterImg, label: "Men's Perfume" },
  { id: 'mp-4', src: menPerfumeEditorialImg, label: "Men's Perfume" },
  { id: 'mp-5', src: menPerfumeLibraryImg, label: "Men's Perfume" },
  { id: 'mp-6', src: menPerfumeMindtrixImg, label: "Men's Perfume" },
  { id: 'skin-1', src: skincareStoneImg, label: 'Skincare' },
  { id: 'skin-2', src: skincarePhotographImg, label: 'Skincare' },
  { id: 'skin-3', src: skincareAdvertisemenImg, label: 'Skincare' },
  { id: 'skin-4', src: skincareAdvertisementImg, label: 'Skincare' },
  { id: 'skin-5', src: skincareCommercialImg, label: 'Skincare' },
  { id: 'wp-1', src: womenPerfumeCreatingImg, label: "Women's Perfume" },
  { id: 'wp-2', src: womenPerfumeCommercialImg, label: "Women's Perfume" },
  { id: 'wp-3', src: womenPerfumeFlatLayImg, label: "Women's Perfume" },
  { id: 'wp-4', src: womenPerfumePedestalImg, label: "Women's Perfume" },
  { id: 'wp-5', src: womenPerfumePlaceImg, label: "Women's Perfume" }
];