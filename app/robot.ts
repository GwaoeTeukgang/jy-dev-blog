import { MetadataRoute } from 'next'
import { HOST_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/']
    },
    sitemap: `${HOST_URL}/sitemap.xml`,
  }
}