const user = {}

user.getUser = async function(req, res) {
  res.json({ message: 'Lista de usuarios' });

}


// user.createUser = async function(req, res) { ... }
// user.getUserById = async function(req, res) { ... }
// user.updateUser = async function(req, res) { ... }
// user.deleteUser = async function(req, res) { ... }

module.exports = user;