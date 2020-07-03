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
            img: 'cmca.jpg',
            link: 'https://cmcaindia.web.app/',
            name: 'CMCA India',
          },
          {
            img: 'cmca-ios.jpg',
            link: 'https://apps.apple.com/us/app/cmca/id1400966758',
            name: 'CMCA iOS App',
          },
          {
            img: 'elections.jpg',
            link: 'https://apustudentelections.firebaseapp.com/',
            name: 'APU Student Elections',
          },
          {
            img: 'i4pt0.jpg',
            link: 'http://i4pt0.parallellearning.in/',
            name: 'Industry 4.0',
          },
          {
            img: 'itforchange.jpg',
            link: 'https://itforchange.net/',
            name: 'IT For Change',
          },
          {
            img: 'miigo.jpg',
            link: 'http://miigo.in/',
            name: 'Miigo Innovations',
          },
          {
            img: 'safety-games.jpg',
            link: 'https://safetyweek.web.app/jcb/kbsc-covid',
            name: 'Safety Games',
          },
        ].map((item) => (
          <div key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={useBaseUrl(`/img/${item.img}`)} alt={item.img} />
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Portfolio;
