import { Profile, Testimonial, StandForCard } from '@/types';

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
    description: 'At WizzChat, we’re building a platform where real, genuine connections first.',
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
