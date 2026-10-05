export interface Profile {
  id: string;
  name: string;
  age: number;
  country: string;
  flag: string;
  city?: string;
  isOnline: boolean;
  avatar: string;
  bio: string;
  likesCount?: string;
  commentsCount?: string;
  sharesCount?: string;
  interests?: string[];
  badges?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  avatar: string;
  role?: string;
}

export interface StandForCard {
  id: string;
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
}

export interface MarqueeProduct {
  id: string;
  src: string;
  label: string;
}
