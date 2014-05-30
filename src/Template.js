var render = function(template, data){
  // find values in template to be interpolated
  // save values in array
  // match saved values with data object properties
  // if they match, interpolate
  // remove double curly braces
  var renderedTemplate = template;
  for (var property in data) {
    var regex = new RegExp("{{" + property + "}}", "g");
    var renderedTemplate = renderedTemplate.replace( regex, data[property]);
  }
  return renderedTemplate;
};
