import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="src/assets/images/SEO-Logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Matthias portfolio showcases his expertise in software development, featuring innovative projects and technologies such as AI and Spotify integrations."
      />
      <meta name="keywords" content="Matthias, AI, Spotify, software development, Portfolio" />

      <title>Matthias Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="canonical" href="https://matthias-nilsson.se/" />
      <meta property="og:title" content="Matthias Portfolio" />
      <meta
        property="og:description"
        content="Matthias portfolio showcases his expertise in software development, featuring innovative projects and technologies such as AI and Spotify integrations."
      />
      <meta property="og:image" content="https://matthias-nilsson.se/src/assets/images/SEO-Logo.png" />
      <meta property="og:url" content="https://matthias-nilsson.se/" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Matthias',
          'jobTitle': 'Software Developer',
          'url': 'https://matthias-nilsson.se/',
          'sameAs': ['https://www.linkedin.com/in/matthias-nilsson-68023b294/', 'https://github.com/RalfiSlask'],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
