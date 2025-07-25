const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  //#swagger.tags=['Users']
  const result = await mongodb.getDatabase().collection('users').find(); 
  result.toArray().then((users) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
  });
};


const getSingle = async (req, res) => {
  //#swagger.tags=['Users']
  const userId = new ObjectId (req.params.id);
  const result = await mongodb.getDatabase().collection('users').find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(users[0]);
  });
};

const createUser = async (req, res) => {
  //#swagger.tags=['Users']
  try {
    const user = {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      ipaddress: req.body.ipaddress
    };

    const response = await mongodb.getDatabase().collection('users').insertOne(user);
    if (response.acknowledged) {
      res.status(201).json({ message: 'User created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create user' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || 'Some error occurred while creating the user.' });
  }
};


const updateUser = async (req, res) => {
  //#swagger.tags=['Users']
  //#swagger.parameters['body'] = {
  //    in: 'body',
  //    required: true,
  //    schema: {
  //        email: 'test@test.com',
  //        username: 'usuarioTest',
  //        name: 'Nombre completo',
  //        ipaddress: '192.168.1.1'
  //    }
  // }
  console.log('req.body:', req.body);
  try {
    const userId = new ObjectId(req.params.id);
    const user = {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      ipaddress: req.body.ipaddress
    };

   const response = await mongodb.getDatabase().collection('users').replaceOne({ _id: userId }, user);
   
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found or no changes made.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || 'Some error occurred while updating the user.' });
  }
};


const deleteUser = async (req, res) => {
  //#swagger.tags=['Users']
  const userId = new ObjectId (req.params.id);
  const response = await mongodb.getDatabase().collection('users').deleteOne({ _id: userId }, true); 
  
  if (response.deletedCount > 0) {
    res.status(204).send();
  } 
  else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};


module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};