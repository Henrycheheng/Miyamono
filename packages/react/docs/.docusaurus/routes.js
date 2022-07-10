import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ce2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ff0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '31d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd4c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b17'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '957'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '1fc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '29a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd63'),
    routes: [
      {
        path: '/components/',
        component: ComponentCreator('/components/', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/components/basic/button',
        component: ComponentCreator('/components/basic/button', '51d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
