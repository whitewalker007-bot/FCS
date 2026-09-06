import { CoachProfile, TimelineEvent, ProgramItem, Disciple, GalleryMedia, VideoMedia } from '@/types';
import {
  VERIFIED_COACH_PROFILE,
  VERIFIED_TIMELINE,
  TRAINING_PROGRAMS,
  VERIFIED_DISCIPLES,
  GALLERY_ARCHIVE,
  VIDEO_ARCHIVE
} from '../data/verifiedContent';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export async function getCoachProfile(): Promise<CoachProfile> {
  if (!WP_URL) return VERIFIED_COACH_PROFILE;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/coach?per_page=1`, { next: { revalidate: 3600 } });
    if (!res.ok) return VERIFIED_COACH_PROFILE;
    const data = await res.json();
    if (data && data[0]) {
      return {
        ...VERIFIED_COACH_PROFILE,
        name: data[0].title?.rendered || VERIFIED_COACH_PROFILE.name,
        biography: data[0].acf?.biography || VERIFIED_COACH_PROFILE.biography
      };
    }
    return VERIFIED_COACH_PROFILE;
  } catch {
    return VERIFIED_COACH_PROFILE;
  }
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  if (!WP_URL) return VERIFIED_TIMELINE;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/timeline?per_page=20`, { next: { revalidate: 3600 } });
    if (!res.ok) return VERIFIED_TIMELINE;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item: { id: number; title: { rendered: string }; acf?: { period?: string; description?: string; highlight?: boolean } }, idx: number) => ({
        id: item.id.toString() || `t-${idx}`,
        period: item.acf?.period || 'YEAR',
        title: item.title?.rendered || 'Event',
        description: item.acf?.description || '',
        highlight: !!item.acf?.highlight
      }));
    }
    return VERIFIED_TIMELINE;
  } catch {
    return VERIFIED_TIMELINE;
  }
}

export async function getTrainingPrograms(): Promise<ProgramItem[]> {
  if (!WP_URL) return TRAINING_PROGRAMS;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/programs?per_page=20`, { next: { revalidate: 3600 } });
    if (!res.ok) return TRAINING_PROGRAMS;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item: { id: number; title: { rendered: string }; acf?: { category?: string; subtitle?: string; description?: string; level?: string; duration?: string; price?: number; features?: string[] } }) => ({
        id: item.id.toString(),
        title: item.title?.rendered,
        category: (item.acf?.category as ProgramItem['category']) || 'Boxing',
        subtitle: item.acf?.subtitle || '',
        description: item.acf?.description || '',
        level: item.acf?.level || 'All Levels',
        duration: item.acf?.duration || '12 Weeks',
        features: item.acf?.features || [],
        price: item.acf?.price || 0,
        wpId: item.id
      }));
    }
    return TRAINING_PROGRAMS;
  } catch {
    return TRAINING_PROGRAMS;
  }
}

export async function getDisciples(): Promise<Disciple[]> {
  if (!WP_URL) return VERIFIED_DISCIPLES;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/students?per_page=30`, { next: { revalidate: 3600 } });
    if (!res.ok) return VERIFIED_DISCIPLES;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item: { id: number; title: { rendered: string }; acf?: { category?: string; verifiedDetails?: string; achievements?: string } }) => ({
        id: item.id.toString(),
        name: item.title?.rendered,
        category: item.acf?.category || 'Disciple',
        achievements: item.acf?.achievements,
        verifiedDetails: item.acf?.verifiedDetails || 'Trained under Raghavan Master in Pooladikunnu.'
      }));
    }
    return VERIFIED_DISCIPLES;
  } catch {
    return VERIFIED_DISCIPLES;
  }
}

export async function getGalleryMedia(): Promise<GalleryMedia[]> {
  if (!WP_URL) return GALLERY_ARCHIVE;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/gallery?per_page=40`, { next: { revalidate: 3600 } });
    if (!res.ok) return GALLERY_ARCHIVE;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item: { id: number; title: { rendered: string }; acf?: { category?: string; imageUrl?: string; caption?: string; year?: string; credit?: string } }) => ({
        id: item.id.toString(),
        title: item.title?.rendered,
        category: (item.acf?.category as GalleryMedia['category']) || 'Raghavan Master',
        imageUrl: item.acf?.imageUrl || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
        aspectRatio: 'landscape',
        caption: item.acf?.caption || item.title?.rendered,
        year: item.acf?.year,
        credit: item.acf?.credit
      }));
    }
    return GALLERY_ARCHIVE;
  } catch {
    return GALLERY_ARCHIVE;
  }
}

export async function getVideoArchive(): Promise<VideoMedia[]> {
  if (!WP_URL) return VIDEO_ARCHIVE;
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/videos?per_page=20`, { next: { revalidate: 3600 } });
    if (!res.ok) return VIDEO_ARCHIVE;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item: { id: number; title: { rendered: string }; acf?: { category?: string; videoUrl?: string; thumbnailUrl?: string; duration?: string; description?: string } }) => ({
        id: item.id.toString(),
        title: item.title?.rendered,
        category: item.acf?.category || 'Archive',
        videoUrl: item.acf?.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: item.acf?.thumbnailUrl || 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
        duration: item.acf?.duration || '10:00',
        description: item.acf?.description || ''
      }));
    }
    return VIDEO_ARCHIVE;
  } catch {
    return VIDEO_ARCHIVE;
  }
}
