import React from 'react';
import Helmet from 'react-helmet';

class Home extends React.Component {
  componentWillMount() {
    console.log(window.location);
    console.log(window.location.href);
  }

  render() {
    return <div>
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
      <h2>Home</h2>
      <span>{this.props.name}</span>
    </div>
  }
}
export default Home;
