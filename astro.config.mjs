import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://fromeroc9.github.io',
  base: '/testform-docs',
  integrations: [
    starlight({
      title: 'testform',
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/testform-docs/favicon.ico',
            sizes: '32x32',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/testform-docs/apple-touch-icon.png',
          },
        },
      ],
      defaultLocale: 'es',
      locales: {
        es: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/fromeroc9/testform',
        },
      ],
      sidebar: [
        {
          label: 'DOCS',
          items: [
            { slug: 'docs' },
            {
              label: 'Primeros Pasos',
              translations: { en: 'Getting Started' },
              items: [{ autogenerate: { directory: 'docs/getting-started' } }],
            },
            {
              label: 'Guías',
              translations: { en: 'Guides' },
              items: [{ autogenerate: { directory: 'docs/guides' } }],
            },
            {
              label: 'Arquitectura Core',
              translations: { en: 'Core Architecture' },
              items: [{ autogenerate: { directory: 'docs/test-as-code' } }],
            },
            {
              label: 'Lenguaje de Configuración',
              translations: { en: 'Configuration Language' },
              items: [
                { slug: 'docs/language' },
                { slug: 'docs/language/providers' },
                { slug: 'docs/language/resources' },
                { slug: 'docs/language/data-sources' },
                { slug: 'docs/language/variables' },
                { slug: 'docs/language/locals' },
                { slug: 'docs/language/outputs' },
                { slug: 'docs/language/modules' },
                {
                  label: 'Meta-argumentos',
                  translations: { en: 'Meta-arguments' },
                  items: [{ autogenerate: { directory: 'docs/language/meta-arguments' } }],
                },
                { slug: 'docs/language/search-and-import' },
                { slug: 'docs/language/sensitive-data' },
                { slug: 'docs/language/stacks' },
                { slug: 'docs/language/state' },
                { slug: 'docs/language/backends' },
                { slug: 'docs/language/validate' },
              ],
            },
            {
              label: 'Integración',
              translations: { en: 'Integration' },
              items: [{ autogenerate: { directory: 'docs/integration' } }],
            },
            {
              label: 'Migración',
              translations: { en: 'Migration' },
              items: [{ autogenerate: { directory: 'docs/migration' } }],
            },
            { slug: 'docs/terraform-parity', label: 'Paridad con Terraform' },
          ],
        },
        {
          label: 'CLI',
          items: [
            { slug: 'cli' },
            { slug: 'cli/getting-started' },
            { slug: 'cli/core-concepts' },
            { slug: 'cli/configuration' },
            { slug: 'cli/directories', label: 'El Directorio .testform', translations: { en: 'The .testform Directory' } },
            {
              label: 'Flujo de Trabajo',
              translations: { en: 'Core Workflow' },
              items: [{ autogenerate: { directory: 'cli/workflow' } }],
            },
            {
              label: 'Herramientas de Desarrollador',
              translations: { en: 'Developer Tools' },
              items: [{ autogenerate: { directory: 'cli/developer-tools' } }],
            },
            {
              label: 'Almacenamiento y Estado',
              translations: { en: 'Storage & State' },
              items: [{ autogenerate: { directory: 'cli/storage' } }],
            },
            {
              label: 'Espacios de Trabajo',
              translations: { en: 'Workspaces' },
              items: [{ autogenerate: { directory: 'cli/workspaces' } }],
            },
          ],
        },
        {
          label: 'API',
          items: [
            { slug: 'api' },
            {
              label: 'Módulos del SDK',
              translations: { en: 'SDK Modules' },
              items: [
                { slug: 'api/policies', label: 'Políticas (registerPolicy)', translations: { en: 'Policies (registerPolicy)' } },
                { slug: 'api/resources', label: 'Recursos (registerResource)', translations: { en: 'Resources (registerResource)' } },
                { slug: 'api/backends', label: 'Backends (IBackend)', translations: { en: 'Backends (IBackend)' } },
                { slug: 'api/providers', label: 'Proveedores (IProvider)', translations: { en: 'Providers (IProvider)' } },
                { slug: 'api/expressions', label: 'Expresiones (Evaluator)', translations: { en: 'Expressions (Evaluator)' } },
                { slug: 'api/state', label: 'Gestión de Estado (State)', translations: { en: 'State Management (State)' } },
                { slug: 'api/reports', label: 'Reportes (IReport)', translations: { en: 'Reports (IReport)' } },
              ],
            },
            {
              label: 'Funciones Integradas',
              translations: { en: 'Built-in Functions' },
              items: [{ autogenerate: { directory: 'functions' } }],
            },
          ],
        },
      ],
      components: {
        Header: './src/components/Header.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
