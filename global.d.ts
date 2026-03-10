declare module "*.css";


interface WorkImpactStats {
  metric: string;
  label: string;
  sub: string;
  accent: string;
  bg: string;
  border: string;
}

interface TeamMember {
  initials:  string;
  name:      string;
  role:      string;
  bio:       string;
  skills:    string[];
  linkedin:  string;
  twitter:   string;
  accentClass: string;
  avatarBg:    string;
}


interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  /** Tailwind arbitrary-value classes for accent colour variants */
  classes: {
    icon:         string; // text color
    tag:          string; // bg + border + text via arbitrary values
    glow:         string; // corner radial bg
    hoverBorder:  string; // border on hover
    hoverShadow:  string; // box-shadow on hover
    link:         string; // "Explore service" text color
  };
}


interface DeliverableItem {
  title: string;
  desc:  string;
}

interface ServiceDeepDiveData {
  id:         string;
  number:     string;
  icon:       string;
  title:      string;
  tagline:    string;
  intro:      string;
  challenge:  string;
  approach:   string;
  deliverables: DeliverableItem[];
  stack:      string[];
  metric:     string;
  metricLabel:string;
  metricSub:  string;
  classes: {
    accent:      string;
    dimBg:       string;
    border:      string;
    glow:        string;
    stackBg:     string;
    stackBorder: string;
    metricText:  string;
    divider:     string;
  };
}

interface PricingTier {
  name:       string;
  badge:      string | null;
  price:      string;
  priceSub:   string;
  desc:       string;
  features:   string[];
  cta:        string;
  featured:   boolean;
}


// start page
interface WizardData {
  /* Step 1 */
  service:     string;
  /* Step 2 */
  budget:      string;
  timeline:    string;
  /* Step 3 */
  name:        string;
  email:       string;
  company:     string;
  /* Step 4 */
  description: string;
  goals:       string[];
}


// project data 
interface ProjectScreenshot {
  src:     string | null;
  alt:     string;
  caption: string;
  size:    "wide" | "half";
}

interface ProjectResult {
  metric: string;
  label:  string;
  sub:    string;
}

interface ProjectDeliverable {
  title: string;
  desc:  string;
}

interface ProjectTestimonial {
  quote:    string;
  name:     string;
  role:     string;
  initials: string;
}
interface Project {
  slug:         string;
  service:      ServiceSlug;
  serviceLabel: string;
  year:         string;
  title:        string;
  client:       string;
  industry:     string;
  summary:      string;
  challenge:    string;
  approach:     string;
  outcome:      string;
  metric:       string;
  metricLabel:  string;
  tags:         string[];
  featured:     boolean;
  duration:     string;
  team:         string;
  results:      ProjectResult[];
  deliverables: ProjectDeliverable[];
  screenshots:  ProjectScreenshot[];
  testimonial:  ProjectTestimonial | null;
  nextSlug:     string | null;
  classes: {
    accent:      string;
    dimBg:       string;
    border:      string;
    hoverBorder: string;
    hoverShadow: string;
    gradFrom:    string;
  };
}


interface SampleProjects {
  tag:         string;
  title: string;
  slug?: string;
  desc:        string;
  metric:      string;
  metricLabel: string;
  projectUrl?: string;
  githubUrl?: string;
  screenShot?: string;
  classes: {
    tag:        string;
    metric:     string;
    orb:        string;
    innerOrb:   string;
    hoverBorder:string;
    hoverShadow:string;
    link:       string;
  };
}