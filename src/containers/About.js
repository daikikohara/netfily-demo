import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

const About = (props) => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'About' },
        { name: 'twitter:description', content: 'description of About' },
        { name: 'twitter:image', content: 'https://resources-staging.nexgent.net/programs/full-stack-network-associate/images/thumbnail.png' },
        { property: 'og:title', content: 'About' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://baliff-valerie-28140.netlify.com/about' },
        { property: 'og:image', content: 'https://resources-staging.nexgent.net/programs/full-stack-network-associate/images/thumbnail.png' },
        { property: 'og:description', content: 'description of About' },
      ]}
    />
    <h2>About</h2>
    <span>{`${props.name} on ${props.host}`}</span>
    <div>{moment().format()}</div>
  </div>
)

export default About;

