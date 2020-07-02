import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.css';
import useWindowSize from '../hooks/useWindowsize';

const calc = (x, y) => [
  -(y - 100 / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function TechItem({ logo, title }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [hover, setHover] = useState(false);
  const opacityProp = useSpring({ opacity: hover ? 1 : 0 });

  return (
    <animated.div
      onMouseEnter={() => setHover(true)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1] });
        setHover(false);
      }}
      style={{
        transform: props.xys.interpolate(trans),
        display: 'inline-block',
        // border: '6px solid',
        margin: 16,
        padding: 8,
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <img style={{}} src={logo} alt="bg" />
      <animated.p
        style={{
          ...opacityProp,
          height: 50,
          textAlign: 'center',
          fontSize: 22,
          position: 'absolute',
          width: '100%',
          left: 0,
          bottom: 0,
          margin: 0,
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          fontWeight: 'bold',
          padding: 8,
        }}
      >
        {title}
      </animated.p>
    </animated.div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { width } = useWindowSize();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/cloud-server')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <div
        className="image-grid"
        style={{
          width,
          overflowX: 'hidden',
          boxSizing: 'border-box',
          padding: 16,
          background: '#fbe9e7',
        }}
      >
        {[
          {
            title: 'React',
            logo: 'https://cdn.worldvectorlogo.com/logos/react.svg',
          },
          {
            title: 'GraphQL',
            logo:
              'data:image/png;base64,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',
          },
          {
            title: 'Flutter',
            logo: 'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg',
          },
          {
            title: 'Prisma',
            logo: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
          },
          {
            title: 'Hasura',
            logo:
              'data:image/png;base64,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',
          },
          {
            title: 'Firebase',
            logo: 'https://www.neoito.com/images/firebase-shareicon.png',
          },
          {
            title: 'Ubuntu',
            logo: 'https://cdn.worldvectorlogo.com/logos/ubuntu-icon.svg',
          },
          {
            title: 'mongoDB',
            logo:
              'https://linagora.com/wp-content/uploads/2018/06/MongoDB-logo.png',
          },
          {
            title: 'PostgreSQL',
            logo:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
          },
          {
            title: 'Java',
            logo:
              'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
          },
          {
            title: 'Dart',
            logo:
              'https://cdn.freebiesupply.com/logos/large/2x/dart-logo-png-transparent.png',
          },
          {
            title: 'TypeScript',
            logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
          },
          {
            title: 'Python',
            logo:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
          },
          {
            title: 'Electron',
            logo:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1024px-Electron_Software_Framework_Logo.svg.png',
          },
          {
            title: 'Apollo',
            logo:
              'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg',
          },
          {
            title: 'Fedora',
            logo:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/1200px-Fedora_logo.svg.png',
          },
          {
            title: 'S3',
            logo:
              'https://www.pikpng.com/pngl/m/73-731373_aws-s3-logo-png-transparent-amazon-s3-logo.png',
          },
          {
            title: 'Flask',
            logo:
              'data:image/png;base64,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',
          },
          {
            title: 'HTML5',
            logo:
              'data:image/png;base64,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',
          },
        ].map((item) => (
          <TechItem {...item} key={item.title} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
