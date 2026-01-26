import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction) {
        return {
            rules: {
                userAgent: '*',
                allow: '/',
            },
            sitemap: `/sitemap.xml`,
        };
    } else {
        return {
            rules: {
                userAgent: '*',
                disallow: '/',
            },
        };
    }
}
