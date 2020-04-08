const path = require('path');

const defaultLocale = 'en-US';

module.exports = require('apostrophe')({
  root: module,
  baseUrl: 'http://localhost:3000',
  shortName: 'apostrophe-boilerplate',
  migrate: false,
  modules: {
    'apostrophe-db': {
      connect: {
        useUnifiedTopology: true
      }
    },
    'apostrophe-copy-page-from-elsewhere': {},
    'apostrophe-pages': {
      copyFromElsewhereWithoutEditPermission: true
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-i18n': {
      namespaces: true
    },
    'apostrophe-i18n-static': {
      defaultLocale,
      objectNotation: '-',
      useWorkflowLocales: true,
      disableLocaleChange: true,
      ignoreNamespaces: [ 'apostrophe' ]
    },
    'apostrophe-workflow': {
      alias: 'workflow',
      locales: [
        {
          label: 'Master',
          name: 'master',
          private: true,
          children: [
            {
              label: 'English',
              name: 'en-US',
            },
            {
              label: 'Spanish',
              name: 'es-ES',
            },
            {
              label: 'French',
              name: 'fr-FR',
            },
            {
              label: 'Germany',
              name: 'de-DE',
              children: [
                {
                  label: 'Austria',
                  name: 'de-AT'
                },
                {
                  label: 'Switzerland',
                  name: 'de-CH'
                }
              ]
            },
          ]
        }
      ],
      defaultLocale,
      excludeTypes: [ 'apostrophe-svg-sprites' ],
    }
  }
});
