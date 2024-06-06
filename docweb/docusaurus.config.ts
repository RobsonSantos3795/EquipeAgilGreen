import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TechForge',
  tagline: 'Navegue pela variedade de opções e encontre as ferramentas ideais para impulsionar seu projeto.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unifacs', // Usually your GitHub org/user name.
  projectName: 'techforge', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logotf.svg',
    navbar: {
      title: 'TechForge',
      logo: {
        alt: 'TechForge Logo',
        src: 'img/logotf.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Desenvolvedores',
          items: [
            {
              label: 'Beatriz Andrade Siquara',
              href: 'https://www.linkedin.com/in/beatriz-siquara/',
            },
            {
              label: 'Breno Pimentel de Almeida Miranda',
              href: 'https://www.linkedin.com/in/breno-pimentel-417369214/',
            },
            {
              label: 'Luan Gabriel Santos Paim Dias',
              href: 'https://www.linkedin.com/in/luandiaspaim',
            },
            {
              label: 'Pablo Santana dos Santos',
              href: '#',
            },
            {
              label: 'Robson Santos de Jesus',
              href: 'https://www.linkedin.com/in/robson-graça-dos-santos-a28254234/',
            },
            {
              label: 'Yana Barreto Luiz Simina',
              href: 'https://www.linkedin.com/in/yanabarreto/',
            }
          ],
        },
        {
          title: 'Professor Orientador',
          items: [
            {
              label: 'Felipe Oliveira dos Santos',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Por TechForge.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
