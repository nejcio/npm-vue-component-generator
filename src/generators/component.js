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
    },
    {
      type: 'confirm',
      name: 'store',
      message: 'Store - vuex?'
    }
  ],
  actions: function(data) {
    var basicActions = [{
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.js',
        templateFile: 'src/templates/component/component.js',
      },
      {
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.spec.js',
        templateFile: 'src/templates/component/component.spec.js',
      },
      {
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.scss',
        templateFile: 'src/templates/component/component.scss',
      },
      {
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.vue',
        templateFile: 'src/templates/component/component.vue',
      },
      {
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.html',
        templateFile: 'src/templates/component/component.html',
      }
    ];
    if (data.store) {
      basicActions.push({
        type: 'add',
        path: '../../'+ config.folder +'components/{{parent}}/{{snakeCase name}}/{{snakeCase name}}.module.js',
        templateFile: 'src/templates/component/component.module.js',
      })
    }

    return basicActions;
  }
}
