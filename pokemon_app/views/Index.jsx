import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Index extends React.Component  {
  render () {
  const { pokemon } = this.props
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>
            <img src={poke.img} alt={poke.name} />
            <a href={`/pokemon/${index}`}>{capitalizeFirstLetter(poke.name)}</a>
          </li>
        ))}
      </ul>
      <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
      </nav>
    </div>
  );
}
}

module.exports = Index;
