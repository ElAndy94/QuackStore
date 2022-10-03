const siteUrl = process.env.SITE_URL || 'https://quackstore.co.uk';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  exclude: ['/secret/**'],
};
