const path = require('path');

const locales = [
  {
    label: 'German',
    value: 'de-DE',
  },
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: 'Spanish',
    value: 'es-ES',
  },
  {
    label: 'French',
    value: 'fr-FR',
  }
];

const defaultLocale = 'en-US';

const apos = require('apostrophe')({
  baseUrl: 'http://localhost:3000',
  shortName: 'apostrophe-boilerplate',
  migrate: false,
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-i18n-static': {
      disabledKey: true,
      defaultLocale,
      locales
    },
    // 'apostrophe-i18n-debugger': {},
    'apostrophe-workflow': {
      alias: 'workflow',
      locales: locales.map(locale => ({ label: locale.label, name: locale.value })),
      defaultLocale,
      excludeTypes: [ 'apostrophe-svg-sprites' ],
    },
    'apostrophe-svg-sprites': {
      maps: [
        {
          label: 'Cars',
          name: 'sprite',
          file: 'svg/4w-*.svg'
        },
        {
          label: 'Places Icons',
          name: 'places',
          file: 'svg/places.svg'
        },
      ]
    },
    'apostrophe-svg-sprites-widgets': {},
    'apostrophe-tiptap-rich-text-widgets': {},
    'apostrophe-rich-text-widgets': {
      tiptap: false
    },
    'apostrophe-tiptap-widgets': {
      extend: 'apostrophe-rich-text-widgets',
      tiptap: true,
      label: 'Tiptap Rich Text'
    },
    // 'apostrophe-users': {
    //   disableInactiveAccounts: {
    //     neverDisabledGroups: ['admin'],
    //     inactivityDuration: 0
    //   }
    // },
    // 'apostrophe-login': {
    //   totp: true
    // },
  }
});
