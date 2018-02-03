const config = require('../../../../generator.config.json');

module.exports = {
  description: 'Component generator',
  prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name?',
      validate: function(value) {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'name is required';
      }
    },
    {
      type: 'input',
      name: 'parent',
      message: 'Component parent?',
    }
  ],
  actions: [{
      type: 'add',
      path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.js',
      templateFile: 'src/templates/simple-component/component.js',
    },
    {
      type: 'add',
      path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.scss',
      templateFile: 'src/templates/simple-component/component.scss',
    },
  ]
}
