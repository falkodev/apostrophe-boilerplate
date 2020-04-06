module.exports = {
  extend: 'apostrophe-pieces',
  name: 'custom',
  alias: 'custom',
  beforeConstruct(self, options) {
    options.addFields = [
      {
        name: 'description',
        type: 'string',
      },
      {
        type: 'checkboxes',
        name: 'preferences',
        label: 'Preferences (check one or more)',
        // choices: [
        //   {
        //     label: 'Big',
        //     value: 'big'
        //   },
        //   {
        //     label: 'Friendly',
        //     value: 'friendly'
        //   },
        //   {
        //     label: 'Furry',
        //     value: 'furry'
        //   }
        // ],
        choices: 'getCheckboxesChoices'
      },
      {
        type: 'select',
        name: 'housing',
        label: 'Where will you be staying?',
        // choices: 'getSelectChoices',
        // selectMultiple: true,
        choices: [
          {
            label: 'On Campus',
            value: 'on-campus'
          },
          {
            label: 'Off Campus',
            value: 'off-campus'
          }
        ]
      },
      ...(options.addFields || []),
    ]

    options.arrangeFields = [
      {
        name: 'basics',
        label: 'Basics',
        fields: ['title', 'slug', 'description', 'preferences', 'housing', 'published', 'tags'],
      },
      ...(options.arrangeFields || []),
    ]
  },
  construct(self, options) {
    self.getCheckboxesChoices = () => [
      {
        label: 'Big',
        value: 'big'
      },
      {
        label: 'Friendly',
        value: 'friendly'
      },
      {
        label: 'Furry',
        value: 'furry'
      }
    ]

    self.getSelectChoices = () => [
      {
        label: 'On Campus',
        value: 'on-campus'
      },
      {
        label: 'Off Campus',
        value: 'off-campus'
      }
    ]
  }
}
