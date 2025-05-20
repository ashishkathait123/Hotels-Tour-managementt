/**
 * Luxury Escapes Typography System
 * 
 * Provides consistent text styles matching the Luxury Escapes brand
 * Uses Montserrat for headings and Open Sans for body text
 */

export const typography = {
  // Display styles
  display: {
    xl: 'text-5xl font-bold font-heading leading-tight md:text-6xl',
    lg: 'text-4xl font-bold font-heading leading-tight md:text-5xl',
    md: 'text-3xl font-bold font-heading leading-snug md:text-4xl',
  },

  // Heading styles
  h1: 'text-3xl font-bold font-heading md:text-4xl',
  h2: 'text-2xl font-bold font-heading md:text-3xl',
  h3: 'text-xl font-bold font-heading md:text-2xl',
  h4: 'text-lg font-bold font-heading md:text-xl',
  h5: 'text-base font-bold font-heading md:text-lg',
  h6: 'text-sm font-bold font-heading md:text-base',

  // Body text
  body: {
    xl: 'text-xl font-sans',
    lg: 'text-lg font-sans',
    base: 'text-base font-sans',
    sm: 'text-sm font-sans',
    xs: 'text-xs font-sans',
  },

  // Special text styles
  lead: 'text-lg font-sans leading-relaxed',
  quote: 'text-xl font-sans italic text-neutral-2 border-l-4 border-secondary pl-4',
  caption: 'text-sm font-sans text-neutral-3',
  overline: 'text-xs font-heading uppercase tracking-widest',

  // Utility text
  button: {
    lg: 'text-lg font-heading font-bold',
    base: 'text-base font-heading font-bold',
    sm: 'text-sm font-heading font-bold',
  },

  // Price text styles
  price: {
    original: 'text-base font-sans text-neutral-3 line-through',
    discounted: 'text-2xl font-heading font-bold text-primary',
    small: 'text-sm font-sans text-neutral-3',
  },
}

/**
 * Helper function to combine typography styles with additional classes
 * @param {string} variant - The typography variant to use
 * @param {string} className - Additional Tailwind classes
 * @returns {string} Combined class string
 */
export function textStyle(variant, className = '') {
  const baseStyle = typography[variant] || ''
  return `${baseStyle} ${className}`.trim()
}