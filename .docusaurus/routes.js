
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/react',
  component: ComponentCreator('/blog/tags/react'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/portfolio',
  component: ComponentCreator('/portfolio'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/cloud-server',
  component: ComponentCreator('/docs/cloud-server'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/docker',
  component: ComponentCreator('/docs/docker'),
  exact: true,
  
},
{
  path: '/docs/fedora',
  component: ComponentCreator('/docs/fedora'),
  exact: true,
  
},
{
  path: '/docs/flutter',
  component: ComponentCreator('/docs/flutter'),
  exact: true,
  
},
{
  path: '/docs/git',
  component: ComponentCreator('/docs/git'),
  exact: true,
  
},
{
  path: '/docs/langs/dart/basics',
  component: ComponentCreator('/docs/langs/dart/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/java/basics',
  component: ComponentCreator('/docs/langs/java/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/php/basics',
  component: ComponentCreator('/docs/langs/php/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/python/basics',
  component: ComponentCreator('/docs/langs/python/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/rust/basics',
  component: ComponentCreator('/docs/langs/rust/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/ts/basics',
  component: ComponentCreator('/docs/langs/ts/basics'),
  exact: true,
  
},
{
  path: '/docs/langs/vba/basics',
  component: ComponentCreator('/docs/langs/vba/basics'),
  exact: true,
  
},
{
  path: '/docs/languages',
  component: ComponentCreator('/docs/languages'),
  exact: true,
  
},
{
  path: '/docs/rnative-android',
  component: ComponentCreator('/docs/rnative-android'),
  exact: true,
  
},
{
  path: '/docs/rnative-ios',
  component: ComponentCreator('/docs/rnative-ios'),
  exact: true,
  
},
{
  path: '/docs/shell',
  component: ComponentCreator('/docs/shell'),
  exact: true,
  
},
{
  path: '/docs/ubuntu',
  component: ComponentCreator('/docs/ubuntu'),
  exact: true,
  
},
{
  path: '/docs/wordpress',
  component: ComponentCreator('/docs/wordpress'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
