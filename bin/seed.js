const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebritiesArray = [
  { 
    name: "Leo Messi",
    occupation: "Football player",
    catchPhrase: "Querían las 3, acá las tenés"
  },
  { 
    name: "Pepe Rubianes",
    occupation: "Actor",
    catchPhrase: "A mi la unidad de España..."
  },
  { 
    name: "Donald Trump",
    occupation: "Trash talker",
    catchPhrase: "WTF"
  }
];

Celebrities.create(celebritiesArray, (err) => {
  if(err){ throw(err) }
  console.log(`Created ${celebritiesArray.length} celebrities`)
  mongoose.connection.close();
});