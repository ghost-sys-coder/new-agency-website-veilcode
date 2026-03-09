declare module "*.css";

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

interface Project {
  tag:         string;
  title:       string;
  desc:        string;
  metric:      string;
  metricLabel: string;
  projectUrl?: string;
  githubUrl?: string;
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