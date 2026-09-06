export interface CoachProfile {
  id: string;
  name: string;
  knownAs: string;
  role: string;
  location: string;
  birthYear?: number;
  passingYear?: number;
  ageAtPassing?: number;
  yearsOfCoaching: number;
  studentsTrained: number;
  tagline: string;
  secondaryTagline: string;
  biography: string[];
  rolesGrid: {
    title: string;
    description: string;
    icon: string;
  }[];
  philosophies: {
    title: string;
    description: string;
    editorialQuote?: string;
  }[];
}

export interface Disciple {
  id: string;
  name: string;
  category: string;
  achievements?: string;
  verifiedDetails: string;
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: 'Boxing' | 'Yoga' | 'Combined' | 'Specialized';
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  features: string[];
  price?: number;
  wpId?: number;
}

export interface GalleryMedia {
  id: string;
  title: string;
  category: 'Raghavan Master' | 'Boxing' | 'Yoga' | 'Students' | 'Competitions' | 'Pooladikunnu' | 'Sculptures' | 'Legacy';
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  caption: string;
  year?: string;
  credit?: string;
  isVerifiedPhoto?: boolean;
}

export interface VideoMedia {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: 'Programs' | 'Gear' | 'Apparel' | 'Memberships';
  price: number;
  regularPrice?: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  inStock: boolean;
  featured?: boolean;
  attributes?: {
    name: string;
    options: string[];
  }[];
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedAttribute?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  trainingInterest: string;
  message: string;
}
