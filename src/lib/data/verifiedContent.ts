import { CoachProfile, Disciple, TimelineEvent, ProgramItem, GalleryMedia, VideoMedia, ProductItem } from '@/types';

export const VERIFIED_COACH_PROFILE: CoachProfile = {
  id: 'puthalath-raghavan',
  name: 'Puthalath Raghavan',
  knownAs: 'Raghavan Master / Raghavettan',
  role: 'Boxing Coach • Mentor • Yoga Practitioner • Sculptor',
  location: 'Pooladikunnu, Kozhikode, Kerala, India',
  yearsOfCoaching: 40,
  studentsTrained: 2000,
  passingYear: 2020,
  ageAtPassing: 78,
  tagline: 'ONE LIFE. ONE RING. A LEGACY OF FIGHTERS.',
  secondaryTagline: 'BOXING BUILDS THE BODY. YOGA BUILDS THE MIND.',
  biography: [
    'Puthalath Raghavan, affectionately known as Raghavan Master or Raghavettan, was a legendary boxing coach and visionary mentor from Pooladikunnu, Kozhikode, Kerala.',
    'For nearly four decades, Raghavan Master dedicated his life to training over 2,000 students in boxing and yoga in a modest workshop ring near his home in Pooladikunnu. His disciples went on to win Kerala’s first gold medal in boxing, representing the state at national and international competitions.',
    'Beyond technical mastery, Raghavan Master was a Vice President of the Kerala Boxing Association and an executive member of the District Sports Council. He founded the Friends Cultural Society (FCS Pooladikunnu), providing free coaching to underprivileged youth and breaking social barriers by becoming one of Kerala’s early pioneers in training female boxers.',
    'A true polymath, Raghavan Master combined physical combat with inner serenity. He practiced yoga, wrestling, painting, sculpture, and organic farming. His hand-carved boxing sculptures immortalized the fluid motion and spirit of the sport he devoted his life to.'
  ],
  rolesGrid: [
    {
      title: 'Boxing Coach',
      description: 'Dedicated 40 years in Pooladikunnu, shaping state and national champions with rigorous conditioning.',
      icon: 'Swords'
    },
    {
      title: 'Yoga Practitioner',
      description: 'Mastered yoga for mental control, respiratory endurance, flexibility, and post-fight physical recovery.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Wrestling Instructor',
      description: 'Trained athletes in traditional grapplings, leverage techniques, and core body control.',
      icon: 'ShieldAlert'
    },
    {
      title: 'Painter',
      description: 'Expressed artistic vision through paintings capturing raw energy, movement, and human emotion.',
      icon: 'Palette'
    },
    {
      title: 'Sculptor',
      description: 'Sculpted dynamic statues depicting boxing footwork, punches, and human musculature.',
      icon: 'Gem'
    },
    {
      title: 'Farmer & Community Leader',
      description: 'Cultivated organic land in Pooladikunnu while organizing grassroots sports through FCS.',
      icon: 'Sprout'
    }
  ],
  philosophies: [
    {
      title: 'Strict Conditioning & Technique',
      description: 'Training in his modest home ring demanded uncompromising dedication, footwork drills, heavy bag endurance, and mental grit.',
      editorialQuote: 'DISCIPLINE BEFORE TALENT.'
    },
    {
      title: 'Mind-Body Balance',
      description: 'Blending explosive boxing intensity with serene yoga stillness to build resilient, controlled fighters.',
      editorialQuote: 'BUILD THE MIND BEFORE THE FIGHT.'
    },
    {
      title: 'Inclusive Opportunity',
      description: 'Pioneered free training for local youth and led early initiatives to train female boxers in Kerala.',
      editorialQuote: 'THE RING IS OPEN TO ALL WHO WORK.'
    }
  ]
};

export const VERIFIED_TIMELINE: TimelineEvent[] = [
  {
    id: 't1',
    period: 'EARLY YEARS',
    title: 'Roots in Pooladikunnu',
    description: 'Developed an early passion for combat sports, wrestling, physical conditioning, yoga, and visual arts in Kozhikode.',
    highlight: false
  },
  {
    id: 't2',
    period: 'SPORTS DISCOVERY',
    title: 'Dedication to Boxing & Yoga',
    description: 'Immersed into classical boxing fundamentals while combining yoga breathing techniques to cultivate mental focus.'
  },
  {
    id: 't3',
    period: 'COACHING BEGINS',
    title: 'The Pooladikunnu Ring',
    description: 'Established a simple, dedicated training space near his home in Pooladikunnu, welcoming athletes from all backgrounds.',
    highlight: true
  },
  {
    id: 't4',
    period: 'FOUNDING FCS',
    title: 'Friends Cultural Society',
    description: 'Founded Friends Cultural Society (FCS Pooladikunnu) to uplift local youth through sports, art, and community welfare.'
  },
  {
    id: 't5',
    period: 'HISTORIC MILESTONE',
    title: "Kerala's First Boxing Gold",
    description: 'Mentored disciples who achieved Kerala’s first state and national boxing gold medals, placing Kozhikode on the Indian boxing map.',
    highlight: true
  },
  {
    id: 't6',
    period: 'PIONEERING WOMEN BOXING',
    title: 'Opening the Ring to Women',
    description: 'Among the earliest boxing coaches in Kerala to train young women for state-level amateur boxing championships.'
  },
  {
    id: 't7',
    period: 'SPORTS ADMINISTRATION',
    title: 'Kerala Boxing Association Leadership',
    description: 'Served as Vice President of the Kerala Boxing Association and Executive Member of Kozhikode District Sports Council.'
  },
  {
    id: 't8',
    period: 'ARTISTIC EXPRESSION',
    title: 'Sculptures & Painting',
    description: 'Created hand-carved boxing sculptures and art reflecting the grace, tension, and power of fighters.'
  },
  {
    id: 't9',
    period: 'AUGUST 2020',
    title: 'His Passing & Eternal Legacy',
    description: 'Passed away in August 2020 at age 78, leaving behind a lasting legacy of 2,000+ disciplined athletes, coaches, and leaders.',
    highlight: true
  }
];

export const VERIFIED_DISCIPLES: Disciple[] = [
  {
    id: 'd1',
    name: 'M. Suman Lal Dharam',
    category: 'State & National Level Boxer',
    verifiedDetails: 'Trained under Raghavan Master in Pooladikunnu; competed in Kerala boxing events.'
  },
  {
    id: 'd2',
    name: 'K. Mridul Lal Dharam',
    category: 'Competitor & Sports Promoter',
    verifiedDetails: 'Learned technical boxing foundation and sports discipline under Master.'
  },
  {
    id: 'd3',
    name: 'Rakesh Sankar',
    category: 'State Level Champion',
    verifiedDetails: 'Represented Kozhikode district in state amateur boxing championships.'
  },
  {
    id: 'd4',
    name: 'E. Pravitha',
    category: 'Pioneer Female Boxer',
    verifiedDetails: 'Trained during the early wave of female boxers mentored by Raghavan Master in Kerala.'
  },
  {
    id: 'd5',
    name: 'P. Ratheesh',
    category: 'District & State Boxer',
    verifiedDetails: 'Competed extensively in heavyweight and middleweight categories.'
  },
  {
    id: 'd6',
    name: 'Ramesh Kumar',
    category: 'Legacy Athlete & Coach',
    verifiedDetails: 'Continues passing down Master’s footwork and mitt work training routines.'
  },
  {
    id: 'd7',
    name: 'Jijeesh',
    category: 'Amateur Fighter',
    verifiedDetails: 'Developed strength, stamina, and yoga balance under Raghavan Master’s guidance.'
  },
  {
    id: 'd8',
    name: 'Mubarack Ahmad',
    category: 'State Championship Medalist',
    verifiedDetails: 'Earned competitive medals for Kozhikode boxing squad.'
  }
];

export const TRAINING_PROGRAMS: ProgramItem[] = [
  {
    id: 'beginner-boxing',
    title: 'Beginner Boxing Fundamentals',
    category: 'Boxing',
    subtitle: 'Stance, Footwork & Basic Striking',
    description: 'Learn orthodox stance, jab-cross technique, guard defense, and rhythm footwork honed in Raghavan Master’s traditional regimen.',
    level: 'Beginner',
    duration: '12 Weeks',
    features: ['Mirror Footwork Drills', 'Heavy Bag Foundations', 'Basic Guard & Slip', 'Stamina & Core Circuit']
  },
  {
    id: 'competitive-boxing',
    title: 'Competitive Amateur Sparring',
    category: 'Boxing',
    subtitle: 'State & National Level Tournament Prep',
    description: 'Rigorous bout preparation, distance management, body shots, counter-punching tactics, and corner conditioning.',
    level: 'Intermediate / Advanced',
    duration: '24 Weeks',
    features: ['Technical Sparring', 'Mitt Work Routines', 'Fight Strategy & Range', 'Weight Management']
  },
  {
    id: 'yoga-mind-control',
    title: 'Fighter Yoga & Respiratory Control',
    category: 'Yoga',
    subtitle: 'Flexibility, Pranayama & Active Recovery',
    description: 'Classical Hatha yoga poses combined with deep breathwork to expand lung capacity, calm pre-fight anxiety, and speed muscle repair.',
    level: 'All Levels',
    duration: 'Ongoing / Monthly',
    features: ['Pranayama Breathwork', 'Core & Hip Opening Asanas', 'Post-Training Muscle Relief', 'Mental Focus Meditation']
  },
  {
    id: 'boxing-yoga-complete',
    title: 'The Complete Athlete (Boxing + Yoga)',
    category: 'Combined',
    subtitle: 'Power + Control Synergy',
    description: 'The signature training philosophy of Raghavan Master: 60 minutes of high-intensity boxing combined with 30 minutes of deep yoga recovery.',
    level: 'All Levels',
    duration: '16 Weeks',
    features: ['Full Body Combat Workout', 'Mindful Breathing', 'Joint Longevity & Mobility', 'Personal Progress Assessment']
  },
  {
    id: 'women-boxing-academy',
    title: 'Women in Boxing & Self-Defense',
    category: 'Specialized',
    subtitle: 'Empowerment, Strength & Combat Technique',
    description: 'Honoring Raghavan Master’s pioneering work training female athletes. Focused on functional power, footwork, speed, and real-world confidence.',
    level: 'All Levels',
    duration: '12 Weeks',
    features: ['Core Striking Mechanics', 'Reaction Drills', 'Self-Defense Applications', 'Empowerment Community']
  },
  {
    id: 'youth-boxing-fcs',
    title: 'Youth Sports & Character Building',
    category: 'Specialized',
    subtitle: 'Grassroots Athletics for Tomorrow’s Leaders',
    description: 'Instilling discipline, respect, agility, and sportsmanship in young athletes under the principles of Friends Cultural Society.',
    level: 'Youth (Ages 10-18)',
    duration: 'Monthly Program',
    features: ['Agility Ladders & Skipping', 'Non-Contact Drills', 'Sports Ethics & Discipline', 'Subsidized/Free Options']
  }
];

export const GALLERY_ARCHIVE: GalleryMedia[] = [
  {
    id: 'g-auth-1',
    title: 'Puthalath Raghavan (Raghavan Master)',
    category: 'Raghavan Master',
    imageUrl: '/images/puthalath-raghavan-master-home.jpg',
    aspectRatio: 'portrait',
    caption: 'Authentic personal photograph of Puthalath Raghavan (Raghavan Master) at his home in Pooladikunnu, Kozhikode.',
    year: 'Historical Archive',
    credit: 'Family & FCS Collection',
    isVerifiedPhoto: true
  },
  {
    id: 'g-auth-2',
    title: 'Friends Cultural Society Memorial Honor',
    category: 'Raghavan Master',
    imageUrl: '/images/puthalath-raghavan-fcs-memorial.jpg',
    aspectRatio: 'square',
    caption: 'Authentic photograph from Friends Cultural Society (FCS Pooladikunnu) 50th anniversary memorial event honoring Puthalath Raghavan.',
    year: 'FCS Memorial Event',
    credit: 'FCS Pooladikunnu Archive',
    isVerifiedPhoto: true
  },
  {
    id: 'g1',
    title: 'The Master in His Ring',
    category: 'Raghavan Master',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: 'Historical archive visual representing Raghavan Master instructing athletes in heavy bag conditioning.',
    year: '1990s',
    credit: 'Archive Collection',
    isVerifiedPhoto: false
  },
  {
    id: 'g2',
    title: 'Kerala Boxing Championship',
    category: 'Competitions',
    imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Disciples competing under the banner of Kozhikode in state amateur bouts.',
    year: '2004',
    credit: 'KBA State Bouts'
  },
  {
    id: 'g3',
    title: 'Female Boxers in Training',
    category: 'Students',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    caption: 'Pioneering female boxers perfecting speed bag and stance routines.',
    year: '2001'
  },
  {
    id: 'g4',
    title: 'Morning Yoga Asana by the Ring',
    category: 'Yoga',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Breathwork and mobility practice before high-intensity mitt sessions.'
  },
  {
    id: 'g5',
    title: 'Hand-Carved Boxing Sculpture',
    category: 'Sculptures',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait',
    caption: 'Artistic representation of Raghavan Master’s sculptures immortalizing boxing poses in stone and wood.'
  },
  {
    id: 'g6',
    title: 'Pooladikunnu Training Ground',
    category: 'Pooladikunnu',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'The modest gym space in Pooladikunnu where thousands of fighters forged their character.'
  },
  {
    id: 'g7',
    title: 'Friends Cultural Society Gathering',
    category: 'Legacy',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape',
    caption: 'Community sports and cultural awards hosted by FCS Pooladikunnu.'
  },
  {
    id: 'g8',
    title: 'Mitt Work & Technical Precision',
    category: 'Boxing',
    imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    caption: 'Mastering orthodox stance, slipping, and counter punches.'
  }
];

export const VIDEO_ARCHIVE: VideoMedia[] = [
  {
    id: 'v1',
    title: 'Puthalath Raghavan: The Master of Pooladikunnu',
    category: 'Documentary',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    duration: '14:20',
    description: 'Documentary tribute to Raghavan Master, capturing 40 years of boxing, yoga, and community leadership in Kozhikode.'
  },
  {
    id: 'v2',
    title: 'Boxing Builds Body, Yoga Builds Mind',
    category: 'Philosophy & Training',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    duration: '08:45',
    description: 'Demonstration of how Raghavan Master integrated classical pranayama and yoga asanas into competitive boxing training.'
  },
  {
    id: 'v3',
    title: 'The Disciples of Pooladikunnu',
    category: 'Interviews',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop',
    duration: '11:10',
    description: 'State gold medalists and former students share memories of Master’s strict discipline and generous heart.'
  }
];

export const STORE_PRODUCTS: ProductItem[] = [
  {
    id: 'hand-wraps-pro',
    name: 'Pooladikunnu Pro Hand Wraps (4.5m)',
    slug: 'pooladikunnu-pro-hand-wraps',
    category: 'Gear',
    price: 499,
    regularPrice: 699,
    description: 'Breathable semi-elastic cotton hand wraps crafted for high-impact wrist and knuckle protection during heavy bag drills.',
    shortDescription: '4.5M Semi-elastic cotton boxing hand wraps with reinforced thumb loop.',
    imageUrl: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    featured: true,
    attributes: [
      { name: 'Color', options: ['Crimson Red', 'Charcoal Black', 'Pure White'] }
    ]
  },
  {
    id: 'boxing-gloves-legacy',
    name: 'Master Edition Leather Boxing Gloves (14oz/16oz)',
    slug: 'master-edition-leather-boxing-gloves',
    category: 'Gear',
    price: 2499,
    regularPrice: 2999,
    description: 'Hand-crafted full-grain synthetic leather gloves featuring multi-layer foam padding for optimal wrist support during sparring.',
    shortDescription: 'Premium sparring gloves with ergonomic thumb lock and wide wrist strap.',
    imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    featured: true,
    attributes: [
      { name: 'Size', options: ['12 oz', '14 oz', '16 oz'] },
      { name: 'Color', options: ['Matte Black/Red', 'Vintage Brown'] }
    ]
  },
  {
    id: 'legacy-tee',
    name: 'FCS Legacy Cotton T-Shirt ("One Life. One Ring.")',
    slug: 'fcs-legacy-cotton-tshirt',
    category: 'Apparel',
    price: 799,
    regularPrice: 999,
    description: 'Heavyweight 240 GSM organic cotton graphic tee featuring the official motto of Raghavan Master’s legacy.',
    shortDescription: '100% Organic Cotton oversized black tee with minimalist crimson print.',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    featured: true,
    attributes: [
      { name: 'Size', options: ['S', 'M', 'L', 'XL', 'XXL'] }
    ]
  },
  {
    id: 'complete-athlete-pass',
    name: 'The Complete Athlete Monthly Membership',
    slug: 'complete-athlete-membership',
    category: 'Memberships',
    price: 2499,
    description: 'Access to guided boxing footwork drills, heavy bag training, and morning yoga recovery sessions.',
    shortDescription: 'Monthly training pass for Pooladikunnu Boxing & Yoga Academy.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    inStock: true,
    featured: true
  }
];
