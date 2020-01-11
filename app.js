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
  shortName: 'apostrophe-boilerplate',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-i18n-static': {
      disabledKey: true,
      defaultLocale,
      locales
    },
    'apostrophe-workflow': {
      alias: 'workflow',
      locales: locales.map(locale => ({ label: locale.label, name: locale.value })),
      defaultLocale
    }
  }
});
