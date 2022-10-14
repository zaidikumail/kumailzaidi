import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  MailIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kumail Zaidi',
  description: "Kumail Zaidi's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kumail Zaidi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Greater Boston area based <strong className="text-stone-100">Astrophysics PhD student</strong> of Tufts University working with Prof. Danilo Marchesini. My research focuses on the <strong className="text-stone-100">Formation and Evolution of Galaxies</strong>  since the early days of the Universe.</p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/zaidikumail/kumailzaidi/raw/main/src/Kumail_Zaidi_resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: 'The behavior of the cosmos on grand-scales always keeps me drawn in. I also enjoy the problem-solving power of coding. Perhaps then, it is no surprise that I chose to build my career in Astronomy where I can keep myself in awe of the grandiosity of nature while sifting through data using programming.',
  aboutItems: [
    {label: 'Location', text: 'Greater Boston, MA', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Interests', text: 'gym, traveling, road tripping, driving, movies, concerts', Icon: SparklesIcon},
    {label: 'Undergrad', text: 'Bilkent University', Icon: AcademicCapIcon},
    {label: 'PhD student at', text: 'Tufts University', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */

export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'Turkish',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];



/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Deconvolution of Ultra-massive Galaxies at 3 < z < 4',
    description: 'Example of deconvolution using Firdec (a finite resolution deconvolution software)',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'FENIKS UDS catalog',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2020',
    location: 'Tufts University',
    title: 'Masters of Science in Astrophysics',
    content: <p></p>,
  },
  {
    date: 'June 2018',
    location: 'Bilkent University in Turkey',
    title: 'Bachelors of Science in Physics',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2021 - June 2022',
    location: 'Graduate Student Council (GSC) at Tufts',
    title: 'International Student Chair',
    content: (
      <p>
        Organization and planning of events for international graduate students at Tufts University.
      </p>
    ),
  },
  {
    date: 'Sep 2019 - May 2022',
    location: 'Physics Education Research at Tufts',
    title: 'Listening Project participant',
    content: (
      <p>
        This was an education research project in which student artifacts were analyzed to develop the skill of becoming better at probing and understanding student thinking and ultimately becoming better teachers. I spent one academic year as a general participant and the following year as a coach.
      </p>
    ),
  },
  {
    date: 'Sep 2018 - Dec 2020',
    location: 'Physics Education Research at Tufts',
    title: 'Graduate Teaching Assistant',
    content: (
      <p>
        1- Freshman Physics Lab (Physics 1/11 & Physics 2/12). 2- Introductory Astronomy (AST 10)
      </p>
    ),
  },
];



/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The contact form is not yet configured. Please contact me via email below directly. Thanks!',
  items: [
    {
      type: ContactType.Email,
      text: 'kumail.zaidi@tufts.edu',
      href: 'mailto:kumail.zaidi@tufts.edu',
    },
    {
      type: ContactType.Github,
      text: 'zaidikumail',
      href: 'https://github.com/zaidikumail',
    },
    {
      type: ContactType.LinkedIn,
      text: 'kumail-zaidi-9948b1133',
      href: 'https://www.linkedin.com/in/kumail-zaidi-9948b1133/',
    },
    {
      type: ContactType.Location,
      text: 'Collaborative Learning and Innovation Complex, 574 Boston Ave, Medford, MA 02155',
      href: 'https://goo.gl/maps/cJvEzFtAURGUQm738',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Email', Icon: LinkedInIcon, href: 'mailto:kumail.zaidi@tufts.edu'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/zaidikumail'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kumail-zaidi-9948b1133/'},
];
