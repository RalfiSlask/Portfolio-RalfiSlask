import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Matthias portfolio application that shows his expertise in software development. Comes with AI, Spotify and more fun features."
      />
      <meta name="keywords" content="Matthias, AI, Spotify" />

      <title>Matthias Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href="https://www.example.com" />
      <meta property="og:title" content="Matthias Portfolio" />
      <meta
        property="og:description"
        content="Matthias portfolio application that shows his expertise in software development. Comes with AI, Spotify and more fun features."
      />
      <meta property="og:image" content="https://www.example.com/your-image.jpg" />
      <meta property="og:url" content="https://www.example.com" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Matthias',
          'jobTitle': 'Software Developer',
          'url': 'https://www.example.com',
          'sameAs': ['https://www.linkedin.com/in/matthias-nilsson-68023b294/', 'https://github.com/RalfiSlask'],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;