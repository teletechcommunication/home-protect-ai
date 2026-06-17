import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

export const SEO = ({ 
  title = "Home Protect AI | Professional Home Security & Monitoring", 
  description = "Intelligent cameras, professional monitoring, and elegant smart devices — engineered to protect what matters and disappear into your life.",
  canonical = "https://homeprotectai.com",
  ogType = "website",
  ogImage = "https://homeprotectai.com/og-image.jpg",
  schema
}: SEOProps) => {
  const fullTitle = title.includes("Home Protect AI") ? title : `${title} | Home Protect AI`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
