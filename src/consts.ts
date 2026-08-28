/**
 * Single source of truth for company data.
 * Everything you are likely to change lives in this file.
 */

export const SITE = {
  /** Brand name shown in the header and page titles. */
  name: 'TechAndDev',
  /** Full legal entity name — must appear in the footer and legal pages. */
  legalName: 'TechAndDev LLC',
  /** TODO: replace once the domain is registered. */
  domain: 'techanddev.com',
  url: 'https://techanddev.com',
  tagline: 'Native software for Apple platforms',
  description:
    'TechAndDev LLC is an independent software studio in Colorado building focused, privacy-respecting applications for macOS and iOS.',
  /** TODO: temporary address — replace with a real mailbox on the company domain. */
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
 * Add an entry here, then create the matching page in src/pages/products/.
 */
export const PRODUCTS = [
  {
    slug: 'vpn-list',
    name: 'VPN List',
    platform: 'macOS',
    status: 'In development',
    tagline: 'Every VPN connection on your Mac, in one place.',
    summary:
      'A lightweight menu bar utility that keeps all of your VPN configurations in one list and lets you switch between them in a single click.',
  },
] as const;
