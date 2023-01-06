const fs = require('fs');
const globby = require('globby');

function addPage(page) {
  const path = page.replace('src/pages', '').replace('.js', '').replace('.mdx', '').replace('.tsx', '').replace('.ts', '').replace('.md', '').replace('wiki/', '/wiki/')
  const route = path === '/index' ? '' : path
  return `  <url>
      <loc>${`https://mine-treasure.com${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`
}
async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    'src/pages/**/*{.js,.mdx,.ts,.tsx}',
    'wiki/*.md',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/wiki/*.tsx'
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
  </urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}
generateSitemap()
