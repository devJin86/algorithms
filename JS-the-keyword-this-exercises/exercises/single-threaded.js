var Project = function (title, link, stack) {
  this.title = title;
  this.link = link;
  this.stack = stack;
};

Project.prototype.describeStack = function() {
  this.stack.forEach(function(framework) {
    console.log(this.title + ' was built with ' + framework);
  });
};

var myTitle = 'Sewing with JavaScript';
var myLink = 'http://www.knithub.com/sewingWithJS';
var myStack = ['Backbone', 'Node', 'MongoDB'];
var sewingWithJS = new Project(myTitle, myLink, myStack);

// What would the following invocation log?
// What binding pattern causes this?
// How would you modify .describeStack to achieve the expected result?
sewingWithJS.describeStack();
