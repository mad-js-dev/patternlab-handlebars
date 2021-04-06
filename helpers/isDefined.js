
  module.exports = function(Handlebars) {
    Handlebars.registerHelper('isdefined', function (value) {
        return value !== undefined;
    });
  };
  