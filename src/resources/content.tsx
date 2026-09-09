import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad Ahsani",
  lastName: "Taqwim",
  name: `Muhammad Ahsani Taqwim`,
  role: "Fullstack Developer",
  avatar: "/images/avatar-taqwim.jpg",
  email: "05taqwim@gmail.com",
  location: "Bandung",
  languages: ["Bahasa Indonesia", "English"], // optional: Leave the array empty if you don't want to display languages
  locale: "id", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly updates about software engineering and web technology</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/taqwims",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mahsanitaqwim/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — ${person.role} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into code solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Explore</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Things I've Built
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a{" "}
      <Text as="span" size="xl" weight="strong">Software Engineer</Text> specializing in{" "}
      <Text as="span" size="xl" weight="strong">Android</Text>,{" "}
      <Text as="span" size="xl" weight="strong">Web</Text>,{" "}
      <Text as="span" size="xl" weight="strong">AI</Text>, and{" "}
      <Text as="span" size="xl" weight="strong">Deployment</Text>.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} adalah seorang {person.role} asal {person.location} yang berpengalaman mengembangkan aplikasi mobile Android, platform web modern, implementasi kecerdasan buatan (AI/Machine Learning), hingga manajemen deployment cloud infrastructure. Terbiasa membangun solusi teknologi end-to-end: mulai dari perancangan arsitektur, penulisan kode berkualitas, hingga proses rilis dan pemeliharaan server secara mandiri.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Ana Nahnu Indonesia",
        timeframe: "2026",
        role: "Fullstack Developer",
        achievements: [
          <>
            Mengembangkan dan mengoptimalkan Manajemen Workflow Perusahaan berbasis Web.
          </>,
          <>
            Membuat Dashboard untuk monitoring dan analitik performa perusahaan.
          </>,
          <>
            Mengintegrasikan model AI, Computer Vision, dan NLP ke dalam backend service untuk otomatisasi pengolahan dokumen dan data.
          </>,
          <>
            Mengelola siklus deployment aplikasi menggunakan Docker, CI/CD pipeline, dan cloud server dengan monitoring terintegrasi.
          </>,
        ],
        images: [],
      },
      {
        company: "SDIT An-Nur Banjarsari",
        timeframe: "2026",
        role: "Fullstack Developer",
        achievements: [
          <>
            Membuat Sistem Informasi Manajemen Keuangan Sekolah berbasis Web untuk mendukung proses administrasi sekolah dan tagihan siswa.
          </>,
          <>
            Membuat Sistem Informasi Manajemen Akademik Sekolah berbasis Web untuk mendukung proses administrasi sekolah.
          </>,
          <>
            Membuat Sistem Informasi Sekolah berbasis Web untuk mendukung kegiatan siswa.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Teknik Informatika / Computer Science",
        description: <>Lulusan Teknik Informatik UIN Sunan Gunung Djati Bandung. Fokus pada Rekayasa Perangkat Lunak, Algoritma, Kecerdasan Buatan, dan Sistem Terdistribusi.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Android Development",
        description: (
          <>Pengembangan aplikasi mobile Android native dengan fokus pada arsitektur bersih, responsivitas, dan user experience yang mulus.</>
        ),
        tags: [
          {
            name: "Android",
            icon: "android",
          },
          {
            name: "Kotlin",
            icon: "kotlin",
          },
          {
            name: "Flutter",
            icon: "flutter",
          }
        ],
        images: [],
      },
      {
        title: "Web Technologies & Frontend",
        description: (
          <>Pembangunan web app modern yang cepat dan SEO-friendly menggunakan ekosistem React, Next.js, dan TypeScript.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Artificial Intelligence & Data",
        description: (
          <>Implementasi Machine Learning,  Text to Speech (TTS), zero shoot voice cloning (index-tts2),dan integrasi AI.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "DevOps & Cloud Deployment",
        description: (
          <>Manajemen containerization dengan Docker, otomatisasi CI/CD, konfigurasi VPS/Cloud, dan monitoring produksi.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "GitHub",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
