// Instagram Carousel 1
import c1_1 from '../assets/igcarousel/c1/photo1.png'
import c1_2 from '../assets/igcarousel/c1/photo2.png'
import c1_3 from '../assets/igcarousel/c1/photo3.png'
import c1_4 from '../assets/igcarousel/c1/photo4.png'
import c1_5 from '../assets/igcarousel/c1/photo5.png'
import c1_6 from '../assets/igcarousel/c1/photo6.png'

//Instagram Carousel 2
import c2_1 from '../assets/igcarousel/c2/photo1.png'
import c2_2 from '../assets/igcarousel/c2/photo2.png'
import c2_3 from '../assets/igcarousel/c2/photo3.png'
import c2_4 from '../assets/igcarousel/c2/photo4.png'
import c2_5 from '../assets/igcarousel/c2/photo5.png'
import c2_6 from '../assets/igcarousel/c2/photo6.png'

//Reels Section 
import reel1 from '../assets/reels/reel1.mp4'
import reel2 from '../assets/reels/reel2.mp4'
import reel3 from '../assets/reels/reel3.mp4'

//Poster Section
import poster1 from '../assets/poster/poster1.jpeg'
import poster2 from '../assets/poster/poster2.jpeg'
import poster3 from '../assets/poster/poster3.jpeg'

//Newsletter Section
import newsletter1 from '../assets/newsletter/newsletter_1.jpeg'

//Infographics Section
import infographic1 from '../assets/infographics/infographic1.jpeg'
import infographic2 from '../assets/infographics/infographic2.jpeg'
import infographic3 from '../assets/infographics/infographic3.jpeg'
import infographic4 from '../assets/infographics/infographic4.jpeg'

// Section data for selected work page
// Each section represents a project or subsection
export const workSections = [
  {
    id: 'instagram-carousel-1',
    title: 'Instagram Carousel Pack',
    description: 'A curated set of aesthetic Instagram carousel designs created to boost engagement and brand consistency.',
    images: [
      c1_1, c1_2, c1_3, c1_4, c1_5, c1_6,
    ],
    externalLink: 'https://www.instagram.com/p/DQdMm2ek-wl/?igsh=MWFqZzI2ajZwZ2k0Zw==',
    showInstagramButton: true,
  },
  {
    id: 'instagram-carousel-2',
    title: 'Instagram Carousel Pack',
    description: 'A curated set of aesthetic Instagram carousel designs created to boost engagement and brand consistency.',
    images: [
      c2_1, c2_2, c2_3, c2_4, c2_5, c2_6,
    ],
    externalLink: 'https://www.instagram.com/p/DRQGu1FEzlG/?igsh=MW16eXp5NTAyNDF0bA== ',
    showInstagramButton: true,
  },
  {
    id: 'reel-editing',
    title: 'Reel Editing',
    description: 'Cinematic reel cuts with transitions synced to trending audio cues, designed to maximize engagement and reach.',
    videos: [
      {
        videoSrc: reel1,
        externalLink: 'https://www.instagram.com/reel/DRc-N4ik_AA/?igsh=amQ4MWJoM2s2MHRs',
      },
      {
        videoSrc: reel2,
        externalLink: 'https://instagram.com/p/placeholder-reel-2',
      },
      {
        videoSrc: reel3,
        externalLink: 'https://instagram.com/p/placeholder-reel-3',
      },
    ],
    externalLink: 'https://instagram.com/p/placeholder-reel',
    showInstagramButton: true,
  },
  {
    id: 'branding-kit',
    title: 'Branding Kit',
    description: 'Minimal wordmarks and icons for lifestyle, wellness, and fashion labels, crafted for brand consistency.',
    images: [
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80',
    ],
    showInstagramButton: false,
  },
  {
    id: 'flyer-design',
    title: 'Flyer Design',
    description: 'Soft gradients, typography pairings, and refined layouts for events, designed to capture attention and communicate key information.',
    images: [
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
    ],
    showInstagramButton: false,
  },
  {
    id: 'newsletter-design',
    title: 'Newsletter Design',
    description: 'Modular newsletter blocks focused on clarity, rhythm, and narrative, ensuring engaging communication with subscribers.',
    images: [newsletter1      
    ],
    externalLink: 'https://tinyurl.com/newsletter1portfolio',
    showInstagramButton: false,
  },
  {
    id: 'infographics',
    title: 'Infographics',
    description: 'Notion-inspired boards aligning campaign goals, hooks, and deliverables, transforming complex information into clear visual narratives.',
    images: [
      infographic1, infographic2, infographic3, infographic4
    ],
    showInstagramButton: false,
  },
]

// Mapping from project slugs to section IDs for navigation
export const projectToSectionMap = {
  'instagram-carousel': 'instagram-carousel-1',
  'reel-editing': 'reel-editing',
  'branding-kit': 'branding-kit',
  'flyer-design': 'flyer-design',
  'newsletter-design': 'newsletter-design',
  'infographics': 'infographics',
}
