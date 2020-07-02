export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "@ajaymore",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/cloud-server",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "portfolio",
          "label": "Portfolio",
          "position": "left"
        },
        {
          "href": "https://github.com/ajaymore/",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/ajaymore/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/__ajaymore"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Portfolio Built with Docusaurus."
    }
  },
  "title": "Ajay More",
  "tagline": "Full Stack Developer",
  "url": "https://ajaymore.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "ajaymore",
  "projectName": "ajaymore.github.io",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/mystical/Workspace/Projects/ajay/portfolio/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/mystical/Workspace/Projects/ajay/portfolio/src/css/custom.css"
        }
      }
    ]
  ]
};