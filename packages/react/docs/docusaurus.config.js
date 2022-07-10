/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Miya UI - React',
  tagline: '一个随意的React组件库',
  url: 'https://github.com/Henrycheheng/Miyamono.git',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo.svg',
  organizationName: 'Blackman99',
  projectName: 'miya-ui',
  githubHost: 'github.com',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-6X1YBPZXL2',
        },
        docs: {
          sidebarCollapsed: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./config/sidebars.js'),
          editUrl:
            'https://github.com/Henrycheheng/Miyamono/miya-ui/edit/main/packages/react/docs',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            () => async ast => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              ast.children.unshift({
                type: 'import',
                value:
                  "import { PropTable } from '@site/src/theme/components/PropTable.tsx'",
                default: false,
              })
            },
          ],
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/styles/doc.scss'),
            require.resolve('miya-styles/src/index.scss'),
          ],
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass', './plugins/mi-components-doc'],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Miya UI - React',
        logo: {
          alt: 'Miya UI Logo',
          src: 'logo.svg',
          srcDark: 'logo-dark.svg',
        },
        items: [
          {
            position: 'right',
            label: '指南',
            type: 'dropdown',
            items: [
              {
                label: '安装',
                to: '/guide/install',
              },
              {
                to: 'guide/theme-customize',
                label: '主题定制',
              },
            ],
          },
          {
            position: 'right',
            label: '功能',
            type: 'dropdown',
            items: [
              {
                label: '样式相关',
                to: '/style/global-util/',
              },
              {
                label: '组件',
                to: '/components/basic/button',
              },
              {
                label: 'Hooks API',
                to: '/hooks/',
              },
            ],
          },
          {
            href: 'https://github.com/Henrycheheng/Miyamono.git',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '指南',
            items: [
              {
                label: '安装',
                to: '/guide/install',
              },
            ],
          },
          {
            title: '组件',
          },
          {
            title: '更多',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Henrycheheng/Miyamono.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Miya UI.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      showLastUpdateTime: true,
      algolia: {
        apiKey: 'e4cde0eff4725059b13ad81010ace04b',
        appId: '79D0K7AVBK',
        indexName: 'miya-ui',
        contextualSearch: false,
      },
      docs: {
        sidebar: { autoCollapseCategories: false },
      },
    }),
}

module.exports = config
