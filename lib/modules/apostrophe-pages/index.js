// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'other',
      label: 'Other'
    },
    {
      name: 'custom-page',
      label: 'Custom'
    }
  ]
};
