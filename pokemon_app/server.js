const express = require('express');
const app = express();
const port = 3001;
const jsxEngine = require('jsx-view-engine');
const Pokemon = require('./models/pokemon'); // Rename the imported data variable
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const bodyParser = require('body-parser');

// Add .jpg to the end of each Pokémon's image URL
const updateImageUrls = async () => {
  const pokemon = await Pokemon.find({});
  return pokemon.map((poke) => ({
    ...poke.toObject(),
    img: `${poke.img}.jpg`, // Append '.jpg' to the image URL
  }));
};

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
})

// Middleware... near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

app.get("/pokemon/", async (req, res) => {
  try {
  const pokemon = await Pokemon.find({});
  res.render("Index", { pokemon: pokemon });
  } catch(error) {
      console.error(error);
  }
});

app.get('/pokemon/new', (req, res)=>{
  res.render('New');
});

app.get('/pokemon/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await Pokemon.findById(req.params.id);

    if (!pokemon) {
      res.status(404).send('Pokemon Not Found');
      return;
    }

    res.render('Show', { pokemon: pokemon });
  } catch (error) {
    console.log(error)
  }
});

app.post('/pokemon', async (req, res) => {
  const { name } = req.body;
  const img = `http://img.pokemondb.net/artwork/${name}.jpg`;

  try {
    // Create a new Pokemon document and save it to MongoDB
    const newPokemon = new Pokemon({ name, img });
    await newPokemon.save();

    res.redirect('/pokemon');
  } catch (error) {
  console.log(error)
}
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
