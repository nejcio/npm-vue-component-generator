const config = require('./generator.config.js');
module.exports = function(plop) {

  // Initialize generators
  // ============================================
  config.generators.forEach(function(generator) {
    plop.setGenerator(generator.name, generator.generator);
  })
};
