const express = require('express');
const app = express();
const port = 3001;
const jsxEngine = require('jsx-view-engine');
const pokemon = require('./models/pokemon');


app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());
//Middleware... near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.get('/pokemon', (req, res) => {
  // Render the 'Index' view (Index.jsx) and pass the 'pokemon' data
  res.render('Index', { pokemon : pokemon });
});

app.get('/pokemon/:id', (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
