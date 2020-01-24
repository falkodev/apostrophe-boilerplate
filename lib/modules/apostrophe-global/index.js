module.exports = {
    beforeConstruct (self, options) {
      options.addFields = [
        {
          name: 'test',
          label: 'Test',
          type: 'string',
          def: 'Something',
        }
      ].concat(options.addFields || [])
    },
  }
  