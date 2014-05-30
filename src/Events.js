var Events = {
  on: function(event, func) {
    if (this.events == undefined) {
      this.events = {};
    }
    if (this.events[event] == undefined) {
      this.events[event] = [];
      this.events[event].push(func);
    } else {
      this.events[event].push(func);
    }
  },

  trigger: function(event) {
    for (i = 0; i < this.events[event].length; i++) {
      this.events[event][i]();
    }
  }
};
