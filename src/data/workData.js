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

//Branding Kit Section
import logo1 from '../assets/logo/Logo.png'
import brandPoster from '../assets/logo/brand_poster.jpg'

// //Poster Section
// import poster1 from '../assets/poster/poster1.jpeg'
// import poster2 from '../assets/poster/poster2.jpeg'
// import poster3 from '../assets/poster/poster3.jpeg'

//Brochure Section
import brochure1 from '../assets/brochure/br1.png'
import brochure2 from '../assets/brochure/br2.png'
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
    showInstagramButton: false,
  },
  {
    id: 'branding-kit',
    title: 'Branding Kit',
    description: 'Minimal wordmarks and icons for lifestyle, wellness, and fashion labels, crafted for brand consistency.',
    images: [
      logo1, brandPoster,
    ],
    showInstagramButton: false,
  },
  {
    id: 'brochure-design',
    title: 'Brochure Design',
    description: 'Thoughtfully structured brochure layouts designed to present detailed information with clarity, hierarchy, and visual flow.',
    images: [
      brochure1, brochure2,
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
  'brochure-design': 'brochure-design',
  'newsletter-design': 'newsletter-design',
  'infographics': 'infographics',
}
