var extend = function(destination, source) {
  for (key in source) {
    destination[key] = source[key];
  }
  return destination;
};
