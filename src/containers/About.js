import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'About' },
        { name: 'twitter:description', content: 'description of About' },
        { name: 'twitter:image', content: 'https://qiita-image-store.s3.amazonaws.com/0/25060/d80126f3-6d8f-ebba-f363-b73cc6128490.png' },
        { property: 'og:title', content: 'About' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://baliff-valerie-28140.netlify.com/about' },
        { property: 'og:image', content: 'https://qiita-image-store.s3.amazonaws.com/0/25060/d80126f3-6d8f-ebba-f363-b73cc6128490.png' },
        { property: 'og:description', content: 'description of About' },
      ]}
    />
    <h2>About</h2>
  </div>
)

export default About;

