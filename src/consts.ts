/**
 * Single source of truth for company data.
 * Everything you are likely to change lives in this file.
 */

export const SITE = {
  /** Brand name shown in the header and page titles. */
  name: 'TechAndDev',
  /** Full legal entity name. Must appear in the footer and legal pages. */
  legalName: 'TechAndDev LLC',
  /** TODO: replace once the domain is registered. */
  domain: 'techanddev.com',
  url: 'https://techanddev.com',
  tagline: 'Software development, automation and AI agents',
  description:
    'TechAndDev LLC is a software development organization based in Colorado. We build applications, automation systems and AI agents.',
  /** TODO: temporary address. Replace with a real mailbox on the company domain. */
  email: 'support@techanddev.com',
  /** Public location shown in the footer. */
  location: 'Colorado 80122, United States',
  founded: 2026,
} as const;

export const NAV = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
] as const;

/**
 * Product cards shown on the home page and the products index.
 * Add an entry here, then create the matching page at the path given in href.
 */
export const PRODUCTS = [
  {
    slug: 'mynote',
    href: '/mynote',
    name: 'MyNote',
    platform: 'iPhone, iPad, Mac, Watch',
    status: 'Coming soon',
    tagline: 'Your notes, right on your Home Screen.',
    summary:
      'A native notes app built around widgets. Any note can sit on the Home Screen, the Mac desktop or the watch face, so you see it without opening the app.',
  },
  {
    slug: 'vpn-list',
    href: '/products/vpn-list',
    name: 'VPN List',
    platform: 'macOS',
    status: 'In development',
    tagline: 'Several VPN profiles connected at the same time.',
    summary:
      'A VPN client that keeps every profile in one list and lets you run several connections at once. Works with WireGuard, OpenVPN and other protocols.',
  },
] as const;
