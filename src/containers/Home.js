import React from 'react';
import Helmet from 'react-helmet';

class Home extends React.Component {
  render() {
    return <div>
      <Helmet
        title="Home"
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: 'Home' },
          { name: 'twitter:description', content: 'description of Home' },
          { name: 'twitter:image', content: 'https://resources-staging.nexgent.net/courses/land-your-dream-job/images/thumbnail-color.png' },
          { property: 'og:title', content: 'Home' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://baliff-valerie-28140.netlify.com/' },
          { property: 'og:image', content: 'https://resources-staging.nexgent.net/courses/land-your-dream-job/images/thumbnail-color.png' },
          { property: 'og:description', content: 'description of Home' },
        ]}
      />
      <h2>Home</h2>
      <span>{`${this.props.name} on ${this.props.host}`}</span>
    </div>
  }
}
export default Home;
