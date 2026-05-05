/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowRight, 
  Music, 
  Palette, 
  Code2, 
  HeartPulse, 
  Zap,
  Info,
  Sparkles,
  ShieldCheck,
  User,
  Share2,
  ChevronLeft,
  ChevronRight,
  Database
} from 'lucide-react';

// --- Types ---
interface Project {
  name: string;
  desc: string;
  tags: string[];
  link?: string;
  image?: string;
  icon?: string;
  featured?: boolean;
}

interface ArtItem {
  name: string;
  desc: string;
  link: string;
  icon: string;
  color: string;
}

interface ResearchItem {
  title: string;
  desc: string;
  date: string;
  category: string;
  images: string[];
  link?: string;
  details?: string;
  analysisImages?: string[];
  dataLinks?: { label: string, url: string }[];
  socialLinks?: { label: string, url: string }[];
}

// --- Data ---
const RESEARCHES: ResearchItem[] = [
  {
    title: "Documented Youth-Linked Killings (2005-2026)",
    desc: "A personal data project mapping 20 years of documented killings in the Philippines against the academic calendar and election cycles.",
    date: "APR 2026",
    category: "Data Analysis",
    images: ["/Death-Carousel-1.jpg"],
    link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaC6-5b541s6KYOySP1izO3ejsFkgSFLIZa9FaQXV_q_BYrOYE96WK4QwObBsHFQ/pubhtml#gid=588530041",
    details: `I came across discussions on this topic on social media and got curious enough to actually analyze it myself.

I mapped 20 years of documented killings of students, youth, and youth-linked activists in the Philippines against the academic calendar, and the dates aren't random.

This started as a personal data project. I wanted to see if a pattern existed in the data, so I cleaned it, structured it, and visualized it across 23 named victims from 2005 to 2026.

Key observations from the data:
- 10 of 23 deaths fall in March (end of school year)
- 4 fall in August (school opening week)
- Several victims were on community immersion or thesis fieldwork when killed
- The pattern appears across four administrations

All records sourced from: Rappler, Philippine Daily Inquirer, GMA News, Human Rights Watch, Amnesty International Philippines, US Dept of State, UNESCO, UP Manila Collegian, Philstar, and COMELEC election records.

I'm not making political claims, I'm presenting what the data shows and letting others draw their own conclusions. The dataset includes students, youth, and youth-affiliated community organizers; not all are enrolled students, and that context is noted in the Excel.

Infographic attached. Raw dataset + full source list in the comments for anyone who wants to audit or build on it.

Views are my own.`,
    analysisImages: [
      "/Death-Carousel-1.jpg",
      "/Death-Carousel-2.jpg",
      "/Death-Carousel-3.jpg",
      "/Death-Carousel-4.jpg",
      "/Death-Carousel-5.jpg",
      "/Death-Carousel-6.jpg",
      "/Death-Carousel-7.jpg",
      "/Death-Carousel-8.jpg",
      "/Death-Carousel-9.jpg",
      "/Death-Carousel-10.jpg",
      "/Death-Carousel-11.jpg"
    ],
    dataLinks: [
      { label: "Public Database Path", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaC6-5b541s6KYOySP1izO3ejsFkgSFLIZa9FaQXV_q_BYrOYE96WK4QwObBsHFQ/pubhtml#gid=588530041" }
    ],
    socialLinks: [
      { label: "Original Post // Selective Archive", url: "https://www.linkedin.com/posts/alvin-loria_dataanalysis-datavisualization-humanrights-ugcPost-7453070883130101760-N-Fr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE5BQJwBZ442YuG0pU4Jqk5jSYrCLZm0Y3M" }
    ]
  },
  {
    title: "Runner's Adaptation Model Analysis",
    desc: "Tracking physiological rate of absorption (k-factor) vs static predictors in endurance performance.",
    date: "FEB 2026",
    category: "Biokinetics",
    images: ["/run-1.jpg"],
    link: "https://lnkd.in/gZNtgV9U",
    details: `Hey guys, just woke up and decided to dive into some of my latest training data. 📈
TLDR: My progression exceeds typical novice improvement rates :))

Today I’m using the First-order Adaptation Model to track my progress: Performance(t) = Baseline * (1 – e^-kt)

Why this and not the old Riegel Formula? Because Riegel is a static predictor. This model focuses on the "k" factor, the rate at which your body actually absorbs training stress.

The Analysis:
- According to the ACSM (American College of Sports Medicine) guidelines for measuring aerobic improvement, tracking pace change at a submaximal effort is a primary indicator of increased VO2 max efficiency.
- My pace dropped from 10:47/km in June to 8:22/km in February.
- That is a 22.4% total improvement in pace.
- Even with a higher "elevation cost," my progression is officially exceeding typical novice rates (which usually sit between 0.02–0.04).

It’s one thing to feel fitter, but it’s another to see the biological math prove it.

Data Sources:
Model: Vickers & Vertosick (2016), "An empirical study of race times in recreational endurance runners."
Metric Methodology: American College of Sports Medicine (ACSM) Guidelines for Exercise Testing and Prescription.

Success is a curve, not a straight line! 🏃‍♂️💨`,
    analysisImages: [
      "/run-1.jpg",
      "/run-2.jpg"
    ],
    dataLinks: [
      { label: "ACSM Methodology", url: "https://lnkd.in/gZNtgV9U" }
    ],
    socialLinks: [
      { label: "LinkedIn Update", url: "https://www.linkedin.com/posts/alvin-loria_hey-guys-just-woke-up-and-decided-to-dive-ugcPost-7424962534576832512-Dw4T?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE5BQJwBZ442YuG0pU4Jqk5jSYrCLZm0Y3M" }
    ]
  },
  {
    title: "The Analyst's Paradox // Synthesis of Silence",
    desc: "A reminder that some data points are meant to be felt, not measured. A case for living beyond the dashboard.",
    date: "MAY 2026",
    category: "Philosophy",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"],
    link: "#",
    details: `We spend so much time cleaning data, structuring patterns, and mapping outcomes that we often forget to experience the variables in real-time. This archive serves as a non-analytical checkpoint. No metrics, no spreadsheets, just the environment.

It is good to stop analyzing sometimes and just live. To be present in the noise without trying to filter it. This is a message to my future self: the most important data point is the breath you are taking right now.

No latest analysis. Just existence.`,
    analysisImages: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200"
    ]
  }
];

const MISSION_LONG = "What I mean by that is to be good to myself, to others, and to the world. I am inspired by the word eudaimonia, which is a combination of well-being, happiness, and flourishing. I want to be remembered as someone who strived to be good and to do the greater good, even though in reality we know how hard and complex that can be, and how often goodness is taken advantage of. Helping myself so that I can help others is also one of my missions. That’s why I believe it is necessary to strive for balance across all eight dimensions of well-being: emotional, physical, occupational, social, intellectual, environmental, financial, and spiritual. For my emotional well-being, I remind myself to accept that life is hard, and unexpected variables will always appear at unexpected times. This means both sad days and happy days will inevitably come. It helps to remember what I can control and what I cannot, and to resist the constant pull toward perfection. The physical dimension is one of the trickiest to maintain. As someone with knowledge in nutrition and exercise, I know many factors affect it. The best things I can do are to exercise when I have the time and to eat nutritious, unprocessed foods as much as I can manage. For occupational well-being, my dream job is simply one where I can help others while earning enough to cover my basic needs, save a little, and enjoy some of the experiences life has to offer. Social well-being is probably one of the hardest areas for me. Still, I strive to compromise and find common ground. If I can help someone, stay with them, and be present for them without sacrificing too much of myself, I will. I deeply value quality time with everyone I encounter. Time is precious, it shapes who we are, and once spent, it cannot be taken back. For spiritual well-being, I consider myself an agnostic-theist. I want to believe in a higher being watching over us, though I am not certain one exists. But spiritual well-being does not necessarily mean religion, it is about meaning and a way of life. As long as I hold onto the ideal of eudaimonia, I feel at peace with it. In terms of intellectual well-being, I do not see myself as a genius or particularly smart. I am simply curious about how to become a better version of myself and how to do better for others. I am persistent in learning what I need to know to live well and, importantly, I want to do what I can to avoid dementia or Alzheimer’s, since I truly value memories and life. Environmental well-being is also a challenge, but I try to do my part by reusing what I can, avoiding unnecessary purchases, not littering, and participating in eco-friendly practices as much as I can manage. Finally, financial well-being connects to all the other dimensions. By buying fewer wants, I can save money. By caring for my health, I avoid costly medical bills. By building different skills and knowledge, I can help more people and create more opportunities for income. By taking care of the environment through recycling, cleaning, and repairing things, I can reduce risks that lead to illness and expenses. And by enduring greed, selfishness, and unnecessary desires, I can maintain financial stability. In the end, it is all a ripple effect, one dimension cannot exist without the others.";

const PROJECTS: Project[] = [
  {
    name: "Medical Rehabilitation Dashboard",
    desc: "A full-stack dashboard for managing rehabilitation patient data — designed with real clinical workflows in mind. Connects my interest in health science and dev.",
    tags: ["React", "Node.js", "Full-Stack", "Health"],
    link: "http://aj-rehab-ph.onrender.com/",
    image: "/medicaldashforms.png",
    featured: true
  },
  {
    name: "CVSU Mental Health",
    desc: "A mental health support platform for CVSU students — resources and safe spaces.",
    tags: ["Health", "Web App"],
    link: "https://cvsu-mh.onrender.com/",
    icon: "Upgrading ⏳"
  },
  {
    name: "Animal Persona",
    desc: "Discover your animal persona — personality meets art in an interactive experience.",
    tags: ["Interactive", "Creative"],
    link: "https://aj-z.github.io/Animal-Persona/",
    image: "/AnimalPersona.png"
  },
  {
    name: "Vision Board",
    desc: "My personal vision board — links to all things Alvin, dev and art in one hub.",
    tags: ["Vision", "Portfolio"],
    link: "https://aj-z.github.io/VisBoard/",
    icon: "Upgrading ⏳"
  }
];

const ART_WORKS: ArtItem[] = [
  { name: "Cara Portfolio", desc: "Full art portfolio", link: "https://cara.app/ajloria/portfolio", icon: "🖼️", color: "bg-violet-50" },
  { name: "Character Designs", desc: "Original illustrations", link: "https://ajcharacterdesigns.vercel.app/", icon: "✏️", color: "bg-rose-50" },
  { name: "Animal Persona", desc: "Interactive art + personality", link: "https://aj-z.github.io/Animal-Persona/", icon: "🐺", color: "bg-emerald-50" },
  { name: "Instagram", desc: "Art drops & sketches", link: "https://www.instagram.com/ajloria/", icon: "📸", color: "bg-orange-50" }
];

const VISION_BOARD = [
  { type: 'mission', content: 'Live a good life, be good to myself, others, and the world.' },
  { type: 'image', url: 'https://cdn.britannica.com/84/87984-050-7C5547FE/Detail-Roman-copy-portrait-bust-Aristotle-Greek.jpg', label: 'Inspiration: Aristotle' },
  { type: 'quote', text: 'Do good for me and for others. Endure hardships. Express emotions but don\'t be enslaved by them.' },
  { type: 'joy', items: ['Sketching in quiet spaces', 'Journaling thoughts & reflections', 'Reading meaningful stories', 'Watching films & anime', 'Deep conversations', 'Intentional, calm living'] },
  { type: 'image', url: 'https://i.pinimg.com/1200x/3e/a0/4f/3ea04f2032e3910617f05b9a28e0fddf.jpg', label: 'Cherished Memories' },
  { type: 'image', url: 'https://i.pinimg.com/736x/f8/d1/53/f8d153b4f4401672e49f2759325bad07.jpg', label: 'Passing Knowledge' },
  { type: 'finance', title: 'Financial Philosophy', desc: '80–90% needs → savings | 10–20% wants' },
  { type: 'tags', pills: ['INTJ', 'Eudaimonia', 'Politically aware', 'Spiritual but not religious'] }
];

// --- Sub-components ---

const BackgroundAesthetic = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
    {/* Flowing Lines */}
    <svg className="absolute w-full h-full opacity-[0.03] text-theme-text" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <motion.path
        d="M0,500 Q250,400 500,500 T1000,500"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1"
        animate={{
          d: [
            "M0,500 Q250,400 500,500 T1000,500",
            "M0,500 Q250,600 500,500 T1000,500",
            "M0,500 Q250,400 500,500 T1000,500"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,300 Q250,200 500,300 T1000,300"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1"
        animate={{
          d: [
            "M0,300 Q250,200 500,300 T1000,300",
            "M0,300 Q250,400 500,300 T1000,300",
            "M0,300 Q250,200 500,300 T1000,300"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </svg>

    {/* Low Opacity Rain Particle Effect (CSS Based) */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-12 bg-theme-text opacity-[0.02]"
          initial={{ top: -100, left: `${Math.random() * 100}%` }}
          animate={{ top: '120%' }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  </div>
);

const SocialShowcase = ({ links }: { links: { name: string, url: string, images: string[], footerLinks?: { label: string, href: string }[] }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {links.map((social, i) => {
        const [index, setIndex] = useState(0);
        
        useEffect(() => {
          const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % social.images.length);
          }, 10000); // Updated to 10 seconds as requested
          return () => clearInterval(timer);
        }, [social.images.length]);

        return (
          <div key={i} className="group border border-theme-border rounded-sm overflow-hidden bg-white flex flex-col">
            <div className="p-6 border-b border-theme-border flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{social.name} // Selective Archive</span>
              <div className="flex gap-2">
                {social.images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-1 h-1 rounded-full transition-all duration-500 ${idx === index ? 'bg-theme-text w-3' : 'bg-theme-text/10'}`} 
                  />
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-theme-muted overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={social.images[index]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  alt={`${social.name} archive`}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            {social.footerLinks && (
              <div className="p-5 border-t border-theme-border bg-theme-muted/5">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-theme-accent mb-3">See more at:</p>
                <div className="flex flex-wrap gap-4">
                  {social.footerLinks.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-medium text-theme-text/60 hover:text-theme-text hover:underline transition-all flex items-center gap-1.5"
                    >
                      {link.label}
                      <ExternalLink size={10} className="opacity-40" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const CognitiveProfile = () => {
  const traits = [
    { factor: 'I', label: 'Extroversion', score: 20, color: '#A3E635' },
    { factor: 'II', label: 'Emotional Stability', score: 77, color: '#991B1B' },
    { factor: 'III', label: 'Agreeableness', score: 19, color: '#B45309' },
    { factor: 'IV', label: 'Conscientiousness', score: 74, color: '#4F46E5' },
    { factor: 'V', label: 'Intellect / Imagination', score: 74, color: '#D9F99D' }
  ];

  const tags = [
    "INTJ", "Eudaimonia", "Politically aware, health-first", 
    "Roman Catholic on paper", "Spiritual but not religious"
  ];

  return (
    <section id="cognitive" className="py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-12">
        <SectionHeader 
          label="Internal Metrics"
          title="Cognitive Profile"
          desc="An observation of personality traits and identification markers derived from psychometric analysis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Identity Tags */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 border border-theme-border bg-violet-50/30 rounded-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-8">Identity Markers</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-6 py-3 rounded-full border border-violet-200 bg-white text-violet-700 text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="p-8 border border-theme-border rounded-sm space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">System Note</p>
              <p className="text-sm font-light leading-relaxed text-theme-accent-soft italic">
                "Spiritual well-being does not necessarily mean religion, it is about meaning and a way of life. As long as I hold onto the ideal of eudaimonia, I feel at peace with it."
              </p>
            </div>
          </div>

          {/* Big Five Chart */}
          <div className="lg:col-span-8 p-6 md:p-10 border border-theme-border bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-[60px] md:text-[100px] font-serif italic pointer-events-none">Big 5</div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-theme-border pb-6 gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em]">Personality Factor Scores</h3>
              <span className="text-[10px] font-mono opacity-40 italic">Source: openpsychometrics.org</span>
            </div>

            <div className="space-y-10">
              <div className="hidden md:grid grid-cols-[80px_1fr_100px] gap-4 mb-4 text-[9px] uppercase font-bold tracking-widest opacity-40">
                <span>Factor</span>
                <span>Factor Label</span>
                <span className="text-right">Percentile</span>
              </div>
              
              {traits.map((trait, i) => (
                <div key={trait.factor} className="flex flex-col md:grid md:grid-cols-[80px_1fr_100px] gap-2 md:gap-4 items-start md:items-center group">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="font-serif italic text-xl opacity-40 group-hover:opacity-100 transition-opacity">{trait.factor}</span>
                    <span className="md:hidden text-lg font-serif italic text-theme-text/40">{trait.score}</span>
                  </div>
                  <div className="space-y-2 w-full">
                    <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-theme-text/80">{trait.label}</span>
                    <div className="h-4 md:h-6 bg-theme-muted relative overflow-hidden rounded-sm">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${trait.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                        className="h-full"
                        style={{ backgroundColor: trait.color }}
                      />
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <span className="text-2xl font-serif italic">{trait.score}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-theme-border flex justify-between items-center text-[9px] font-mono opacity-40">
              <span>N=1 Evaluation_Structure</span>
              <span>Psych_System_V_1.0</span>
            </div>
          </div>
        </div>

        {/* Cognitive Synthesis & Analysis */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-8 p-8 md:p-10 bg-theme-text text-theme-bg rounded-sm relative overflow-hidden">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-theme-accent mb-8">AI Pattern Synthesis // Report_09X</h4>
            
            <div className="space-y-6 text-sm font-light leading-relaxed opacity-90 max-w-3xl">
              <p>
                <span className="text-theme-accent font-bold uppercase tracking-widest mr-2">[PROFILE SYNOPSIS]</span>
                The data correlates directly with the <span className="italic">INTJ</span> identification. High levels of <span className="font-bold">Intellect (74th percentile)</span> and <span className="font-bold">Conscientiousness (74th percentile)</span> suggest a strategic, system-oriented mind. The low <span className="italic">Agreeableness</span> score (19) suggests a prioritization of objective truth over social harmony.
              </p>
              <p>
                <span className="text-theme-accent font-bold uppercase tracking-widest mr-2">[MISTAKEN IDENTITY]</span>
                To an outside observer, the low agreeableness paired with high emotional stability might be mistaken for coldness or indifference. In reality, this is a cognitive shield for deep empathy—preferring to provide a hard truth or effective help rather than a polite, but useless, comfort. It is a human strategy optimized for impact rather than optics.
              </p>
              <p>
                <span className="text-theme-accent font-bold uppercase tracking-widest mr-2">[ARCHITECTURAL INTENT]</span>
                Alvin is building this website not as a display of vanity, but as a digital anchor. It is a curated manifestation of his mission to live well, a placeholder for his identity where art, health, and code converge. By leveraging AI to hasten productivity, he focuses on the human pursuit of growth and experiencing life with others rather than being lost in the friction of construction.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="h-[1px] flex-1 bg-white/10" />
              <p className="text-[9px] font-mono opacity-40 uppercase tracking-widest">Synthesis_Complete // No_Conflicts_Found</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="p-6 md:p-8 border border-theme-border rounded-sm bg-theme-muted/20">
               <div className="flex items-center gap-3 mb-4 text-theme-accent">
                 <ShieldCheck size={16} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Accuracy Disclaimer</span>
               </div>
               <p className="text-[10px] font-light leading-relaxed text-theme-accent-soft">
                  <span className="font-bold">Empirical Constraint:</span> This analysis is generated through machine learning pattern recognition applied to specific psychometric inputs. AI evaluates strictly on empirical data and historical correlations. 
                  <br /><br />
                  <span className="italic">Ultimately, it is best to get to know the person by asking and living with him than rely on a mere analysis and online presence.</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const AnalysisModal = ({ item, onClose }: { item: ResearchItem, onClose: () => void }) => {
  const [imgIndex, setImgIndex] = useState(0);
  
  const images = item.analysisImages || item.images;

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-12 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        className="bg-theme-bg w-full max-w-5xl max-h-screen md:max-h-[85vh] overflow-y-auto rounded-sm md:rounded-lg shadow-2xl flex flex-col relative cursor-default scroll-smooth overflow-x-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Navigation / Header */}
        <div className="sticky top-0 right-0 z-[1001] flex justify-end p-4 pointer-events-none">
          <button 
            onClick={onClose}
            className="p-3 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-xl transition-all pointer-events-auto"
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Carousel Section */}
        <div className="hidden md:block w-full bg-black relative aspect-[16/9] flex-shrink-0 group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={imgIndex}
              src={images[imgIndex]}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-contain cursor-pointer"
              onClick={nextImg}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <button onClick={prevImg} className="p-4 bg-black/20 hover:bg-black/50 rounded-full text-white backdrop-blur-sm transition-all pointer-events-auto">
               <ChevronLeft size={24} />
             </button>
             <button onClick={nextImg} className="p-4 bg-black/20 hover:bg-black/50 rounded-full text-white backdrop-blur-sm transition-all pointer-events-auto">
               <ChevronRight size={24} />
             </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setImgIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-5' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <div className="absolute top-6 left-6 text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 mix-blend-difference">
            Visual_Asset / {String(imgIndex + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Mobile Vertical Image List */}
        <div className="md:hidden flex flex-col bg-black">
          {images.map((img, i) => (
            <div key={i} className="w-full border-b border-white/5 last:border-0 relative">
              <img 
                src={img} 
                alt={`Asset ${i+1}`} 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 text-[7px] font-bold uppercase tracking-[0.4em] text-white/30 bg-black/20 px-2 py-1 backdrop-blur-sm">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-16 lg:p-20 space-y-12 max-w-4xl mx-auto">
           <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-theme-accent">{item.category}</span>
                 <div className="h-[1px] w-8 bg-theme-text opacity-20" />
                 <span className="text-[9px] font-mono italic opacity-40">{item.date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-theme-text leading-[1.1]">{item.title}</h2>
           </div>

           <div className="prose prose-sm max-w-none">
              <p className="text-sm md:text-base font-light leading-relaxed text-theme-accent-soft whitespace-pre-wrap">
                {item.details}
              </p>
           </div>

           {/* Resource Links Area */}
           <div className="pt-12 border-t border-theme-border flex flex-col md:flex-row gap-12">
              {item.dataLinks && item.dataLinks.length > 0 && (
                <div className="flex-1 space-y-6">
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 flex items-center gap-3">
                     <Database size={12} />
                     Data Architecture
                   </h4>
                   <div className="space-y-3">
                      {item.dataLinks.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center justify-between p-4 border border-theme-border rounded-sm hover:bg-theme-muted transition-all"
                        >
                           <span className="text-xs font-medium tracking-tight text-theme-text/80">{link.label}</span>
                           <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                        </a>
                      ))}
                   </div>
                </div>
              )}

              {item.socialLinks && item.socialLinks.length > 0 && (
                <div className="flex-1 space-y-6">
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 flex items-center gap-3">
                     <Share2 size={12} />
                     Selective Distribution
                   </h4>
                   <div className="space-y-3">
                      {item.socialLinks.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center justify-between p-4 border border-theme-border rounded-sm hover:bg-theme-muted transition-all"
                        >
                           <span className="text-xs font-medium tracking-tight text-theme-text/80">{link.label}</span>
                           <Share2 size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                        </a>
                      ))}
                   </div>
                </div>
              )}
           </div>

           <div className="pt-12 flex justify-center">
              <button 
                onClick={onClose}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-theme-accent border-b border-theme-accent/20 hover:border-theme-accent transition-all pb-2"
              >
                Close Synthesis
              </button>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ResearchCardProps {
  item: ResearchItem;
  i: number;
  onOpenAnalysis: () => void;
  setIsHovering: (val: boolean) => void;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ 
  item, 
  i, 
  onOpenAnalysis, 
  setIsHovering 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group border border-theme-border p-0 flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* FOLDER TAB STYLE HEADER */}
      <div className="px-6 py-4 border-b border-theme-border flex justify-between items-center bg-theme-muted/20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-theme-text opacity-20"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
        </div>
        <span className="text-[9px] opacity-40 font-mono italic">{item.date}</span>
      </div>

      <div className="p-8 space-y-6 flex-1 flex flex-col">
        <div className="relative aspect-[16/10] bg-theme-muted overflow-hidden">
          <img 
            src={item.images[0]} 
            alt={item.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm">Archive_{i+1}</div>
        </div>

        <h3 className="text-xl font-serif italic text-theme-text">{item.title}</h3>
        <p className="text-xs font-light leading-relaxed text-theme-accent-soft line-clamp-3">{item.desc}</p>
        
        <div className="mt-auto pt-6 flex items-center justify-between">
            <button 
            onClick={onOpenAnalysis}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 hover:text-theme-text transition-colors"
            >
              Open Analysis 
              <ArrowRight size={14} />
            </button>
            {item.link && (
              <a href={item.link} className="p-2 opacity-20 hover:opacity-100 transition-opacity"><ExternalLink size={14} /></a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ label, title, desc }: { label: string, title: string, desc: string }) => (
  <div className="mb-12 max-w-2xl px-6 md:px-0">
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[11px] font-bold tracking-[0.3em] uppercase text-theme-accent mb-6 flex items-center gap-4"
    >
      <span className="h-[1px] w-12 bg-theme-text opacity-20"></span>
      {label}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-6xl font-serif font-light leading-[0.9] text-theme-text mb-8 italic"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-sm font-light text-theme-accent-soft leading-relaxed text-balance max-w-md"
    >
      {desc}
    </motion.p>
  </div>
);

const AuthorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-24 right-8 z-[500] max-w-[280px] bg-white border border-theme-border shadow-2xl rounded-sm p-6 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-1 bg-theme-text opacity-10" />
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1.5 opacity-20 hover:opacity-100 hover:bg-theme-muted transition-all rounded-full"
            aria-label="Close message"
          >
            <X size={14} />
          </button>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-theme-border flex items-center justify-center">
                <User size={14} className="opacity-40" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">System Message</span>
            </div>
            <p className="text-[11px] font-light leading-relaxed text-theme-text/80">
              "Sup, thanks for visiting the site. feel free to explore. Thanks again!"
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [missionExpanded, setMissionExpanded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState<ResearchItem | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vision', href: '#vision' },
    { name: 'Work', href: '#projects' },
    { name: 'Archives', href: '#archives' },
    { name: 'Cognitive', href: '#cognitive' },
    { name: 'Analysis', href: '#researches' },
    { name: 'Sound', href: '#soundscape' },
    { name: 'Art', href: '#art' },
    { name: 'About', href: '#about' },
  ];

  const [showDesktopAlert, setShowDesktopAlert] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setShowDesktopAlert(true);
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-theme-text selection:text-theme-bg cursor-none">
      <AnimatePresence>
        {showDesktopAlert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-theme-bg z-[1000] flex items-center justify-center p-8 lg:hidden"
          >
            <div className="max-w-xs text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full border border-theme-border flex items-center justify-center">
                  <span className="text-xs font-serif italic">!</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">Optimization Note</h4>
                <p className="text-xs font-light leading-relaxed text-theme-accent-soft">
                  This structure is architecturally optimized for large-scale displays. For the intended aesthetic synthesis, wide-screen viewing is recommended.
                </p>
              </div>
              <button 
                onClick={() => setShowDesktopAlert(false)}
                className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-theme-text pb-2"
              >
                Continue Anyway
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AuthorPopup />
      <BackgroundAesthetic />
      <div className="noise-overlay" />
      
      {/* --- CUSTOM CURSOR --- */}
      <motion.div 
        className={`custom-cursor hidden md:block ${isHovering ? 'active' : ''}`}
        animate={{ 
          x: cursorPos.x - 4, 
          y: cursorPos.y - 4,
          scale: isHovering ? 6 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
      />
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isScrolled ? 'bg-theme-bg/80 backdrop-blur-xl border-b border-theme-border py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
          <Magnetic>
            <a 
              href="#home" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="text-xs font-bold tracking-[0.3em] uppercase text-theme-text group p-4 -m-4"
            >
              Alvin <span className="text-theme-accent opacity-60 group-hover:opacity-100 transition-opacity">Loria</span>
            </a>
          </Magnetic>

          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-12 text-[10px] font-medium tracking-[0.2em] uppercase">
              {navLinks.map((link, i) => (
                <li key={link.name} className="relative">
                  <a 
                    href={link.href} 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="text-theme-text/60 hover:text-theme-text transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-5 h-5 flex flex-col justify-between cursor-pointer group">
              <span className="block w-full h-[1px] bg-theme-text transition-all group-hover:w-3/4"></span>
              <span className="block w-full h-[1px] bg-theme-text transition-all group-hover:w-1/2"></span>
            </div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-zinc-900">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[80px] bg-theme-bg z-[199] md:hidden px-12 py-12"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif italic text-theme-text"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-8 border-t border-theme-border">
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-theme-accent"
                >
                  Initiate Correspondence
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12 md:flex items-center gap-16">
            <div className="flex-1 space-y-10 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent"
              >
                <span className="w-12 h-[1px] bg-theme-text opacity-20" />
                Selected Works 2025
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-[100px] font-serif font-light leading-[0.85] text-theme-text tracking-tighter"
              >
                Alvin<br />
                <span className="italic font-light">Loria</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-[0.2em] font-medium text-theme-accent max-w-sm border-l border-theme-border pl-6"
              >
                Full-Stack Developer · Artist · Into Health & Sports Science
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-light text-theme-accent-soft leading-relaxed max-w-sm"
              >
                An exploration of code and form within structured environments. Investigating how digital architecture interacts with creativity to create meaningful experiences.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <Magnetic>
                  <a 
                    href="#projects" 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="group flex items-center gap-6 px-10 py-5 bg-theme-text text-white rounded-full transition-all hover:bg-black"
                  >
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Examine Portfolio</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-12 md:mt-0 relative flex-shrink-0"
            >
              <div className="absolute -inset-6 border border-theme-border -z-10" />
              <div className="w-[320px] h-[400px] md:w-[440px] md:h-[600px] bg-theme-muted overflow-hidden relative shadow-2xl">
                 <img 
                  src="https://alvinprofile.vercel.app/static/test3.png" 
                  alt="Alvin Loria"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-black/40">Plate 001 / FIG A</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- VISION BOARD --- */}
        <section id="vision" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <SectionHeader 
              label="Archives"
              title="Philosophy & Form"
              desc="A collection of core principles and aesthetic directions that guide my practice."
            />

            <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
              {/* MISSION CARD - SPECIAL */}
              <motion.div 
                layout
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setMissionExpanded(!missionExpanded)}
                className="break-inside-avoid p-10 rounded-sm bg-theme-text text-theme-bg border border-white/10 shadow-2xl cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-10">
                   <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Entry 001</div>
                   <motion.div animate={{ rotate: missionExpanded ? 180 : 0 }}>
                    <ArrowRight size={18} className="opacity-40" />
                  </motion.div>
                </div>
                <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-4">Core Mission</h3>
                <p className="text-2xl font-serif italic leading-tight mb-8">
                  "Live a good life, be good to myself, others, and the world."
                </p>
                <AnimatePresence>
                  {missionExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20">
                        <p className="text-sm font-light tracking-wide text-theme-bg/80 leading-relaxed border-t border-white/10 pt-8 mt-4 whitespace-pre-wrap">
                          {MISSION_LONG}
                          <br /><br />
                          Click to collapse.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!missionExpanded && <div className="h-[1px] w-full bg-white opacity-10 mt-8" />}
              </motion.div>

              {/* CARD: JOY */}
              <div className="break-inside-avoid p-10 rounded-sm bg-theme-bg border border-theme-border shadow-sm group relative">
                 <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-8">Eudaimonia Index</h3>
                 <ul className="space-y-4">
                   {['Quiet Sketching', 'Reflective Journaling', 'Solar Shadows', 'Intentional Living', 'Deep Dialogue'].map(item => (
                     <li key={item} className="text-xs font-medium tracking-wide text-theme-text flex items-center gap-4">
                        <span className="h-[1px] w-4 bg-theme-text opacity-20"></span>
                        {item}
                     </li>
                   ))}
                 </ul>
              </div>

              {/* CARD: QUOTE */}
              <div className="break-inside-avoid p-10 rounded-sm border border-theme-border flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-theme-accent mb-4 opacity-40">Ref. 042</span>
                <p className="text-xl font-serif italic text-theme-text leading-relaxed">
                  Do good for me and for others. Endure hardships.
                </p>
              </div>

               {/* CARD: IMAGE ARISTOTLE */}
               <div className="break-inside-avoid rounded-sm overflow-hidden border border-theme-border group relative">
                <div className="aspect-[3/4] bg-theme-muted flex items-center justify-center p-8">
                  <img src="https://cdn.britannica.com/84/87984-050-7C5547FE/Detail-Roman-copy-portrait-bust-Aristotle-Greek.jpg" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-opacity" alt="Aristotle" />
                </div>
                <div className="p-6 border-t border-theme-border">
                   <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-accent">Plate 002 / Inspiration</p>
                </div>
              </div>

              {/* CARD: FINANCE */}
              <div className="break-inside-avoid p-10 rounded-sm bg-theme-bg border border-theme-border">
                 <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-8">Asset Allocation</h3>
                 <div className="space-y-8">
                    <div>
                      <div className="flex justify-between text-[8px] font-bold text-theme-accent mb-3 uppercase tracking-[0.2em]">
                        <span>Needs + Savings</span>
                        <span>0.85</span>
                      </div>
                      <div className="h-[1px] bg-theme-text opacity-10">
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 0.85 }} className="h-full bg-theme-text origin-left" />
                      </div>
                    </div>
                    <div>
                    <div className="flex justify-between text-[8px] font-bold text-theme-accent mb-3 uppercase tracking-[0.2em]">
                        <span>Leisure</span>
                        <span>0.15</span>
                      </div>
                      <div className="h-[1px] bg-theme-text opacity-10">
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 0.15 }} className="h-full bg-theme-accent origin-left" />
                      </div>
                    </div>
                 </div>
              </div>

              {/* CARD: PERFORMANCE */}
              <div className="break-inside-avoid p-8 rounded-sm bg-theme-text text-theme-bg border border-white/5">
                 <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-accent mb-6 leading-loose">Biometric Integrity / 03</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-white/10">
                       <span className="block text-[8px] opacity-40 uppercase mb-2">Resting HR</span>
                       <span className="text-xl font-serif italic">58bpm</span>
                    </div>
                    <div className="p-4 border border-white/10">
                       <span className="block text-[8px] opacity-40 uppercase mb-2">VO2 Max</span>
                       <span className="text-xl font-serif italic">52.4</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <SectionHeader 
              label="Selected Work"
              title="Digital Structures"
              desc="A methodology focused on health infrastructure, interactive systems, and spatial creativity."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
              {PROJECTS.map((proj, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`group relative ${proj.featured ? 'lg:col-span-2' : ''}`}
                >
                  <div className={`flex flex-col ${proj.featured ? 'lg:flex-row' : ''} gap-12`}>
                    <div className={`relative overflow-hidden bg-theme-muted border border-theme-border flex-shrink-0 group-hover:border-theme-text transition-colors duration-500 ${proj.featured ? 'w-full lg:w-[60%] aspect-video' : 'w-full aspect-[4/3]'}`}>
                       {proj.image ? (
                         <img src={proj.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-105" alt={proj.name} />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition-opacity bg-theme-muted">{proj.icon}</div>
                       )}
                       <div className="absolute top-6 left-6 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mix-blend-difference text-white">Obj / 00{i+1}</div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-8">
                      <div className="flex items-center gap-4">
                         <span className="h-[1px] w-12 bg-theme-accent opacity-30 group-hover:w-20 transition-all duration-500"></span>
                         <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-theme-accent">
                           {proj.tags.join(' // ')}
                         </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-serif italic text-theme-text leading-tight group-hover:text-theme-accent transition-colors">{proj.name}</h3>
                      <p className="text-sm font-light leading-relaxed text-theme-accent-soft max-w-md">{proj.desc}</p>
                      
                      {proj.link && (
                        <div className="pt-4">
                          <Magnetic>
                            <a 
                              href={proj.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onMouseEnter={() => setIsHovering(true)}
                              onMouseLeave={() => setIsHovering(false)}
                              className="inline-flex items-center gap-6 group/btn"
                            >
                              <span className="text-[11px] uppercase tracking-[0.4em] font-black border-b border-theme-text/10 pb-2 group-hover/btn:border-theme-text transition-all">Visit Structure</span>
                              <div className="w-10 h-10 rounded-full border border-theme-border flex items-center justify-center group-hover/btn:bg-theme-text group-hover/btn:text-theme-bg transition-all">
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                              </div>
                            </a>
                          </Magnetic>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SOUNDSCAPE SECTION --- */}
        <section id="soundscape" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                <SectionHeader 
                  label="Soundscape"
                  title="Audio Journal"
                  desc="A collection of frequencies and rhythms that define my interior spaces while I build and draw."
                />
                
                <div className="mt-12 space-y-12">
                  <div className="flex items-center gap-12">
                    <div className="flex items-end gap-[3px] h-16">
                      {[0.6, 0.4, 0.8, 0.5, 0.7, 0.3, 0.9, 0.4, 0.6, 0.5, 0.8].map((scale, i) => (
                        <motion.div 
                          key={i}
                          className="audio-bar w-[3px]"
                          animate={{ height: [12, 48, 16, 40, 20] }}
                          transition={{ 
                            duration: 0.8 / scale, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-theme-accent">Currently Resonating</p>
                       <p className="text-2xl font-serif italic text-theme-text">Binks Sake //  Kohei Tanaka</p>
                    </div>
                  </div>

                  <div className="p-8 border border-theme-border rounded-sm bg-theme-muted/30">
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Monthly Highlight</span>
                       <Music size={14} className="opacity-20" />
                    </div>
                    <div className="flex gap-8 items-center">
                       <div className="w-20 h-20 bg-theme-text rounded-sm overflow-hidden flex-shrink-0 relative group">
                          <img src="https://i.scdn.co/image/ab67616d0000b2734685f09623b36ab88d6ef71f" alt="Album Art" className="w-full h-full object-cover grayscale" />
                          <div className="absolute inset-0 bg-theme-accent/20 group-hover:bg-transparent transition-colors"></div>
                       </div>
                       <div>
                          <h4 className="text-lg font-serif italic mb-1">Sunny // 晴る</h4>
                          <p className="text-[10px] uppercase tracking-widest text-theme-accent">Yorushika • Second Person</p>
                          <div className="mt-4 flex gap-1">
                             {[1,1,1,1,0].map((on, i) => (
                               <div key={i} className={`w-1 h-1 rounded-full ${on ? 'bg-theme-text' : 'bg-theme-text/10'}`} />
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[450px]">
                <div className="sticky top-32">
                   <iframe 
                    style={{ borderRadius: '4px' }} 
                    src="https://open.spotify.com/embed/playlist/1FP8BgOXsNMoSbbHB5sRhy?utm_source=generator&theme=0" 
                    width="100%" 
                    height="500" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  ></iframe>
                  <div className="mt-6 flex justify-between items-center">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Profile: 31pdcpuwmw6swm4lxw67sdq37jgi</p>
                    <a 
                      href="https://open.spotify.com/user/31pdcpuwmw6swm4lxw67sdq37jgi" 
                      target="_blank"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-theme-text/20 hover:border-theme-text transition-all"
                    >
                      Follow Archive
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESEARCH SECTION --- */}
        <section id="researches" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <SectionHeader 
              label="Scientific Inquiry"
              title="Researches & Analysis"
              desc="Observation of patterns at the intersection of human behavior and digital monitoring."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESEARCHES.map((item, i) => (
                <ResearchCard 
                  key={i} 
                  item={item} 
                  i={i} 
                  onOpenAnalysis={() => setActiveAnalysis(item)}
                  setIsHovering={setIsHovering} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- ANALYSIS MODAL --- */}
        <AnimatePresence>
          {activeAnalysis && (
            <AnalysisModal 
              item={activeAnalysis} 
              onClose={() => setActiveAnalysis(null)} 
            />
          )}
        </AnimatePresence>

        {/* --- SOCIAL ARCHIVE SECTION --- */}
        <section id="archives" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <SectionHeader 
              label="Visual Archives"
              title="Curation of Form"
              desc="A minimal aesthetic showcase of visual inspirations. Life and art photos curated for structural integrity."
            />
            
            <SocialShowcase 
              links={[
                {
                  name: "Life Photos // Moments",
                  url: "https://www.instagram.com/alvin.etc",
                  images: [
                    "/Profile-1.jpg",
                    "/Profile-2.jpg",
                    "/Profile-3.jpg",
                    "/Profile-4.jpg",
                    "/Profile-5.jpg"
                  ],
                  footerLinks: [
                    { label: "Instagram", href: "https://www.instagram.com/alvin.etc/" },
                    { label: "Pinterest", href: "https://ph.pinterest.com/ajloriayey/" }
                  ]
                },
                {
                  name: "Art Photos // Structures",
                  url: "https://cara.app/ajloria/portfolio/all",
                  images: [
                    "/Cara-art-1.jpg",
                    "/Cara-art-2.png",
                    "/Cara-art-3.jpg",
                    "/Cara-art-4.jpg",
                    "/Cara-art-5.jpg"
                  ],
                  footerLinks: [
                    { label: "Cara Portfolio", href: "https://cara.app/ajloria/portfolio/all" },
                    { label: "Illustration Vercel", href: "https://ajloriaillust.vercel.app/" }
                  ]
                }
              ]}
            />
          </div>
        </section>

        <CognitiveProfile />

        {/* --- ABOUT --- */}
        <section id="about" className="py-32 bg-theme-bg border-b border-theme-border">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid md:grid-cols-12 gap-20 items-center">
              <div className="md:col-span-12 lg:col-span-5 relative">
                <div className="absolute -inset-6 border border-theme-border -z-10" />
                <div className="aspect-[4/5] bg-theme-muted overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://alvinprofile.vercel.app/static/test3.png" 
                    className="w-full h-full object-cover grayscale opacity-80" 
                    alt="Alvin" 
                  />
                  <div className="absolute bottom-8 left-8 text-[9px] font-bold tracking-[0.3em] uppercase text-black/40">Profile / BIO </div>
                </div>
              </div>

              <div className="md:col-span-12 lg:col-span-7 space-y-12">
                <SectionHeader 
                  label="Curriculum"
                  title="Biography"
                  desc="A study of cognitive patterns and spatial design applied to health and technology."
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-theme-border pt-12">
                   <div className="space-y-4">
                      <span className="block text-[10px] uppercase tracking-[0.3em] text-theme-accent mb-4 font-bold">Background</span>
                      <p className="text-sm font-light text-theme-accent-soft leading-relaxed">
                        Developer and artist from the Philippines, currently investigating BS Sports Science. Focused on the intersection of intentional living and meaningful construction.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <span className="block text-[10px] uppercase tracking-[0.3em] text-theme-accent mb-4 font-bold">Focus</span>
                      <p className="text-sm font-light text-theme-accent-soft leading-relaxed">
                        Exploring the limits of well-being through data analysis and creative expression. Understanding behavior through design.
                      </p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-theme-border">
                   {['React', 'Node.js', 'Health Tech', 'Spatial Design', 'Psychology'].map(skill => (
                     <div key={skill} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-text opacity-20"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">{skill}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-48 text-center bg-theme-bg">
          <div className="max-w-4xl mx-auto px-12 space-y-16">
            <div className="space-y-8">
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-theme-accent">Dialogue</span>
              <h2 className="text-6xl md:text-8xl font-serif italic font-light tracking-tighter">Connect.</h2>
              <p className="text-sm font-light text-theme-accent-soft max-w-md mx-auto leading-relaxed">Available for deliberate collaborations and architectural explorations of the digital medium.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold tracking-[0.3em] uppercase">
              {['LinkedIn', 'GitHub', 'Cara', 'Instagram'].map(label => (
                <a 
                  key={label} 
                  href="#" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="hover:text-theme-accent transition-colors border-b border-transparent hover:border-theme-accent pb-1"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="pt-12">
              <a 
                href="mailto:ajloria123@gmail.com" 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group block"
              >
                <span className="text-2xl md:text-4xl font-serif italic text-theme-text border-b border-theme-text/10 pb-4 group-hover:border-theme-text transition-all inline-block">
                  ajloria123@gmail.com
                </span>
                <span className="block mt-8 text-[9px] font-bold uppercase tracking-[0.5em] text-theme-accent opacity-40">Contact via secure protocol</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-12 py-16 bg-theme-bg border-t border-theme-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex gap-12 items-center">
            <div className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-theme-text"></span>
              <span className="w-2 h-2 rounded-full border border-theme-text/20"></span>
              <span className="w-2 h-2 rounded-full border border-theme-text/20"></span>
            </div>
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 font-bold">Curated / 2025</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[60px] font-serif italic leading-[0.8] opacity-5 select-none pointer-events-none">AL / LORIA</span>
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 mt-4">All artifacts protected — 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
