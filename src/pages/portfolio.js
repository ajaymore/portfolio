import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Portfolio() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="portfolio-ctn">
        {[
          {
            img: 'cmca.png',
            link: 'https://cmcaindia.web.app/',
            name: 'CMCA India',
          },
          {
            img: 'cmca-ios.png',
            link: 'https://apps.apple.com/us/app/cmca/id1400966758',
            name: 'CMCA iOS App',
          },
          {
            img: 'elections.png',
            link: 'https://apustudentelections.firebaseapp.com/',
            name: 'APU Student Elections',
          },
          {
            img: 'i4pt0.png',
            link: 'http://i4pt0.parallellearning.in/',
            name: 'Industry 4.0',
          },
          {
            img: 'itforchange.png',
            link: 'https://itforchange.net/',
            name: 'IT For Change',
          },
          {
            img: 'miigo.png',
            link: 'http://miigo.in/',
            name: 'Miigo Innovations',
          },
          {
            img: 'safety-games.png',
            link: 'https://safetyweek.web.app/jcb/kbsc-covid',
            name: 'Safety Games',
          },
        ].map((item) => (
          <div key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={useBaseUrl(`/static/img/${item.img}`)} alt={item.img} />
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Portfolio;
