import React from 'react';
import Helmet from 'react-helmet';

const Home = (props) => (
  <div>
    <Helmet
      title="Home"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:description', content: 'description of Home' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/546224435670163456/IQ2EDrPc.jpeg' },
        { property: 'og:title', content: 'Home' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://baliff-valerie-28140.netlify.com/' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/546224435670163456/IQ2EDrPc.jpeg' },
        { property: 'og:description', content: 'description of Home' },
      ]}
    />
    <h2>Home of Branch B</h2>
    <span>{props.name}</span>
  </div>
)

export default Home;
