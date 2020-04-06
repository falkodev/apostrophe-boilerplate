const path = require('path');

const defaultLocale = 'en-US';

module.exports = require('apostrophe')({
  root: module,
  baseUrl: 'http://localhost:3000',
  shortName: 'apostrophe-boilerplate',
  migrate: false,
  modules: {
    // 'apostrophe-assets': {
    //   lean: true
    // },
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
      // objectNotation: true,
      namespaces: true
    },
    'apostrophe-i18n-static': {
      defaultLocale,
      // autoReload: false,
      // disabledKey: true,
      objectNotation: '-',
      useWorkflowLocales: true,
      disableLocaleChange: true,
      ignoreNamespaces: [ 'apostrophe' ]
      // locales: [
      //   {
      //     label: 'English',
      //     value: 'en-US',
      //   },
      //   {
      //     label: 'Spanish',
      //     value: 'es-ES',
      //   },
      //   {
      //     label: 'French',
      //     value: 'fr-FR',
      //   },
      //   {
      //     label: 'German',
      //     value: 'de-DE',
      //   },
      //   {
      //     label: 'Austrian',
      //     value: 'de-AT',
      //   },
      //   {
      //     label: 'Swiss',
      //     value: 'de-CH',
      //   },
      // ]
    },
    // 'apostrophe-i18n-debugger': {},
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
    },
    // 'apostrophe-svg-sprites': {
    //   maps: [
    //     {
    //       label: 'Cars',
    //       name: 'sprite',
    //       file: 'svg/4w-*.svg'
    //     },
    //     {
    //       label: 'Places Icons',
    //       name: 'places',
    //       file: 'svg/places.svg'
    //     },
    //   ]
    // },
    // 'apostrophe-svg-sprites-widgets': {},
    // 'apostrophe-tiptap-rich-text-widgets': {},
    // 'apostrophe-rich-text-widgets': {
    //   tiptap: false
    // },
    // 'apostrophe-tiptap-widgets': {
    //   extend: 'apostrophe-rich-text-widgets',
    //   tiptap: true,
    //   label: 'Tiptap Rich Text'
    // },
    // 'apostrophe-users': {
    //   disableInactiveAccounts: {
    //     neverDisabledGroups: ['admin'],
    //     inactivityDuration: 10
    //   }
    // },
    // 'apostrophe-login': {
    //   totp: true
    // },
    custom: {}
  }
});
