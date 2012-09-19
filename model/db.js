function User(name, email) {
  this.name = name;
  this.email = email;
}

// Dummy users
var users = [
  new User('tj', 'tj@vision-media.ca'),
  new User('ciaran', 'ciaranj@gmail.com'),
  new User('aaron', 'aaron.heckmann+github@gmail.com')
];

module.exports = users;