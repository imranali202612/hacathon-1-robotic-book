import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '605'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4e5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd60'),
            routes: [
              {
                path: '/docs/category/module-1-the-robotic-nervous-system',
                component: ComponentCreator('/docs/category/module-1-the-robotic-nervous-system', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-2-digital-twin',
                component: ComponentCreator('/docs/category/module-2-digital-twin', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-3-ai-robot-brain',
                component: ComponentCreator('/docs/category/module-3-ai-robot-brain', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/',
                component: ComponentCreator('/docs/module-2-digital-twin/', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/physics-simulation-gazebo',
                component: ComponentCreator('/docs/module-2-digital-twin/physics-simulation-gazebo', 'cc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-robot-brain/',
                component: ComponentCreator('/docs/module-3-ai-robot-brain/', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1-ros2-nervous-system/',
                component: ComponentCreator('/docs/module1-ros2-nervous-system/', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1-ros2-nervous-system/python-rclpy',
                component: ComponentCreator('/docs/module1-ros2-nervous-system/python-rclpy', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1-ros2-nervous-system/ros2-fundamentals',
                component: ComponentCreator('/docs/module1-ros2-nervous-system/ros2-fundamentals', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1-ros2-nervous-system/urdf-humanoids',
                component: ComponentCreator('/docs/module1-ros2-nervous-system/urdf-humanoids', 'fb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
