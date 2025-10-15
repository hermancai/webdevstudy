const fs = require('fs')
const path = require('path')

/** Get ISO string of last modified time for a given markdown file */
function getMarkdownLastMod(slug) {
  try {
    const filePath = path.join(process.cwd(), 'markdown', `${slug}.md`)
    const stats = fs.statSync(filePath)
    return stats.mtime.toISOString()
  } catch {
    return null
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webdevstudy.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "app",

  changefreq: 'monthly',
  priority: 0.6,

    exclude: [
    '/robots.txt',
    '/manifest.json',
    '/favicon.ico',
    '/apple-icon.png',
    '/sitemap.xml',
    '/sitemap-*.xml',
  ],

  transform: async (config, route) => {
    let changefreq = 'monthly'
    let priority = 0.6

    if (route === '/') {
      priority = 1.0
    }

    // Map route -> markdown file slug (e.g. /general -> /markdown/general.md)
    const slug = route === '/' ? 'index' : route.replace(/^\/|\/$/g, '')
    const lastmod = getMarkdownLastMod(slug)

    // Build sitemap entry
    const entry = {
      loc: route,
      changefreq,
      priority,
    }
    if (lastmod) entry.lastmod = lastmod // only include if available

    return entry
  },
}
