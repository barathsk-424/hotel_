/**
 * Returns the basePath for the app, which is needed for
 * static image paths on GitHub Pages where the site is
 * deployed under a sub-directory (e.g. /hotel_).
 */
const isProd = process.env.NODE_ENV === 'production'
export const basePath = isProd ? '/hotel_' : ''

/**
 * Prefix a public asset path with the basePath.
 * Usage: assetPath('/hero.png') => '/hotel_/hero.png' in production
 */
export function assetPath(path: string): string {
  return `${basePath}${path}`
}
